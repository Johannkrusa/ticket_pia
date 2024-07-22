import { hashPassword } from './hashPassword.helper';

export const formatUserData = async (
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  date?: Date
): Promise<{
  uppercasedFirstName?: string;
  uppercasedLastName?: string;
  lowercasedEmail?: string;
  hashedPassword?: string;
  formattedTime?: string;
  formattedDate?: string;
  dayOfWeek?: string;
  dayOfWeekInJapanese?: string;
}> => {
  try {
    const uppercasedFirstName = firstName?.toUpperCase();
    const uppercasedLastName = lastName?.toUpperCase();
    const lowercasedEmail = email?.toLowerCase();
    const hashedPassword = password ? await hashPassword(password) : undefined;

    let formattedTime: string | undefined;
    let formattedDate: string | undefined;
    let dayOfWeek: string | undefined;
    let dayOfWeekInJapanese: string | undefined;

    if (date) {
      const dateTime = new Date(date);
      const hours = dateTime.getUTCHours().toString().padStart(2, '0');
      const minutes = dateTime.getUTCMinutes().toString().padStart(2, '0');
      formattedTime = `${hours}:${minutes}`;

      const year = dateTime.getUTCFullYear();
      const month = (dateTime.getUTCMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
      const day = dateTime.getUTCDate().toString().padStart(2, '0');

      const dayOfWeekFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
      const dayOfWeekName = dayOfWeekFormatter.format(dateTime);
      const dayOfWeekMap: { [key: string]: string } = {
        'Monday': '月',
        'Tuesday': '火',
        'Wednesday': '水',
        'Thursday': '木',
        'Friday': '金',
        'Saturday': '土',
        'Sunday': '日'
      };
      dayOfWeek = dayOfWeekName;
      dayOfWeekInJapanese = dayOfWeekMap[dayOfWeekName];

      formattedDate = `${year}/${month}/${day}`;
    }

    return {
      uppercasedFirstName,
      uppercasedLastName,
      lowercasedEmail,
      hashedPassword,
      formattedTime,
      formattedDate,
      dayOfWeek,
      dayOfWeekInJapanese
    };
  } catch (error) {
    console.error('Error formatting user data:', error);
    throw new Error('Error formatting user data');
  }
};
