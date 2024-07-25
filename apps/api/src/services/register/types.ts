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
    email: string,
    organizer_name: string,
    phone_number: string,
    organizer_email: string
  }
  