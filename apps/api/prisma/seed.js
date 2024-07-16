const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const chalk = require('chalk');

const prisma = new PrismaClient();

// Pasword Hasher
const saltRounds = 10;
const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

// Random Birth Date Generator 
const randomBirthDate = () => {
  const start = new Date(1980, 0, 1);
  const end = new Date(2024, 11, 31);

  const randomTimestamp =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());

  return new Date(randomTimestamp);
};

// Inserting userId (organizerId) to organizer and event for testing purposes
const getOrganizerId = async (index) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        verified: true,
      },
    });

    if (index < 0 || index >= users.length) {
      throw new Error('Index out of bounds');
    }
    return users[index].id;
  } catch (error) {
    console.error('Error fetching organizer ID:', error.message);
    throw error;
  }
};

const users = [
  // EVENT ORGANIZER
  {
    firstName: 'TOM',
    lastName: 'RUIZ',
    email: 'tom.ruiz@example.com',
    password: 'tomruiz123',
    roleId: 2,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'HARPER',
    lastName: 'MAY',
    email: 'harper.may@example.com',
    password: 'harpermay123',
    roleId: 2,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
  },
  {
    firstName: 'MILDRED',
    lastName: 'ORTIZ',
    email: 'mildred.ortiz@example.com',
    password: 'mildredortiz123',
    roleId: 2,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'ROBERT',
    lastName: 'MORRISON',
    email: 'robert.morrison@example.com',
    password: 'robertmorrison123',
    roleId: 2,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },

  // NORMAL USER
  {
    firstName: 'RODNEY',
    lastName: 'ALVAREZ',
    email: 'rodney.alvarez@example.com',
    password: 'rodneyalvarez123',
    roleId: 3,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'IAN',
    lastName: 'HART',
    email: 'ian.hart@example.com',
    password: 'ianhart123',
    roleId: 3,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'TERRY',
    lastName: 'PRESCOTT',
    email: 'terry.prescott@example.com',
    password: 'terryprescott123',
    roleId: 3,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'ABIGAIL',
    lastName: 'HUGHES',
    email: 'abigail.hughes@example.com',
    password: 'abigailhughes123',
    roleId: 3,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
  },
];

const locations = [
  {
    city: 'TOKYOBU',
    venue: 'TOKYO_TAIKUKAN',
    address: 'TOKYO',
    regionId: 4,
  },
  {
    city: 'CHIBAKEN',
    venue: 'MAKUHARIMESSE_KOKUSAITENJIJOU',
    address: 'CHIBA',
    regionId: 4,
  },
  {
    city: 'OSAKA',
    venue: 'OSAKA_JO_HALL',
    address: 'OSAKA',
    regionId: 3,
  },
  {
    city: 'KYOTO',
    venue: 'KYOTO_CONCERT_HALL',
    address: 'KYOTO',
    regionId: 3,
  },
  {
    city: 'SAPPORO',
    venue: 'SAPPORO_DOME',
    address: 'SAPPORO',
    regionId: 1,
  },
  {
    city: 'FUKUOKA',
    venue: 'FUKUOKA_YAHUOKU_DOME',
    address: 'FUKUOKA',
    regionId: 6,
  },
  {
    city: 'NAGOYA',
    venue: 'NAGOYA_DOME',
    address: 'NAGOYA',
    regionId: 5,
  },
  {
    city: 'HIROSHIMA',
    venue: 'HIROSHIMA_GREEN_ARENA',
    address: 'HIROSHIMA',
    regionId: 6,
  },
  {
    city: 'SENDAI',
    venue: 'SENDAI_SUNPLAZA_HALL',
    address: 'SENDAI',
    regionId: 2,
  },
  {
    city: 'OKINAWA',
    venue: 'OKINAWA_ARENA',
    address: 'OKINAWA',
    regionId: 6,
  },
];

const regions = [
  { name: 'HOKKAIDO' },
  { name: 'TOHOKU' },
  { name: 'KANSAI' },
  { name: 'KANTO' },
  { name: 'CHUUBU_HOKURIKU' },
  { name: 'KYUUSHUU_OKINAWA' },
];

