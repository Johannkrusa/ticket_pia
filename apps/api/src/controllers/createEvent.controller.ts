import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { prisma } from '@/connections/prisma.connections';
import { IRequest } from '@/services/types';


export const createProduct = async (
  req: IRequest,
  res: Response,
  next: NextFunction,
) => {
  const { userId, roleId } = req.payload;

  if(!req.body){
    throw({message:'Req body is empty'})
  }

  let response;
  try {
    const {event_name} = JSON.parse(req.body.jsonEventData);
  } catch (error) {
    return next({ message: 'Invalid JSON data', status: 400 });
  }

  if (!req.files || !Array.isArray(req.files) && !req.files.event_other_pictures) {
    return next({ message: 'Image is required', status: 400 });
  }

  const files = Array.isArray(req.files) ? req.files : req.files.event_other_pictures;

  try {
    const [createdEvent, ticketsData] = await prisma.$transaction(async (transaction) => {
      const createdLocation = await transaction.location.create({
        data: {
          venue: response.venue_name,
          city: response.city_name,
          address: response.street_address,
          regionId: response.region_id,
        },
      });

      const createdEvent = await transaction.event.create({
        data: {
          title: response.event_name,
          details: response.event_details,
          organizerId: userId,
          locationId: createdLocation.id,
          genreId: response.genre_id,
        },
      });

      const ticketsData = response.tickets.map((ticket: any) => ({
        name: ticket.ticket_name,
        details: ticket.ticket_details,
        eventId: createdEvent.id,
        class: 'REGULAR',
        price: ticket.ticket_price,
        type: 'DIGITAL',
        totalQty: ticket.ticket_qty,
        qty: ticket.ticket_qty,
      }));

      await transaction.eventTicket.createMany({
        data: ticketsData,
      });

      const eventPictures = files.map((file: Express.Multer.File) => ({
        link: file.path,
        eventId: createdEvent.id,
      }));

      await transaction.eventPicture.createMany({
        data: eventPictures,
      });

      return [createdEvent, ticketsData];
    });

    res.send({
      error: false,
      message: 'New event has been added successfully',
      data: {},
    });
  } catch (error) {
    files?.forEach((item: Express.Multer.File) => {
      fs.rmSync(item.path);
    });
    next(error);
  }
};

// Middleware to handle file uploads
const upload = multer({ dest: 'uploads/' }).fields([
  { name: 'event_main_picture', maxCount: 1 },
  { name: 'event_other_pictures', maxCount: 10 },
]);

export const createProductHandler = [
  upload,
  createProduct,
];
