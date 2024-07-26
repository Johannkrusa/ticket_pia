export interface IRegisterUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: {
    year: number;
    month: number;
    day: number;
  };
  phone_number: string;
  email_notification: boolean;
}

export interface IRegisterOrganizer {
  email: string;
  organizer_name: string;
  phone_number: string;
  organizer_email: string;
}

export interface IRequest extends Request {
  payload?: any;
}

import { Request } from 'express';

export interface IEventDetails {
  event_name: string;
  event_details: string;
  genre_id: number;
  region_id: number;
  venue_name: string;
  city_name: string;
  street_address: string;
  schedules: Array<{
    start_date: string;
    start_time: string;
    end_date: string;
    end_time: string;
  }>;
  tickets: Array<{
    ticket_name: string;
    ticket_details: string;
    schedule_indices: number[];
    ticket_price: number;
    ticket_qty: number;
  }>;
  event_main_picture: File;
  event_other_pictures: File[];
}

export interface IUser {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  password: string;
  jobPositionId: number;
  shiftId: number;
  verified?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}


export interface ITicket {
  ticket_name: string;
  ticket_details: string;
  ticket_price: number;
  ticket_qty: number;
  schedule_indices: number[];
}

export interface ISchedule {
  start_date: string;
  start_time: string;
  end_date: string;
  end_time: string;
}

export interface IEventRequest extends Request {
  query: {
    genreId?: string;
    locationId?: string;
    EventId?: string;
    organizerId?: string;
    result?: string;
  };
}
export interface ISendEmailVerification {
  userId: string;
  roleId: number;
  userEmail: string;
}

export interface ITokenPayload {
  userId: string;
  roleId?: number;
}
