

export const formatUserData = async (
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  date?: Date,
): Promise<{
  uppercasedFirstName?: string;
  uppercasedLastName?: string;
  lowercasedEmail?: string;
  formattedTime?: string;
  formattedDate?: string;
  dayOfWeek?: string;
  dayOfWeekInJapanese?: string;
}> => {
  try {
    // Convert to uppercase and lowercase
    const uppercasedFirstName = firstName?.toUpperCase();
    const uppercasedLastName = lastName?.toUpperCase();
    const lowercasedEmail = email?.toLowerCase();

    let formattedTime: string | undefined;
    let formattedDate: string | undefined;
    let dayOfWeek: string | undefined;
    let dayOfWeekInJapanese: string | undefined;

    if (date) {
      const dateTime = new Date(date); // Ensure date is a Date object

      if (isNaN(dateTime.getTime())) {
        throw new Error('Invalid date provided');
      }

      // Formatting time
      const hours = dateTime.getUTCHours().toString().padStart(2, '0');
      const minutes = dateTime.getUTCMinutes().toString().padStart(2, '0');
      formattedTime = `${hours}:${minutes}`;

      // Formatting date
      const year = dateTime.getUTCFullYear();
      const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0');
      const day = dateTime.getUTCDate().toString().padStart(2, '0');

      formattedDate = `${year}/${month}/${day}`;

      // Formatting day of the week
      const dayOfWeekFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      });
      const dayOfWeekName = dayOfWeekFormatter.format(dateTime);
      const dayOfWeekMap: { [key: string]: string } = {
        Monday: '月',
        Tuesday: '火',
        Wednesday: '水',
        Thursday: '木',
        Friday: '金',
        Saturday: '土',
        Sunday: '日',
      };
      dayOfWeek = dayOfWeekName;
      dayOfWeekInJapanese = dayOfWeekMap[dayOfWeekName];
    }

    return {
      uppercasedFirstName,
      uppercasedLastName,
      lowercasedEmail,
      formattedTime,
      formattedDate,
      dayOfWeek,
      dayOfWeekInJapanese,
    };
  } catch (error: any) {
    console.error('Error formatting user data:', error.message);
    throw new Error('Error formatting user data');
  }
};

export const formatToCamelCase = (input?: string)=> {
  if (!input) {
    return ''; // or return a default value if needed
  }

  return input
    .toLowerCase()
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const formatToUpperCase = (input?: string): string => {
  if (!input) {
    return '';
  }

  return input.toUpperCase().split('_').join(' ');
};

export const bytesToMega = (bytes?: any): any | undefined => {
  if (bytes === undefined) {
    return undefined;
  }

  return bytes / (1024 * 1024);
};

export const convertUnderscoreToSpace = (text?: string): any | undefined => {
  if(text === undefined){
    return undefined
  }
  return text.replace(/_/g, ' ');
};