const genres = [
  { name: 'MUSIC' },
  { name: 'SPORT' },
  { name: 'THEATER' },
  { name: 'CLASSIC' },
  { name: 'MOVIE' },
  { name: 'ANIME' },
  { name: 'KOREAN' },
  { name: 'LIVE_STREAMING' },
];

const createOrganizersArray = async () => {
  try {
    const userIds = await Promise.all([getOrganizerId(0), getOrganizerId(1)]);

    const organizers = [
      {
        userId: userIds[0],
        name: 'TOKYO_COOL_KIDS_COMITTEE',
        email: 'tokyocoolkids@example.com',
        phoneNumber: '081899215531',
      },
      {
        userId: userIds[1],
        name: 'ASAHI_PRODUCTION',
        email: 'asahiproduction@example.com',
        phoneNumber: '029301283123',
      },
    ];

    return organizers;
  } catch (error) {
    console.error('Error creating organizers array:', error.message);
    throw error;
  }
};

const createEventsArray = async () => {
  try {
    const organizerIds = await Promise.all([
      getOrganizerId(0),
      getOrganizerId(1),
    ]);

    const events = [
      {
        title: 'FUJI_ROCK_FESTIVAL',
        details: 'FUJI_ROCK_FESTIVAL',
        genreId: 1,
        locationId: 1,
        organizerId: organizerIds[0],
      },
      {
        title: 'TV_ASAHI_65TH_ANNIVERSARY',
        details: 'TV_ASAHI_65TH_ANNIVERSARY',
        genreId: 1,
        locationId: 2,
        organizerId: organizerIds[1],
      },
    ];

    return events;
  } catch (error) {
    console.error('Error creating events array:', error.message);
    throw error;
  }
};

