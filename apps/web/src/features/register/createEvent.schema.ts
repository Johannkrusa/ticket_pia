import * as Yup from 'yup';
import { bytesToMega } from '../hooks/useFormatData';

export const createEventSchema = Yup.object().shape({
  event_name: Yup.string().required('Event name is required'),
  event_details: Yup.string().required('Event details are required'),
  genre_id: Yup.number().required('Genre is required'),
  region_id: Yup.number().required('Region is required'),
  venue_name: Yup.string().required('Venue is required'),
  city_name: Yup.string().required('City is required'),
  street_address: Yup.string().required('Address is required'),
  schedules: Yup.array()
    .of(
      Yup.object().shape({
        start_date: Yup.date().required('Start date is required'),
        start_time: Yup.string().required('Start time is required'),
        end_date: Yup.date()
          .required('End date is required')
          .min(Yup.ref('start_date'), "End date can't be before start date"),
        end_time: Yup.string().required('End time is required'),
      }),
    )
    .min(1, 'At least one schedule is required'),
  tickets: Yup.array()
    .of(
      Yup.object().shape({
        ticket_name: Yup.string().required('Ticket name is required'),
        ticket_details: Yup.string().required('Ticket details is required'),
        schedule_indices: Yup.array()
          .of(Yup.number().required())
          .test('unique', 'Schedule indices must be unique', function (value) {
            return value && new Set(value).size === value.length;
          })
          .min(1, 'At least one schedule index is required'),
        ticket_price: Yup.number()
          .required('Ticket price is required')
          .min(0, 'Price cannot be a negative number'),
        ticket_qty: Yup.number()
          .required('Ticket quantity is required')
          .min(10, 'Minimal quantity is 10'),
      }),
    )
    .min(1, 'At least one ticket is required'),
  event_main_picture: Yup.mixed()
    .required('Event picture is required')
    .test('fileFormat', 'Unsupported Format', (value: any) => {
      return value && acceptedImageTypes.includes(value.type);
    })
    .test('fileSize', 'File Size is too large', (value: any) => {
      return value && bytesToMega(value.size) <= 5; // 5MB
    }),
  other_event_pictures: Yup.array()
    .of(
      Yup.mixed()
        .required('Other pictures are required')
        .test('fileFormat', 'Unsupported Format', (value: any) => {
          return value && acceptedImageTypes.includes(value.type);
        })
        .test('fileSize', 'File Size is too large', (value: any) => {
          return value && bytesToMega(value.size) <= 5; // 5MB
        }),
    )
    .min(1, 'At least one other picture is required')
    .max(3, 'You can only select up to 3 pictures'),
  terms_checkbox: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions',
  ),
});

const acceptedImageTypes = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/bmp',
  'image/tiff',
  'image/webp',
  'image/svg+xml',
  'image/vnd.adobe.photoshop',
  'image/x-icon',
  'image/heic',
  'image/heif',
  'image/jfif',
];
