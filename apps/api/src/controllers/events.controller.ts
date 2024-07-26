import { Response, NextFunction } from 'express';
import { IRequest, ITicket, ISchedule, IEventRequest } from '@/types/types';
import * as fs from 'fs';
import { prisma, TicketType } from '@/connections/prisma.connections';
import { string } from 'yup';

export const createEvents = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { userId, roleId } = req.payload;
    const { body, files } = req;

    if (roleId !==2) {
      console.log(roleId)
      return next({ message: 'Unauthorized organizer only', status: 401 });
    }

    if (!body) {
      return next({ message: 'Body not found', status: 400 });
    }

    if (!files) {
      return next({ message: 'No files uploaded', status: 400 });
    }

    // Parse schedules
    const schedules: ISchedule[] = [];
    const scheduleCount = parseInt(body['schedulesCount'], 10);
    for (let i = 0; i < scheduleCount; i++) {
      const schedule: ISchedule = {
        start_date: body[`schedules[${i}][start_date]`],
        start_time: body[`schedules[${i}][start_time]`],
        end_date: body[`schedules[${i}][end_date]`],
        end_time: body[`schedules[${i}][end_time]`],
      };
      schedules.push(schedule);
    }

    console.log('Parsed schedules:', schedules);

    // Define the event object
    const event = {
      event_name: body.event_name,
      event_details: body.event_details,
      genre_id: parseInt(body.genre_id, 10),
      region_id: parseInt(body.region_id, 10),
      venue_name: body.venue_name,
      city_name: body.city_name,
      street_address: body.street_address,
    };

    const mainPicture = (files as any).event_main_picture?.[0];
    const otherPictures = (files as any).event_other_pictures;

    const createdEvent = await prisma.$transaction(async (transaction) => {
      const createdLocation = await transaction.location.create({
        data: {
          venue: event.venue_name,
          city: event.city_name,
          address: event.street_address,
          regionId: event.region_id,
        },
      });

      const createdEvent = await transaction.event.create({
        data: {
          title: event.event_name,
          details: event.event_details,
          organizerId: userId,
          locationId: createdLocation.id,
          genreId: event.genre_id,
        },
      });

      console.log('Created event:', createdEvent);

      // Create schedules
      let createdSchedules;
      if (schedules.length === 1) {
        const createdSchedule = await transaction.schedule.create({
          data: {
            eventId: createdEvent.id,
            startDate: new Date(schedules[0].start_date),
            startTime: new Date(schedules[0].start_time),
            endDate: new Date(schedules[0].end_date),
            endTime: new Date(schedules[0].end_time),
          },
        });
        createdSchedules = [createdSchedule];
      } else {
        await transaction.schedule.createMany({
          data: schedules.map(schedule => ({
            eventId: createdEvent.id,
            startDate: new Date(schedule.start_date),
            startTime: new Date(schedule.start_time),
            endDate: new Date(schedule.end_date),
            endTime: new Date(schedule.end_time),
          })),
        });

        // Fetch the created schedules to get their IDs
        createdSchedules = await transaction.schedule.findMany({
          where: {
            eventId: createdEvent.id,
          },
        });
      }

      console.log('Created schedules:', createdSchedules);

      // Parse tickets
      const tickets: ITicket[] = [];
      const ticketCount = parseInt(body['ticketsCount'], 10);
      for (let i = 0; i < ticketCount; i++) {
        const ticket: ITicket = {
          ticket_name: body[`tickets[${i}][ticket_name]`],
          ticket_details: body[`tickets[${i}][ticket_details]`],
          ticket_price: parseFloat(body[`tickets[${i}][ticket_price]`]),
          ticket_qty: parseInt(body[`tickets[${i}][ticket_qty]`], 10),
          schedule_indices: body[`tickets[${i}][schedule_indices]`].map((index: string) => parseInt(index, 10)),
        };

        tickets.push(ticket);
      }

      console.log('Parsed tickets:', tickets);

      // Create tickets and associate them with the created schedules
      const ticketsData = tickets.flatMap(ticket => {
        return ticket.schedule_indices.map(scheduleIndex => ({
          name: ticket.ticket_name,
          details: ticket.ticket_details,
          eventId: createdEvent.id,
          scheduleId: createdSchedules[scheduleIndex].id,
          className: 'REGULAR',
          price: ticket.ticket_price,
          type: TicketType.DIGITAL,
          totalQty: ticket.ticket_qty,
          qty: ticket.ticket_qty,
        }));
      });

      await transaction.eventTicket.createMany({
        data: ticketsData,
      });

      console.log('Created tickets:', ticketsData);

      if (mainPicture) {
        await transaction.eventPicture.create({
          data: {
            link: mainPicture.path,
            eventId: createdEvent.id,
          },
        });
      }

      if (otherPictures) {
        const eventPictures = otherPictures.map(
          (file: Express.Multer.File) => ({
            link: file.path,
            eventId: createdEvent.id,
          }),
        );

        await transaction.eventPicture.createMany({
          data: eventPictures,
        });
      }

      return createdEvent;
    });

    res.status(201).send({
      error: false,
      message: 'New event has been added successfully',
      data: createdEvent,
    });
  } catch (error) {
    console.error('Error creating event:', error);
    const files = req.files as {
      event_main_picture?: Express.Multer.File[];
      event_other_pictures?: Express.Multer.File[];
    };

    if (files?.event_main_picture) {
      fs.rmSync(files.event_main_picture[0].path, { force: true });
    }
    if (files?.event_other_pictures) {
      files.event_other_pictures.forEach((item: Express.Multer.File) => {
        fs.rmSync(item.path, { force: true });
      });
    }
    next(error);
  }
};


export const getEvent = async (req: IEventRequest, res: Response, next: NextFunction): Promise<void> => {
  const { genreId, locationId, EventId, organizerId, result } = req.query;

  try {
    const events = await prisma.event.findMany({
      where: {
        ...(organizerId ? { organizerId: String(organizerId) } : {}),
        ...(genreId ? { genreId: Number(genreId) } : {}),
        ...(locationId ? { locationId: Number(locationId) } : {}),
        ...(EventId ? { id: Number(EventId) } : {}),
      },
      include: {
        genre: true,
        location: true,
        EventPicture: true,
        EventTicket: true,
      },
      take: result ? Number(result) : undefined,
    });

    res.send({
      error: false,
      message: 'Fetch data successful',
      data: {
        events,
      },
    });
  } catch (error) {
    next(error);
  }
};