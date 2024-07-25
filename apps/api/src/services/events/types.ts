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
