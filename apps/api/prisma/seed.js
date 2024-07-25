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
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'HARPER',
    lastName: 'MAY',
    email: 'harper.may@example.com',
    password: 'harpermay123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
  },
  {
    firstName: 'MILDRED',
    lastName: 'ORTIZ',
    email: 'mildred.ortiz@example.com',
    password: 'mildredortiz123',
    roleId: 1,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'ROBERT',
    lastName: 'MORRISON',
    email: 'robert.morrison@example.com',
    password: 'robertmorrison123',
    roleId: 1,
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
    roleId: 2,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'IAN',
    lastName: 'HART',
    email: 'ian.hart@example.com',
    password: 'ianhart123',
    roleId: 2,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'TERRY',
    lastName: 'PRESCOTT',
    email: 'terry.prescott@example.com',
    password: 'terryprescott123',
    roleId: 2,
    verified: false,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
  },
  {
    firstName: 'ABIGAIL',
    lastName: 'HUGHES',
    email: 'abigail.hughes@example.com',
    password: 'abigailhughes123',
    roleId: 2,
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
    regionId: 4, // KANTO
  },
  {
    city: 'CHIBAKEN',
    venue: 'MAKUHARIMESSE_KOKUSAITENJIJOU',
    address: 'CHIBA',
    regionId: 4, // KANTO
  },
  {
    city: 'OSAKA',
    venue: 'OSAKA_JO_HALL',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'KYOTO',
    venue: 'KYOTO_CONCERT_HALL',
    address: 'KYOTO',
    regionId: 3, // KANSAI
  },
  {
    city: 'SAPPORO',
    venue: 'SAPPORO_DOME',
    address: 'SAPPORO',
    regionId: 1, // HOKKAIDO
  },
  {
    city: 'FUKUOKA',
    venue: 'FUKUOKA_YAHUOKU_DOME',
    address: 'FUKUOKA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'NAGOYA',
    venue: 'NAGOYA_DOME',
    address: 'NAGOYA',
    regionId: 5, // CHUUBU_HOKURIKU
  },
  {
    city: 'HIROSHIMA',
    venue: 'HIROSHIMA_GREEN_ARENA',
    address: 'HIROSHIMA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'SENDAI',
    venue: 'SENDAI_SUNPLAZA_HALL',
    address: 'SENDAI',
    regionId: 2, // TOHOKU
  },
  {
    city: 'OKINAWA',
    venue: 'OKINAWA_ARENA',
    address: 'OKINAWA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'NAGOYA',
    venue: 'Port_Messe_Nagoya_Exhibition_Hall_1',
    address: 'NAGOYA',
    regionId: 5, // CHUUBU_HOKURIKU
  },
  {
    city: 'YOKOHAMA',
    venue: 'Nissan_Stadium',
    address: 'YOKOHAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'FUKUOKA',
    venue: 'Marine_Messe_Fukuoka_Hall_A',
    address: 'FUKUOKA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'KOBE',
    venue: 'World_Memorial_Hall',
    address: 'KOBE',
    regionId: 3, // KANSAI
  },
  {
    city: 'TOKYO',
    venue: 'Yoyogi_National_Gymnasium',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'OSAKA',
    venue: 'Zepp_Osaka_Bayside',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'OSAKA',
    venue: 'Yanmar_Stadium_Nagai',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'SAITAMA',
    venue: 'Saitama_Stadium',
    address: 'SAITAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'YOKOHAMA',
    venue: 'Yokohama_Buntai_Arena',
    address: 'YOKOHAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO',
    venue: 'Kabuki_Za_Theatre',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO',
    venue: 'Toho_Cinemas_Roppongi_Hills',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO',
    venue: 'Tokyo_Opera_City_Concert_Hall',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO',
    venue: 'Ajinomoto_Stadium',
    address: 'TOKYO',
    regionId: 4, // KANTO
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
      {
        userId: userIds[1],
        name: 'MELODIC_MOMENTS',
        email: 'melodicmoments@example.com',
        phoneNumber: '081357394857',
      },
      {
        userId: userIds[0],
        name: 'AMPLIFY_PRODUCTIONS',
        email: 'amplifyproductions@example.com',
        phoneNumber: '081339472945',
      },
      {
        userId: userIds[2],
        name: 'STELLAR_CONCERTS',
        email: 'stellarconcerts@example.com',
        phoneNumber: '081315382948',
      },
      {
        userId: userIds[1],
        name: 'SONIC_SURGE_EVENTS',
        email: 'sonicsurgeevents@example.com',
        phoneNumber: '081337583753',
      },
      {
        userId: userIds[0],
        name: 'GRAND_SLAM_SPORTS',
        email: 'grandslamsports@example.com',
        phoneNumber: '081324859385',
      },
      {
        userId: userIds[1],
        name: 'VICTORY_SPORTS_MANAGEMENT',
        email: 'victorysportsmanagement@example.com',
        phoneNumber: '081338593042',
      },
      {
        userId: userIds[2],
        name: 'STAGE_CRAFT_EVENTS',
        email: 'stagecraftevents@example.com',
        phoneNumber: '081374837465',
      },
      {
        userId: userIds[3],
        name: 'HARMONY_EVENTS',
        email: 'harmonyevents@example.com',
        phoneNumber: '081318475830',
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
        title: 'FUJI_ROCK_FESTIVAL', //1
        details: 'FUJI_ROCK_FESTIVAL',
        genreId: 1,
        locationId: 1,
        organizerId: organizerIds[0],
      },
      {
        title: 'TV_ASAHI_65TH_ANNIVERSARY', //2
        details: 'TV_ASAHI_65TH_ANNIVERSARY',
        genreId: 1,
        locationId: 2,
        organizerId: organizerIds[1],
      },
      {
        title: 'TREASURE_IN_NAGOYA', //3
        details: 'TREASURE will be performing at Port Messe Nagoya Exhibition Hall 1 in Nagoya on Wednesday, July 24, 2024. The show is part of the 2024 TREASURE FAN MEETING Tour.',
        genreId: 7,
        locationId: 11,
        organizerId: organizerIds[2],
      },
      {
        title: 'TWICE_IN_YOKOHAMA', //4
        details: 'TWICE will be performing at Nissan Stadium in Yokohama on Sunday, July 28, 2024. The show is part of the 5TH WORLD TOUR READY TO BE in JAPAN SPECIAL.',
        genreId: 7,
        locationId: 12,
        organizerId: organizerIds[2],
      },
      {
        title: 'LE_SSERAFIM_IN_FUKUOKA', //5
        details: 'Le Sserafim will be performing at Marine Messe Fukuoka Hall A in Fukuoka on Tuesday, July 30, 2024. The show is part of the FAN MEETING FEARNADA 2024 JAPAN Tour.',
        genreId: 7,
        locationId: 13,
        organizerId: organizerIds[3],
      },
      {
        title: 'BABYMONSTER_IN_KOBE', //6
        details: 'BABYMONSTER will be performing at World Memorial Hall in Kobe on Wednesday, July 31, 2024. The show is part of the SEE YOU THERE -FINAL- Tour.',
        genreId: 7,
        locationId: 14,
        organizerId: organizerIds[3],
      },
      {
        title: 'ADO_JAPAN_TOUR_2024_PROFILE_OF_MONA_LISA', //7
        details: 'Ado first nationwide arena tour, Ado JAPAN TOUR 2024 Profile of Mona Lisa has been announced. Ado will be performing at Port Messe Nagoya Exhibition Hall 1 in Nagoya on Saturday, August 3, 2024. The show is part of the JAPAN TOUR 2024 Mona Lisa Profile.',
        genreId: 1,
        locationId: 11,
        organizerId: organizerIds[4],
      },
      {
        title: 'HIKARU_UTADA_SCIENCE_FICTION_TOUR_2024', //8
        details: 'Utada Hikaru will be performing at Yoyogi National Gymnasium in Tokyo on Sunday, August 4, 2024. The show is part of the SCIENCE FICTION TOUR 2024.',
        genreId: 1,
        locationId: 15,
        organizerId: organizerIds[4],
      },
      {
        title: 'HYDE_LIVE_IN_OSAKA_2024', //9
        details: 'HYDE will be performing at Zepp Osaka Bayside in Osaka on Tuesday, August 6, 2024. The show is part of the LIVE 2024 Tour.',
        genreId: 1,
        locationId: 16,
        organizerId: organizerIds[5],
      },
      {
        title: 'Cerezo_Osaka_vs_Borussia_Dortmund', //10
        details: 'European powerhouse Borussia Dortmund to take part! A dream match against Cerezo Osaka with Shinji Kagawa!',
        genreId: 2,
        locationId: 17,
        organizerId: organizerIds[6],
      },
      {
        title: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale', //11
        details: 'A thrilling clash between J-League giants Urawa Red Diamonds and Kawasaki Frontale! Dont miss this exciting match featuring top-tier Japanese football talent!',
        genreId: 2,
        locationId: 18,
        organizerId: organizerIds[7],
      },
      {
        title: 'ASIAN_KUNG-FU_GENERATION_Anniversary_Special_Live', //12
        details: 'ASIAN KUNG-FU GENERATION will be performing at Yokohama Buntai Arena in Yokohama on Sunday, August 25, 2024. The show is part of the Anniversary Special Live Fan Thanksgiving 2024 Tour.',
        genreId: 1,
        locationId: 19,
        organizerId: organizerIds[5],
      },
      {
        title: 'The_Tale_of_Genji_-_A_Theatrical_Experience', //13
        details: 'Experience the timeless classic "The Tale of Genji" brought to life on stage! A mesmerizing performance blending traditional Japanese Noh and modern theatrical elements.',
        genreId: 3,
        locationId: 20,
        organizerId: organizerIds[8],
      },
      {
        title: 'Anime_Premiere_of_"Legend_of_the_Sky_Warriors"', //14
        details: 'Join us for the exclusive premiere of the highly anticipated anime "Legend of the Sky Warriors"! Be among the first to witness the stunning visuals and captivating story of this new series.',
        genreId: 6,
        locationId: 21,
        organizerId: organizerIds[2],
      },
      {
        title: '"Symphony_of_the_Stars"_-_An_Evening_of_Classical_Music', //15
        details: 'Join us for a magical evening with the "Symphony of the Stars" orchestra, performing classical masterpieces under the night sky.',
        genreId: 4,
        locationId: 22,
        organizerId: organizerIds[9],
      },
      {
        title: 'LiSA_LiVE_is_Smile_Always_in_Osaka', //16
        genreId: 1,
        locationId: 3,
        organizerId: organizerIds[5],
      },
      {
        title: 'ONE_OK_ROCK_2024_PREMONITION_WORLD_TOUR_in_Tokyo', //17
        genreId: 1,
        locationId: 23,
        organizerId: organizerIds[5],
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
    eventId: 1, //1
    startDate: new Date('2024-08-24T00:00:00Z'),
    endDate: new Date('2024-08-24T00:00:00Z'),
    startTime: new Date('1970-01-01T14:00:00Z'),
    endTime: new Date('1970-01-01T15:00:00Z'),
  },
  {
    eventId: 1, //2
    startDate: new Date('2024-08-25T00:00:00Z'),
    endDate: new Date('2024-08-25T00:00:00Z'),
    startTime: new Date('1970-01-01T14:00:00Z'),
    endTime: new Date('1970-01-01T15:00:00Z'),
  },
  // one day ticket
  {
    eventId: 2, //3
    startDate: new Date('2024-09-03T00:00:00Z'),
    endDate: new Date('2024-09-03T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
  {
    eventId: 2, //4
    startDate: new Date('2024-09-04T00:00:00Z'),
    endDate: new Date('2024-09-04T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
  // two day ticket
  {
    eventId: 2, //5
    startDate: new Date('2024-09-03T00:00:00Z'),
    endDate: new Date('2024-09-04T00:00:00Z'),
    startTime: new Date('1970-01-01T09:00:00Z'),
    endTime: new Date('1970-01-01T16:00:00Z'),
  },
  {
    eventId: 3, //6
    startDate: new Date('2024-07-24T00:00:00Z'),
    endDate: new Date('2024-07-24T00:00:00Z'),
    startTime: new Date('2024-07-24T14:00:00Z'),
    endTime: new Date('2024-07-24T16:00:00Z'),
  },
  {
    eventId: 4, //7
    startDate: new Date('2024-07-28T00:00:00Z'),
    endDate: new Date('2024-07-28T00:00:00Z'),
    startTime: new Date('2024-07-28T15:00:00Z'),
    endTime: new Date('2024-07-28T17:00:00Z'),
  },
  {
    eventId: 5, //8
    startDate: new Date('2024-07-30T00:00:00Z'),
    endDate: new Date('2024-07-30T00:00:00Z'),
    startTime: new Date('2024-07-30T15:00:00Z'),
    endTime: new Date('2024-07-30T17:00:00Z'),
  },
  {
    eventId: 6, //9
    startDate: new Date('2024-07-31T00:00:00Z'),
    endDate: new Date('2024-07-31T00:00:00Z'),
    startTime: new Date('2024-07-31T17:30:00Z'),
    endTime: new Date('2024-07-31T19:30:00Z'),
  },
  {
    eventId: 7, //10
    startDate: new Date('2024-08-03T00:00:00Z'),
    endDate: new Date('2024-08-03T00:00:00Z'),
    startTime: new Date('2024-08-03T15:30:00Z'),
    endTime: new Date('2024-08-03T17:30:00Z'),
  },
  {
    eventId: 8, //11
    startDate: new Date('2024-08-04T00:00:00Z'),
    endDate: new Date('2024-08-04T00:00:00Z'),
    startTime: new Date('2024-08-04T15:00:00Z'),
    endTime: new Date('2024-08-04T17:00:00Z'),
  },
  {
    eventId: 9, //12
    startDate: new Date('2024-08-06T00:00:00Z'),
    endDate: new Date('2024-08-06T00:00:00Z'),
    startTime: new Date('2024-08-06T18:00:00Z'),
    endTime: new Date('2024-08-06T20:00:00Z'),
  },
  {
    eventId: 10, //13
    startDate: new Date('2024-07-24T00:00:00Z'),
    endDate: new Date('2024-07-24T00:00:00Z'),
    startTime: new Date('2024-07-24T16:15:00Z'),
    endTime: new Date('2024-07-24T18:15:00Z'),
  },
  {
    eventId: 11, //14
    startDate: new Date('2024-08-02T00:00:00Z'),
    endDate: new Date('2024-08-02T00:00:00Z'),
    startTime: new Date('2024-08-02T17:00:00Z'),
    endTime: new Date('2024-08-02T19:00:00Z'),
  },
  {
    eventId: 12, //15
    startDate: new Date('2024-08-25T00:00:00Z'),
    endDate: new Date('2024-08-25T00:00:00Z'),
    startTime: new Date('2024-08-25T15:00:00Z'),
    endTime: new Date('2024-08-25T17:00:00Z'),
  },
  {
    eventId: 13, //16
    startDate: new Date('2024-09-14T00:00:00Z'),
    endDate: new Date('2024-09-14T00:00:00Z'),
    startTime: new Date('2024-09-14T18:00:00Z'),
    endTime: new Date('2024-09-14T20:00:00Z'),
  },
  {
    eventId: 14, //17
    startDate: new Date('2024-10-05T00:00:00Z'),
    endDate: new Date('2024-10-05T00:00:00Z'),
    startTime: new Date('2024-10-05T17:30:00Z'),
    endTime: new Date('2024-10-05T19:30:00Z'),
  },
  {
    eventId: 15, //18
    startDate: new Date('2024-11-23T00:00:00Z'),
    endDate: new Date('2024-11-23T00:00:00Z'),
    startTime: new Date('2024-11-23T18:30:00Z'),
    endTime: new Date('2024-11-23T20:30:00Z'),
  },
  {
    eventId: 16, //19
    startDate: new Date('2024-09-14T00:00:00Z'),
    endDate: new Date('2024-09-14T00:00:00Z'),
    startTime: new Date('2024-09-14T16:30:00Z'),
    endTime: new Date('2024-09-14T18:30:00Z'),
  },
  {
    eventId: 17, //20
    startDate: new Date('2024-09-15T00:00:00Z'),
    endDate: new Date('2024-09-15T00:00:00Z'),
    startTime: new Date('2024-09-15T15:30:00Z'),
    endTime: new Date('2024-09-15T17:30:00Z'),
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
  {
    name: 'TREASURE_GENERAL_PRICE',
    eventId: 3,
    scheduleId: 6,
    className: 'ONE_DAY_REGULAR',
    price: 12000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'TREASURE'
  },
  {
    name: 'TREASURE_SPECIAL_SEAT',
    eventId: 3,
    scheduleId: 6,
    className: 'ONE_DAY_REGULAR',
    price: 25800,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'TREASURE'
  },
  {
    name: 'TREASURE_PREMIUM_SEAT',
    eventId: 3,
    scheduleId: 6,
    className: 'ONE_DAY_REGULAR',
    price: 22000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'TREASURE'
  },
  {
    name: 'TWICE_SEATS_RESERVED',
    eventId: 4,
    scheduleId: 7,
    className: 'ONE_DAY_REGULAR',
    price: 13000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'TWICE'
  },
  {
    name: 'LE_SSERAFIM_PREMIUM_SEATS',
    eventId: 5,
    scheduleId: 8,
    className: 'ONE_DAY_REGULAR',
    price: 22000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'LE_SSERAFIM'
  },
  {
    name: 'LE_SSERAFIM_RESERVED_SEATS',
    eventId: 5,
    scheduleId: 8,
    className: 'ONE_DAY_REGULAR',
    price: 13500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'LE_SSERAFIM'
  },
  {
    name: 'BABYMONSTER_RESERVED_A',
    eventId: 6,
    scheduleId: 9,
    className: 'ONE_DAY_REGULAR',
    price: 9900,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'BABYMONSTER'
  },
  {
    name: 'BABYMONSTER_RESERVED_S',
    eventId: 6,
    scheduleId: 9,
    className: 'ONE_DAY_REGULAR',
    price: 13000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'BABYMONSTER'
  },
  {
    name: 'BABYMONSTER_RESERVED_SS',
    eventId: 6,
    scheduleId: 9,
    className: 'ONE_DAY_REGULAR',
    price: 22000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'BABYMONSTER'
  },
  {
    name: 'ADO_VIP',
    eventId: 7,
    scheduleId: 10,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ADO'
  },
  {
    name: 'ADO_FAMILY',
    eventId: 7,
    scheduleId: 10,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ADO'
  },
  {
    name: 'ADO_S',
    eventId: 7,
    scheduleId: 10,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ADO'
  },
  {
    name: 'ADO_A',
    eventId: 7,
    scheduleId: 10,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ADO'
  },
  {
    name: 'HIKARU_UTADA_REGULAR',
    eventId: 8,
    scheduleId: 11,
    className: 'ONE_DAY_REGULAR',
    price: 18700,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'HIKARU_UTADA'
  },
  {
    name: 'HYDE_1F',
    eventId: 9,
    scheduleId: 12,
    className: 'ONE_DAY_REGULAR',
    price: 6660,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'HYDE'
  },
  {
    name: 'HYDE_2F',
    eventId: 9,
    scheduleId: 12,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'HYDE'
  },
  {
    name: 'Cerezo_Osaka_vs_Borussia_Dortmund_VIP',
    eventId: 10,
    scheduleId: 13,
    className: 'ONE_DAY_REGULAR',
    price: 30000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund'
  },
  {
    name: 'Cerezo_Osaka_vs_Borussia_Dortmund_PREMIUM',
    eventId: 10,
    scheduleId: 13,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund'
  },
  {
    name: 'Cerezo_Osaka_vs_Borussia_Dortmund_CATEGORY_1',
    eventId: 10,
    scheduleId: 13,
    className: 'ONE_DAY_REGULAR',
    price: 12900,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund'
  },
  {
    name: 'Cerezo_Osaka_vs_Borussia_Dortmund_CATEGORY_2',
    eventId: 10,
    scheduleId: 13,
    className: 'ONE_DAY_REGULAR',
    price: 9900,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund'
  },
  {
    name: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale_VIP',
    eventId: 11,
    scheduleId: 14,
    className: 'ONE_DAY_REGULAR',
    price: 35000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale'
  },
  {
    name: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale_PREMIUM',
    eventId: 11,
    scheduleId: 14,
    className: 'ONE_DAY_REGULAR',
    price: 25000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale'
  },
  {
    name: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale_CATEGORY_1',
    eventId: 11,
    scheduleId: 14,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale'
  },
  {
    name: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale_CATEGORY_2',
    eventId: 11,
    scheduleId: 14,
    className: 'ONE_DAY_REGULAR',
    price: 10500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale'
  },
  {
    name: 'ASIAN_KUNGFU_GENERATION_GENERAL',
    eventId: 12,
    scheduleId: 15,
    className: 'ONE_DAY_REGULAR',
    price: 9500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ASIAN_KUNGFU_GENERATION'
  },
  {
    name: 'THE_TALE_OF_GENJI_VIP',
    eventId: 13,
    scheduleId: 16,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'THE_TALE_OF_GENJI'
  },
  {
    name: 'THE_TALE_OF_GENJI_PREMIUM',
    eventId: 13,
    scheduleId: 16,
    className: 'ONE_DAY_REGULAR',
    price: 12000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'THE_TALE_OF_GENJI'
  },
  {
    name: 'LEGEND_OF_THE_SKY_WARRIORS_VIP',
    eventId: 14,
    scheduleId: 17,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'LEGEND_OF_THE_SKY_WARRIORS'
  },
  {
    name: 'LEGEND_OF_THE_SKY_WARRIORS_GENERAL',
    eventId: 14,
    scheduleId: 17,
    className: 'ONE_DAY_REGULAR',
    price: 5000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'LEGEND_OF_THE_SKY_WARRIORS'
  },
  {
    name: 'SYMPHONY_OF_THE_STARS_VIP',
    eventId: 15,
    scheduleId: 18,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'SYMPHONY_OF_THE_STARS'
  },
  {
    name: 'SYMPHONY_OF_THE_STARS_GENERAL',
    eventId: 15,
    scheduleId: 18,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'SYMPHONY_OF_THE_STARS'
  },
  {
    name: 'LISA_RESERVED',
    eventId: 16,
    scheduleId: 19,
    className: 'ONE_DAY_REGULAR',
    price: 11000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'LISA'
  },
  {
    name: 'ONE_OK_ROCK_RESERVED',
    eventId: 17,
    scheduleId: 20,
    className: 'ONE_DAY_REGULAR',
    price: 14000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ONE_OK_ROCK'
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
  {
    eventId: 3,
    link: '/images/treasure small.png',
  },
  {
    eventId: 3,
    link: '/images/treasure_concert_poster_landscape.jpg',
  },
  {
    eventId: 4,
    link: '.images/twice small.jpeg',
  },
  {
    eventId: 4,
    link: '/images/twice landscape.jpeg',
  },
  {
    eventId: 5,
    link: '/images/le sserafim small.jpeg',
  },
  {
    eventId: 5,
    link: '/images/le sserafim landscape .jpeg',
  },
  {
    eventId: 6,
    link: '/images/babymonster landscape.jpg',
  },
  {
    eventId: 6,
    link: '/images/babymonster small.jpg',
  },
  {
    eventId: 7,
    link: '/images/ado small.jpg',
  },
  {
    eventId: 8,
    link: '/images/Hikaru Utada landscape.png',
  },
  {
    eventId: 8,
    link: '/images/Hikaru Utada small.jpg',
  },
  {
    eventId: 9,
    link: '/images/hyde landscape.jpg',
  },
  {
    eventId: 9,
    link: '/images/hyde small.jpg',
  },
  {
    eventId: 10,
    link: '/images/Cerezo Osaka vs Borussia Dortmund landscape_.jpg',
  },
  {
    eventId: 10,
    link: '/images/Cerezo Osaka vs Borussia Dortmund small.jpg',
  },
  {
    eventId: 11,
    link: '/images/Urawa Red Diamonds vs Kawasaki Frontale landscape.jpg',
  },
  {
    eventId: 11,
    link: '/images/Urawa Red Diamonds vs Kawasaki Frontale small.png',
  },
  {
    eventId: 12,
    link: '/images/ASIAN KUNG-FU GENERATION landscape.jpg',
  },
  {
    eventId: 12,
    link: '/images/ASIAN KUNG-FU GENERATION small.jpg',
  },
  {
    eventId: 13,
    link: '/images/tale of genji small.jpg',
  },
  {
    eventId: 14,
    link: '/images/legend of the sky warrior small.jpg',
  },
  {
    eventId: 15,
    link: '/images/symphony small.jpg',
  },
  {
    eventId: 16,
    link: '/images/lisa landscape.jpg',
  },
  {
    eventId: 16,
    link: '/images/lisa small.jpg',
  },
  {
    eventId: 17,
    link: '/images/one ok rock landscape.jpg',
  },
  {
    eventId: 17,
    link: '/images/one ok rock small.png',
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