const schedules = [
  {
    eventId: 1,
    startDate: new Date('2024-08-24T00:00:00Z'),
    endDate: new Date('2024-08-24T00:00:00Z'),
    startTime: new Date('1970-01-01T14:00:00Z'),
    endTime: new Date('1970-01-01T15:00:00Z'),
  },
  {
    eventId: 1,
    startDate: new Date('2024-08-25T00:00:00Z'),
    endDate: new Date('2024-08-25T00:00:00Z'),
    startTime: new Date('1970-01-01T14:00:00Z'),
    endTime: new Date('1970-01-01T15:00:00Z'),
  },
  // one day ticket
  {
    eventId: 2,
    startDate: new Date('2024-09-03T00:00:00Z'),
    endDate: new Date('2024-09-03T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
  {
    eventId: 2,
    startDate: new Date('2024-09-04T00:00:00Z'),
    endDate: new Date('2024-09-04T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
  // two day ticket
  {
    eventId: 2,
    startDate: new Date('2024-09-03T00:00:00Z'),
    endDate: new Date('2024-09-04T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
];
const eventTickets = [
  {
    name: 'FUJI_ROCK_REGULAR_FIRST_DAY',
    eventId: 1,
    scheduleId: 1,
    className: 'REGULAR',
    price: 3300,
    type: 'DIGITAL',
    totalQty: 400,
    qty: 400,
    details: 'FUJIROCK'
  },
  {
    name: 'FUJI_ROCK_PREMIUM_FIRST_DAY',
    eventId: 1,
    scheduleId: 1,
    className: 'PREMIUM',
    price: 5500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'FUJIROCK'
  },
  {
    name: 'FUJI_ROCK_REGULAR_SECOND_DAY',
    eventId: 1,
    scheduleId: 2,
    className: 'ONE_DAY_REGULAR',
    price: 3300,
    type: 'DIGITAL',
    totalQty: 400,
    qty: 400,
    details: 'FUJIROCK'
  },
  {
    name: 'FUJI_ROCK_PREMIUM_SECOND_DAY',
    eventId: 1,
    scheduleId: 2,
    className: 'ONE_DAY_PREMIUM',
    price: 5500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'FUJIROCK'
  },
  {
    name: 'TV_ASAHI_ONE_DAY_TICKET_SATURDAY',
    eventId: 2,
    scheduleId: 3,
    className: 'ONE_DAY_REGULAR',
    price: 0,
    type: 'DIGITAL',
    totalQty: 400,
    qty: 400,
    details: 'TV_ASAHI'
  },
  {
    name: 'TV_ASAHI_ONE_DAY_TICKET_SUNDAY',
    eventId: 2,
    scheduleId: 4,
    className: 'ONE_DAY_REGULAR',
    price: 0,
    type: 'DIGITAL',
    totalQty: 400,
    qty: 400,
    details: 'TV_ASAHI'
  },
  {
    name: 'TV_ASAHI_TWO_DAY_TICKET_SATURDAY_SUNDAY',
    eventId: 2,
    scheduleId: 5,
    className: 'TWO_DAY_REGULAR',
    price: 0,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'TV_ASAHI'
  },
];

const eventPictures = [
  {
    eventId: 1,
    link: 'AAA1',
  },
  {
    eventId: 1,
    link: 'BBB1',
  },
  {
    eventId: 2,
    link: 'AAA2',
  },
  {
    eventId: 2,
    link: 'BBB2',
  },
];

const transactionStatuses = [
  {
    name: 'WAITING_PAYMENT',
  },
  {
    name: 'CONFIRMING_PAYMENT',
  },
  {
    name: 'CANCELLED',
  },
  {
    name: 'TRANSACTION_SUCCESS',
  },
];

const roles = [
  {
    name: 'SUPER_ADMIN',
  },
  {
    name: 'EVENT_ORGANIZER',
  },
  {
    name: 'CUSTOMER',
  },
];

const coupons = [
  {
    name: 'FIRST_TIME_USER',
    details: '20%_OFF_FIRST_TIME_USER',
    code: 'FIRSTTIME20',
    discountPercentage: 20,
    activeDate: new Date(),
    expirationDate: new Date(new Date().setDate(new Date().getDate() + 5)),
  },
  {
    name: 'FUJI_ROCK_SPECIAL',
    details: '1000_YEN_OFF',
    code: 'FUJIROCK24',
    priceCut: 1000,
    activeDate: new Date('2024-08-24T00:00:00Z'),
    expirationDate: new Date('2024-09-01T00:00:00Z'),
    includedEventId: 1,
  },
  {
    name: 'MUSIC_SPECIALS',
    details: '2000_YEN_OFF_TO_MUSIC_CATEGORY',
    code: 'MUSIC2024',
    priceCut: 2000,
    activeDate: new Date('2024-06-01T00:00:00Z'),
    expirationDate: new Date('2025-01-01T00:00:00Z'),
    includedEventCategoryId: 1,
  },
];
async function main() {
  // Counters to validate if table is created
  let userCount = await prisma.user.count();
  let locationCount = await prisma.location.count();
  let regionCount = await prisma.region.count();
  let genreCount = await prisma.genre.count();
  let eventCount = await prisma.event.count();
  let eventPictureCount = await prisma.eventPicture.count();
  let scheduleCount = await prisma.schedule.count();
  let eventTicketCount = await prisma.eventTicket.count();
  let transactionStatusCount = await prisma.transactionStatus.count();
  let roleCount = await prisma.role.count();
  let couponCount = await prisma.coupon.count();
  let organizerCount = await prisma.organizer.count();

  // Insert Users
  if (userCount === 0 && roleCount > 0) {
    for (const item of users) {
      try {
        await prisma.user.create({
          data: {
            ...item,
            // Hash User Password
            password: await hashPassword(item.password),
          },
        });
      } catch (error) {
        console.log('Error inserting user:', error);
      }
    }
  } else if (userCount === 0) {
    console.log(chalk.yellow('Users have not been inserted'));
  }

  // Insert Locations
  if (locationCount === 0 && regionCount > 0) {
    for (const item of locations) {
      try {
        await prisma.location.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting location:', error);
      }
    }
  } else if (locationCount === 0) {
    console.log(chalk.yellow('Locations have not been inserted'));
  }

  // Insert Organizers
  if (organizerCount === 0 && userCount > 0) {
    try {
      const organizers = createOrganizersArray();
      for (const item of organizers) {
        await prisma.organizer.create({
          data: item,
        });
      }
    } catch (error) {
      console.log('Error inserting event:', error);
    }
  } else if (organizerCount === 0) {
    console.log(chalk.yellow('Organizers have not been inserted'));
  }

  // Insert Regions
  if (regionCount === 0) {
    for (const item of regions) {
      try {
        await prisma.region.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting region:', error);
      }
    }
  } else if (regionCount === 0) {
    console.log(chalk.yellow('Regions have not been inserted'));
  }

  // Insert Genres
  if (genreCount === 0) {
    for (const item of genres) {
      try {
        await prisma.genre.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting genre:', error);
      }
    }
  } else if (genreCount === 0) {
    console.log(chalk.yellow('Genres have not been inserted'));
  }

  // Insert Events
  if (
    eventCount === 0 &&
    genreCount > 0 &&
    locationCount > 0 &&
    organizerCount > 0
  ) {
    const events = await createEventsArray();
    for (const item of events) {
      try {
        await prisma.event.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting event:', error);
      }
    }
  } else if (eventCount === 0) {
    console.log(chalk.yellow('Events have not been inserted'));
  }

  // Insert Schedules
  if (scheduleCount === 0 && eventCount > 0) {
    for (const item of schedules) {
      try {
        await prisma.schedule.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting schedule:', error);
      }
    }
  } else if (scheduleCount === 0) {
    console.log(chalk.yellow('Schedules have not been inserted'));
  }

  // Insert Event Tickets
  if (eventTicketCount === 0 && eventCount > 0 && scheduleCount > 0) {
    for (const item of eventTickets) {
      try {
        await prisma.eventTicket.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting eventTicket:', error);
      }
    }
  } else if (eventTicketCount === 0) {
    console.log(chalk.yellow('Event Tickets have not been inserted'));
  }

  // Insert Event Pictures
  if (eventPictureCount === 0 && eventCount > 0) {
    for (const item of eventPictures) {
      try {
        await prisma.eventPicture.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting eventPicture:', error);
      }
    }
  } else if (eventPictureCount === 0) {
    console.log(chalk.yellow('Event pictures have not been inserted'));
  }

  // Insert Transaction Statuses
  if (transactionStatusCount === 0) {
    for (const item of transactionStatuses) {
      try {
        await prisma.transactionStatus.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting transaction status:', error);
      }
    }
  } else if (transactionStatusCount === 0) {
    console.log(chalk.yellow('Transaction Statuses have not been inserted'));
  }

  // Insert Roles
  if (roleCount === 0) {
    for (const item of roles) {
      try {
        await prisma.role.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting role:', error);
      }
    }
  } else if (roleCount === 0) {
    console.log(chalk.yellow('Roles have not been inserted'));
  }

  // Insert Coupon
  if (couponCount === 0 && eventCount > 0 && genreCount > 0) {
    for (const item of coupons) {
      try {
        await prisma.coupon.create({
          data: item,
        });
      } catch (error) {
        console.log('Error inserting coupon:', error);
      }
    }
  } else if (couponCount === 0) {
    console.log(chalk.yellow('Coupons have not been inserted'));
  }

  if (
    userCount > 0 &&
    locationCount > 0 &&
    regionCount > 0 &&
    genreCount > 0 &&
    eventCount > 0 &&
    scheduleCount > 0 &&
    eventTicketCount > 0 &&
    eventPictureCount > 0 &&
    transactionStatusCount > 0 &&
    roleCount > 0 &&
    couponCount > 0 &&
    organizerCount > 0
  ) {
    console.log(
      chalk.green('\nSeeding succesful, all Models have been properly seeded'),
    );
  } else {
    console.log(
      chalk.yellow(
        '\nPlease execute seeding again until all Models are properly seeded',
      ),
    );
  }
}

// Error handler
main()
  .catch((error) => {
    console.error(chalk.red('Main script error:', error));
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
