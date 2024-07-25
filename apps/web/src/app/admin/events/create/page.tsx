'use client';

import { Field, Form, Formik, FieldArray } from 'formik';
import React from 'react';
import CustomErrorMessageComponent from '@/components/CustomErrorMessage';
import { useSelector } from 'react-redux';
import useValidateOrganizer from '@/features/hooks/useValidateOrganizer.hook';
import { useEffect, useState } from 'react';
import { useGetRegion } from '@/features/api/useGetRegion.hook';
import { useGetGenre } from '@/features/api/useGetGenres.hook';
import { createEventSchema } from '@/features/register/createEvent.schema';
import { usePostCreateEvent } from '@/features/admin/events/hooks/usePostCreateEvent.hook';

export default function CreateEventPage() {
  // Redux state for authentication
  const auth = useSelector((state: any) => state.auth);
  const roleId = auth?.auth?.roleId ?? 'defaultRoleId';
  const verified = auth?.auth?.verified ?? false;
  const { mutationCreateEvent, isPending } = usePostCreateEvent();

  // State management
  const [authLoaded, setAuthLoaded] = useState(false);
  const [organizerName, setOrganizerName] = useState<string | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Fetch genres data
  const {
    data: genres,
    error: genreError,
    isLoading: isLoadingGenres,
  } = useGetGenre();

  // Fetch regions data
  const {
    data: regions,
    error: regionError,
    isLoading: isLoadingRegion,
  } = useGetRegion();

  // Set authLoaded, organizerName, and isDataLoaded when auth state changes
  useEffect(() => {
    if (auth && auth.auth) {
      setAuthLoaded(true);
      setOrganizerName(auth.auth.organizer.name ?? 'Fetching data');
      setIsDataLoaded(true);
    }
  }, [auth]);

  // Validate organizer
  useValidateOrganizer({ roleId, verified, authLoaded });

  // Initial form values
  const initialValues = {
    event_name: '',
    event_details: '',
    genre_id: 0,
    region_id: 0,
    venue_name: '',
    city_name: '',
    street_address: '',
    schedules: [
      {
        start_date: '',
        start_time: '',
        end_date: '',
        end_time: '',
      },
    ],
    tickets: [
      {
        ticket_name: '',
        ticket_details: '',
        schedule_indices: [] as number[],
        ticket_price: 0,
        ticket_qty: 0,
      },
    ],
    event_main_picture: null,
    event_other_pictures: [],
    terms_checkbox: false,
  };

  if (isLoadingGenres || isLoadingRegion) return <div>Loading...</div>;
  if (genreError) return <div>An error occurred: {genreError.message}</div>;
  if (regionError) return <div>An error occurred: {regionError.message}</div>;

  return (
    <div className="flex  items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col w-full max-w-5xl p-8">
        {/* placeholder  */}
        <img
          src="https://cdn.discordapp.com/attachments/1252607381305692190/1264272085002489937/image.png?ex=669d44a2&is=669bf322&hm=431db8dbf778b30c28a483c3820822636b4071546e6eee304c6992a04f335cc5&"
          alt=""
          className="mb-8"
        />
        <h2 className="text-3xl font-bold mb-8 text-center">
          REGISTER NEW EVENT
        </h2>
        <p className="text-center text-red-500 mb-4 font-semibold">
          Note: PIA MEMBER ID or your email address used for registration will
          be utilized for creating and managing events, while the email
          associated with the organizer account will serve as the primary
          contact for event-related communications.
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={createEventSchema}
          onSubmit={(values) => {
            const formData = new FormData();
            formData.append('event_name', values.event_name);
            formData.append('event_details', values.event_details);
            formData.append('genre_id', values.genre_id.toString());
            formData.append('region_id', values.region_id.toString());
            formData.append('venue_name', values.venue_name);
            formData.append('city_name', values.city_name);
            formData.append('street_address', values.street_address);

            values.schedules.forEach((schedule, index) => {
              formData.append(
                `schedules[${index}][start_date]`,
                schedule.start_date,
              );
              formData.append(
                `schedules[${index}][start_time]`,
                schedule.start_time,
              );
              formData.append(
                `schedules[${index}][end_date]`,
                schedule.end_date,
              );
              formData.append(
                `schedules[${index}][end_time]`,
                schedule.end_time,
              );
            });

            values.tickets.forEach((ticket, index) => {
              formData.append(
                `tickets[${index}][ticket_name]`,
                ticket.ticket_name,
              );
              formData.append(
                `tickets[${index}][ticket_details]`,
                ticket.ticket_details,
              );
              formData.append(
                `tickets[${index}][ticket_price]`,
                ticket.ticket_price.toString(),
              );
              formData.append(
                `tickets[${index}][ticket_qty]`,
                ticket.ticket_qty.toString(),
              );
              ticket.schedule_indices.forEach((scheduleIndex, i) => {
                formData.append(
                  `tickets[${index}][schedule_indices][${i}]`,
                  scheduleIndex.toString(),
                );
              });
              if (values.event_main_picture) {
                formData.append(
                  'event_main_picture',
                  values.event_main_picture,
                );
              }

              if (values.event_other_pictures.length > 0) {
                values.event_other_pictures.forEach((file, index) => {
                  formData.append(`event_other_pictures[${index}]`, file);
                });
              }

              formData.append(
                'terms_checkbox',
                values.terms_checkbox.toString(),
              );

              mutationCreateEvent({formData});
            });
          }}
        >
          {({ setFieldValue, values, isValid }) => {
            return (
              <Form className="space-y-10">
                <h1 className="text-center font-semibold text-xl sm:text-2xl p-2 border-b-2 border-gray-300 mb-8">
                  ORGANIZER INFORMATION
                </h1>

                {/* organizer name */}
                <div className="grid grid-cols-10 mt-8 mb-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="name"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        ORGANIZER
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2"></span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <div className="w-full text-md sm:text-xl px-3 py-2 border-b-2 bg-gray-200">
                      {organizerName}
                    </div>
                  </div>
                </div>
                {/* event name */}
                <div className="grid grid-cols-10 mt-8 mb-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="email"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        EVENT NAME
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="event_name"
                      name="event_name"
                      type="text"
                      placeholder="ENTER YOUR EVENT NAME"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="event_name" />
                    </div>
                  </div>
                </div>

                {/* event details */}
                <div className="grid grid-cols-10 mt-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="email"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        EVENT DETAILS
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="event_details"
                      name="event_details"
                      type="text"
                      placeholder="ENTER YOUR EVENT NAME"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="event_details" />
                    </div>
                  </div>
                </div>

                {/* event genre */}
                <div className="grid grid-cols-10 mt-10 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="email"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        GENRE
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="genre_id"
                      name="genre_id"
                      as="select"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    >
                      <option disabled value="">
                        SELECT AN OPTION
                      </option>
                      {genres.map((genre: any) => (
                        <option key={genre.id} value={genre.id}>
                          {genre.name}
                        </option>
                      ))}
                    </Field>
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="genre_id" />
                    </div>
                  </div>
                </div>

                {/* LOCATION */}
                <h1 className="block text-center font-semibold text-md sm:text-xl p-2 mt-20 border-b-2 border-gray-300 mb-8">
                  LOCATION
                </h1>

                {/* event location */}
                <div className="grid grid-cols-10 py-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="region"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        REGION
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="region_id"
                      name="region_id"
                      as="select"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    >
                      <option disabled value="">
                        SELECT AN OPTION
                      </option>
                      {regions.map((region: any) => (
                        <option key={region.id} value={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </Field>
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="region_id" />
                    </div>
                  </div>
                </div>

                {/* venue */}
                <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="venue"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        VENUE
                        <span className=" text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="venue_name"
                      name="venue_name"
                      type="text"
                      placeholder="ENTER THE VENUE NAME"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="venue_name" />
                    </div>
                  </div>
                </div>

                {/* city */}
                <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="city"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        CITY
                        <span className=" text-red-500">*</span>{' '}
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="city_name"
                      name="city_name"
                      type="text"
                      placeholder="ENTER THE CITY NAME"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="city_name" />
                    </div>
                  </div>
                </div>

                {/* address */}
                <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="address"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        ADDRESS
                        <span className=" text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <Field
                      id="street_address"
                      name="street_address"
                      type="text"
                      placeholder="ENTER THE ADDRESS NAME"
                      className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                      aria-required="true"
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="street_address" />
                    </div>
                  </div>
                </div>

                {/* Schedules Section */}
                <h1 className="block text-center font-semibold text-md sm:text-xl p-2 mt-20 border-b-2 border-gray-300 mb-8">
                  SCHEDULES
                </h1>
                <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="schedules"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        SCHEDULES
                        <span className="sm:hidden inline text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <FieldArray name="schedules">
                      {({ insert, remove }) => (
                        <>
                          {values.schedules.map((schedule, index) => (
                            <div
                              key={index}
                              className="mb-6 border-2  p-4 shadow-md rounded-md"
                            >
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label
                                    htmlFor={`schedules.${index}.start_date`}
                                    className="text-md sm:text-xl font-medium text-gray-700"
                                  >
                                    Start Date
                                  </label>
                                  <Field
                                    name={`schedules.${index}.start_date`}
                                    type="date"
                                    className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                                  />
                                  <CustomErrorMessageComponent
                                    name={`schedules.${index}.start_date`}
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor={`schedules.${index}.start_time`}
                                    className="text-md sm:text-xl font-medium text-gray-700"
                                  >
                                    Start Time
                                  </label>
                                  <Field
                                    name={`schedules.${index}.start_time`}
                                    type="time"
                                    className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                                  />
                                  <CustomErrorMessageComponent
                                    name={`schedules.${index}.start_time`}
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor={`schedules.${index}.end_date`}
                                    className="text-md sm:text-xl font-medium text-gray-700"
                                  >
                                    End Date
                                  </label>
                                  <Field
                                    name={`schedules.${index}.end_date`}
                                    type="date"
                                    className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                                  />
                                  <CustomErrorMessageComponent
                                    name={`schedules.${index}.end_date`}
                                  />
                                </div>
                                <div>
                                  <label
                                    htmlFor={`schedules.${index}.end_time`}
                                    className="text-md sm:text-xl font-medium text-gray-700"
                                  >
                                    End Time
                                  </label>
                                  <Field
                                    name={`schedules.${index}.end_time`}
                                    type="time"
                                    className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                                  />
                                  <CustomErrorMessageComponent
                                    name={`schedules.${index}.end_time`}
                                  />
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="mt-2 text-red-500"
                              >
                                &times; Remove Schedule
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() =>
                              insert(values.schedules.length, {
                                start_date: '',
                                start_time: '',
                                end_date: '',
                                end_time: '',
                              })
                            }
                            className="text-blue-500"
                          >
                            + Add Schedule
                          </button>
                        </>
                      )}
                    </FieldArray>
                  </div>
                </div>

                {/* Tickets Section */}
                <h1 className="block text-center font-semibold text-md sm:text-xl p-2 mt-[40px] border-b-2 border-gray-300 mb-8">
                  EVENT TICKETS
                </h1>
                <FieldArray name="tickets">
                  {({ insert, remove }) => (
                    <>
                      {values.tickets.map((ticket, ticketIndex) => (
                        <div
                          key={ticketIndex}
                          className="mb-6 h-full w-full p-5 shadow-md mt-8 border-2 rounded-xl bg-white"
                        >
                          <div className="grid grid-cols-10 mt-5 space-x-5">
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <label
                                  htmlFor={`tickets.${ticketIndex}.ticket_name`}
                                  className="text-md sm:text-xl font-medium text-gray-700"
                                >
                                  TICKET NAME
                                  <span className=" text-red-500">*</span>
                                </label>
                              </div>
                            </div>
                            <div className="col-span-8">
                              <Field
                                id={`tickets.${ticketIndex}.ticket_name`}
                                name={`tickets.${ticketIndex}.ticket_name`}
                                type="text"
                                placeholder="ENTER THE TICKET NAME"
                                className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                              />
                              <CustomErrorMessageComponent
                                name={`tickets.${ticketIndex}.ticket_name`}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <label
                                  htmlFor={`tickets.${ticketIndex}.ticket_details`}
                                  className="text-md sm:text-xl font-medium text-gray-700"
                                >
                                  TICKET DETAILS
                                  <span className="sm-hidden inline text-red-500">
                                    *
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-span-8">
                              <Field
                                id={`tickets.${ticketIndex}.ticket_details`}
                                name={`tickets.${ticketIndex}.ticket_details`}
                                type="text"
                                placeholder="ENTER THE TICKET DETAILS"
                                className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                              />
                              <CustomErrorMessageComponent
                                name={`tickets.${ticketIndex}.ticket_details`}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <label
                                  htmlFor={`tickets.${ticketIndex}.ticket_price_qty`}
                                  className="text-md sm:text-xl font-medium text-gray-700"
                                >
                                  PRICE AND MAX QUANTITY
                                  <span className="sm-hidden inline text-red-500">
                                    *
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-span-4 flex">
                              <span className=" text-md sm:text-xl px-3 py-2 ">
                                ￥
                              </span>
                              <Field
                                id={`tickets.${ticketIndex}.ticket_price`}
                                name={`tickets.${ticketIndex}.ticket_price`}
                                type="number"
                                placeholder="TICKET PRICE"
                                className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                              />
                              <CustomErrorMessageComponent
                                name={`tickets.${ticketIndex}.ticket_price`}
                              />
                            </div>
                            <div className="col-span-4 flex ">
                              <span className=" text-md sm:text-xl px-3 py-2 ">
                                QTY:
                              </span>
                              <Field
                                id={`tickets.${ticketIndex}.ticket_qty`}
                                name={`tickets.${ticketIndex}.ticket_qty`}
                                type="number"
                                placeholder="TICKET QUANTITY"
                                className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                              />
                              <CustomErrorMessageComponent
                                name={`tickets.${ticketIndex}.ticket_qty`}
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-10 mb-8 mt-8 space-x-5">
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <label
                                  htmlFor={`tickets.${ticketIndex}.schedule_indices`}
                                  className="text-md sm:text-xl font-medium text-gray-700"
                                >
                                  TICKET SCHEDULES
                                  <span className="sm-hidden inline text-red-500">
                                    *
                                  </span>
                                </label>
                              </div>
                            </div>
                            <div className="col-span-8">
                              <FieldArray
                                name={`tickets.${ticketIndex}.schedule_indices`}
                              >
                                {({ push, remove }) => (
                                  <>
                                    {ticket.schedule_indices.map(
                                      (scheduleIndex, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center mb-2"
                                        >
                                          <Field
                                            as="select"
                                            name={`tickets.${ticketIndex}.schedule_indices.${index}`}
                                            className="w-full text-md sm:text-xl px-3 py-2 border-b-2 border-gray-300 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 placeholder:italic"
                                          >
                                            <option
                                              value=""
                                              label="Select a schedule"
                                            />
                                            {values.schedules.map(
                                              (schedule, i) => (
                                                <option key={i} value={i}>
                                                  Schedule {i + 1} (
                                                  {schedule.start_date}{' '}
                                                  {schedule.start_time} -{' '}
                                                  {schedule.end_date}{' '}
                                                  {schedule.end_time})
                                                </option>
                                              ),
                                            )}
                                          </Field>
                                          <button
                                            type="button"
                                            onClick={() => remove(index)}
                                            className="ml-2 p-2 text-2xl text-red-500"
                                          >
                                            &times;
                                          </button>
                                        </div>
                                      ),
                                    )}
                                    <button
                                      type="button"
                                      onClick={() =>
                                        push(
                                          values.schedules.length
                                            ? values.schedules[0]
                                            : 0,
                                        )
                                      }
                                      className="text-blue-500"
                                    >
                                      + Add Schedule
                                    </button>
                                  </>
                                )}
                              </FieldArray>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => remove(ticketIndex)}
                            className=" text-red-500"
                          >
                            &times; Remove Ticket
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() =>
                          insert(values.tickets.length, {
                            ticketName: '',
                            scheduleIndices: [],
                          })
                        }
                        className="text-blue-500 border bg-white border-blue-500 p-2 rounded-md mt-8"
                      >
                        + Add Ticket
                      </button>
                    </>
                  )}
                </FieldArray>

                <div className="flex items-center justify-center">
                  <CustomErrorMessageComponent name="ticket_schedule" />
                </div>

                {/* PICTURES */}
                <h1 className="block text-center font-semibold text-md sm:text-xl p-2 mt-20 border-b-2 border-gray-300 mb-8">
                  EVENT PICTURES
                </h1>
                {/* Event Pictures */}
                <div className="grid grid-cols-10 mt-8 mb-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="picture"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        MAIN PICTURE
                      </label>
                      <span className="text-md sm:text-xl font-medium text-red-500 ml-2">
                        *
                      </span>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <input
                      id="event_main_picture"
                      name="event_main_picture"
                      type="file"
                      className="mt-1 block w-full text-md text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-md file:border-0  file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      aria-required="true"
                      onChange={(event) => {
                        const file = event.currentTarget.files
                          ? event.currentTarget.files[0]
                          : null;
                        setFieldValue('event_main_picture', file);
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setImagePreview(reader.result as string);
                          };
                          reader.readAsDataURL(file);
                        } else {
                          setImagePreview(null);
                        }
                      }}
                    />
                    <div className="flex items-center justify-center">
                      <CustomErrorMessageComponent name="event_main_picture" />
                    </div>
                    {imagePreview && (
                      <div className="mt-4">
                        <img
                          src={imagePreview}
                          alt="Event Preview"
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* Event Other Pictures */}
                <div className="grid grid-cols-10 mt-8 mb-8 space-x-5">
                  <div className="col-span-2">
                    <div className="flex items-center">
                      <label
                        htmlFor="picture"
                        className="text-md sm:text-xl font-medium text-gray-700"
                      >
                        OTHER PICTURES
                      </label>
                    </div>
                  </div>
                  <div className="col-span-8">
                    <input
                      id="other_event_pictures"
                      name="other_event_pictures"
                      type="file"
                      className="mt-1 block w-full text-md text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:text-md file:border-0  file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                      multiple
                    ></input>
                  </div>
                </div>

                <h1 className="block text-center font-semibold text-md sm:text-xl p-2  border-b-2 border-gray-300 mb-8">
                  TERMS OF SERVICE
                </h1>
                <div className="w-full h-60 overflow-auto border border-blue-500 p-4 bg-gray-50 mb-8">
                  <p className="text-sm leading-relaxed text-blue-500 p-5">
                    ---------------------------------
                    <br />
                    PIA ORGANIZER TERMS OF SERVICE
                    <br />
                    ---------------------------------
                    <br />
                    <br />
                    Article 1: (Scope and Amendment of PIA Membership Agreement)
                    The PIA Membership Agreement (hereinafter referred to as the
                    “PIA Membership Agreement”) is a contract between PIA
                    Corporation (hereinafter referred to as the “Company”) and
                    Pia Corporation (hereinafter referred to as “Pia”). The PIA
                    Membership Agreement (hereinafter referred to as the “PIA
                    Membership Agreement”) is a contract between PIA Corporation
                    (hereinafter referred to as the “Company”) and PIA Inc.
                    (hereinafter referred to as the “Company”) (hereinafter
                    referred to as the “Service” and includes services provided
                    through the “Ticket PIA” application and other services
                    provided by the Company as well as the services set forth in
                    each individual provision (set forth in the following
                    section)). (hereinafter referred to as the “Service”). The
                    “Services” shall apply to the Company and PIA members
                    (hereinafter referred to as “Members”) with respect to the
                    use of the “Ticket PIA” application, etc. provided by the
                    Company.
                    <br />
                    <br />
                    PIA Membership Terms and Conditions In addition to the PIA
                    Terms of Use, the Company may also provide guidelines,
                    policies, or other documents by any other name that
                    stipulate the terms and conditions of use of the service
                    (hereinafter referred to as “Individual Regulations” and
                    together with the PIA Terms of Use, “Terms and Conditions,
                    etc.”). In the event that there are other documents that
                    stipulate terms and conditions of use of the Service
                    (hereinafter referred to as “Individual Regulations”),
                    Members must use the Service in accordance with the
                    provisions of the Individual Regulations as well as the PIA
                    Membership Agreement.
                    <br />
                    <br />
                    Members must check the information, precautions, etc.
                    provided in the Service each time they use the Service. By
                    using the Service, members are deemed to have agreed to all
                    of the terms and conditions contained in the Terms of
                    Service.
                    <br />
                    <br />
                    The Company may change the Terms of Service in accordance
                    with the provisions of Article 548-4 of the Civil Code. In
                    the event that the Terms of Service are changed, the Company
                    will notify members at least one month prior to the change,
                    the contents of the Terms of Service, and the effective date
                    of the change on the Company`s website. If a member uses the
                    Service after the Company has notified the member of the
                    revised Terms and Conditions and after the revised Terms and
                    Conditions have become effective, the member will be deemed
                    to have agreed to the revised Terms and Conditions. If a
                    member does not agree to the modified version of the Terms
                    of Use, etc., the member may not use the Service any
                    further.
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-2 mb-8">
                  <Field
                    id="terms_checkbox"
                    name="terms_checkbox"
                    type="checkbox"
                    className="form-checkbox h-6 w-6 text-gray-600"
                  />
                  <label
                    htmlFor="terms_checkbox"
                    className="text-md text-gray-700"
                  >
                    I AGREE TO THE TERMS AND CONDITIONS AND PRIVACY POLICY
                  </label>
                  <div className="absolute items-center justify-center">
                    <CustomErrorMessageComponent name="terms_checkbox" />
                  </div>
                </div>

                <div className="py-2 px-4 flex flex-col items-center pt-10 pb-10">
                  <button
                    type="submit"
                    disabled={!isValid || isPending}
                    className={`w-[60%] h-14 mt-4 ${
                      !isValid
                        ? 'bg-red-500 cursor-not-allowed'
                        : isPending
                          ? 'bg-gray-500 cursor-not-allowed'
                          : 'bg-blue-400 hover:bg-blue-500'
                    } text-white font-semibold rounded-md shadow-sm focus:outline-none`}
                  >
                    {isPending
                      ? 'REGISTERING'
                      : !isValid
                        ? 'Invalid Input'
                        : 'Register'}
                  </button>
                  <button type="submit">submit2</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
