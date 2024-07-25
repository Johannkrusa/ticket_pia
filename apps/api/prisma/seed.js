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
      select: {
        uid: true,
      },
    });

    if (index < 0 || index >= users.length) {
      throw new Error('Index out of bounds');
    }

    return users[index].uid;
  } catch (error) {
    console.error('Error fetching organizer ID:', error.message);
    throw error;
  }
};

const users = [
  // Organizer with existing Events
  {
    firstName: 'EMILY',
    lastName: 'JOHNSON',
    email: 'emily.johnson@example.com',
    password: 'emilyjohnson123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
    phoneNumber: '08012345601',
  },
  {
    firstName: 'JAMES',
    lastName: 'WILLIAMS',
    email: 'james.williams@example.com',
    password: 'jameswilliams123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345602',
  },
  {
    firstName: 'OLIVIA',
    lastName: 'BROWN',
    email: 'olivia.brown@example.com',
    password: 'oliviabrown123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
    phoneNumber: '08012345603',
  },
  {
    firstName: 'MICHAEL',
    lastName: 'DAVIS',
    email: 'michael.davis@example.com',
    password: 'michaeldavis123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345604',
  },
  {
    firstName: 'ISABELLA',
    lastName: 'MARTINEZ',
    email: 'isabella.martinez@example.com',
    password: 'isabellamartinez123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
    phoneNumber: '08012345605',
  },
  {
    firstName: 'AVA',
    lastName: 'GARCIA',
    email: 'ava.garcia@example.com',
    password: 'avagarcia123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
    phoneNumber: '08012345606',
  },
  {
    firstName: 'BENJAMIN',
    lastName: 'MILLER',
    email: 'benjamin.miller@example.com',
    password: 'benjaminmiller123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345607',
  },
  {
    firstName: 'SOPHIA',
    lastName: 'MOORE',
    email: 'sophia.moore@example.com',
    password: 'sophiamoore123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'FEMALE',
    phoneNumber: '08012345608',
  },
  {
    firstName: 'LUCAS',
    lastName: 'TAYLOR',
    email: 'lucas.taylor@example.com',
    password: 'lucastaylor123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345609',
  },
  {
    firstName: 'LUCAS',
    lastName: 'TAYLOR',
    email: 'lucas.taylor@example.com',
    password: 'lucastaylor123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345610',
  },

  // Organizer
  {
    firstName: 'TOM',
    lastName: 'RUIZ',
    email: 'tom.ruiz@example.com',
    password: 'tomruiz123',
    roleId: 1,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345611',
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
    phoneNumber: '08012345612',
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
    phoneNumber: '08012345613',
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
    phoneNumber: '08012345614',
  },

  // User
  {
    firstName: 'RODNEY',
    lastName: 'ALVAREZ',
    email: 'rodney.alvarez@example.com',
    password: 'rodneyalvarez123',
    roleId: 2,
    verified: true,
    birthDate: new Date(randomBirthDate()),
    gender: 'MALE',
    phoneNumber: '08012345615',
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
    phoneNumber: '08012345616',
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
    phoneNumber: '08012345617',
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
    phoneNumber: '08012345618',
  },
];

const locations = [
  {
    city: 'TOKYOBU', //1
    venue: 'TOKYO_TAIKUKAN',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'CHIBAKEN', //2
    venue: 'MAKUHARIMESSE_KOKUSAITENJIJOU',
    address: 'CHIBA',
    regionId: 4, // KANTO
  },
  {
    city: 'OSAKA', //3
    venue: 'OSAKA_JO_HALL',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'KYOTO', //4
    venue: 'KYOTO_CONCERT_HALL',
    address: 'KYOTO',
    regionId: 3, // KANSAI
  },
  {
    city: 'SAPPORO', //5
    venue: 'SAPPORO_DOME',
    address: 'SAPPORO',
    regionId: 1, // HOKKAIDO
  },
  {
    city: 'FUKUOKA', //6
    venue: 'FUKUOKA_YAHUOKU_DOME',
    address: 'FUKUOKA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'NAGOYA', //7
    venue: 'NAGOYA_DOME',
    address: 'NAGOYA',
    regionId: 5, // CHUUBU_HOKURIKU
  },
  {
    city: 'HIROSHIMA', //8
    venue: 'HIROSHIMA_GREEN_ARENA',
    address: 'HIROSHIMA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'SENDAI', //9
    venue: 'SENDAI_SUNPLAZA_HALL',
    address: 'SENDAI',
    regionId: 2, // TOHOKU
  },
  {
    city: 'OKINAWA', //10
    venue: 'OKINAWA_ARENA',
    address: 'OKINAWA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'NAGOYA', //11
    venue: 'Port_Messe_Nagoya_Exhibition_Hall_1',
    address: 'NAGOYA',
    regionId: 5, // CHUUBU_HOKURIKU
  },
  {
    city: 'YOKOHAMA', //12
    venue: 'Nissan_Stadium',
    address: 'YOKOHAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'FUKUOKA', //13
    venue: 'Marine_Messe_Fukuoka_Hall_A',
    address: 'FUKUOKA',
    regionId: 6, // KYUUSHUU_OKINAWA
  },
  {
    city: 'KOBE', //14
    venue: 'World_Memorial_Hall',
    address: 'KOBE',
    regionId: 3, // KANSAI
  },
  {
    city: 'TOKYO', //15
    venue: 'Yoyogi_National_Gymnasium',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'OSAKA', //16
    venue: 'Zepp_Osaka_Bayside',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'OSAKA', //17
    venue: 'Yanmar_Stadium_Nagai',
    address: 'OSAKA',
    regionId: 3, // KANSAI
  },
  {
    city: 'SAITAMA', //18
    venue: 'Saitama_Stadium',
    address: 'SAITAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'YOKOHAMA', //19
    venue: 'Yokohama_Buntai_Arena',
    address: 'YOKOHAMA',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO', //20
    venue: 'Kabuki_Za_Theatre',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO', //21
    venue: 'Toho_Cinemas_Roppongi_Hills',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO', //22
    venue: 'Tokyo_Opera_City_Concert_Hall',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO', //23
    venue: 'Ajinomoto_Stadium',
    address: 'TOKYO',
    regionId: 4, // KANTO
  },
  {
    city: 'TOKYO', //24
    venue: 'Toyosu_PIT',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'KANAGAWA', //25
    venue: 'Shonan_BMW_Stadium_Hiratsuka',
    address: 'KANAGAWA',
    regionId: 4, //
  },
  {
    city: 'HYOGO', //26
    venue: 'Noevir_Stadium_Kobe',
    address: 'HYOGO',
    regionId: 3, //
  },
  {
    city: 'KANAGAWA', //27
    venue: 'Kawasaki_Todoroki_Stadium',
    address: 'KANAGAWA',
    regionId: 4, //
  },
  {
    city: 'TOKYO', //28
    venue: 'Shinjuku_Wald_9_Cinema',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'TOKYO', //29
    venue: 'Akihabara_UDX_Theater',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'TOKYO', //30
    venue: 'National_Theatre_of_Japan',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'KYOTO', //31
    venue: 'Minami_za_Theatre',
    address: 'KYOTO',
    regionId: 3, //
  },
  {
    city: 'TOKYO', //32
    venue: 'Sumida_Triphony_Hall',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'OSAKA', //33
    venue: 'Osaka_Symphony_Hall',
    address: 'OSAKA',
    regionId: 3, //
  },
  {
    city: 'AICHI', //34
    venue: 'Toyota Stadium',
    address: 'AICHI',
    regionId: 5, //
  },
  {
    city: 'SAGA', //35
    venue: 'Ekimae_Real_Estate_Stadium',
    address: 'SAGA',
    regionId: 6, //
  },
  {
    city: 'TOKYO', //36
    venue: 'Shibuya_Hikarie_Hall',
    address: 'TOKYO',
    regionId: 4, //
  },
  {
    city: 'KYOTO', //37
    venue: 'Kyoto_Minami_za_Theatre',
    address: 'KYOTO',
    regionId: 3, //
  },
  {
    city: 'TOKYO', //38
    venue: 'Tokyo_National_Noh_Theatre',
    address: 'TOKYO',
    regionId: 4, //
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

const fetchAllOrganizerIds = async () => {
  try {
    const userIds = [];
    for (let i = 0; i < 10; i++) {
      const id = await getOrganizerId(i);
      userIds.push(id);
    }
    return userIds;
  } catch (error) {
    console.error('Error creating organizers array:', error.message);
    throw error;
  }
};

const createOrganizersArray = async () => {
  try {
    const userIds = await fetchAllOrganizerIds();
    const organizers = [
      {
        userId: userIds[0], //0
        name: 'TOKYO_COOL_KIDS_COMITTEE',
        email: 'tokyocoolkids@example.com',
        phoneNumber: '081899215531',
      },
      {
        userId: userIds[1], //1
        name: 'ASAHI_PRODUCTION',
        email: 'asahiproduction@example.com',
        phoneNumber: '029301283123',
      },
      {
        userId: userIds[2], //2
        name: 'MELODIC_MOMENTS',
        email: 'melodicmoments@example.com',
        phoneNumber: '081357394857',
      },
      {
        userId: userIds[3], //3
        name: 'AMPLIFY_PRODUCTIONS',
        email: 'amplifyproductions@example.com',
        phoneNumber: '081339472945',
      },
      {
        userId: userIds[4], //4
        name: 'STELLAR_CONCERTS',
        email: 'stellarconcerts@example.com',
        phoneNumber: '081315382948',
      },
      {
        userId: userIds[5], //5
        name: 'SONIC_SURGE_EVENTS',
        email: 'sonicsurgeevents@example.com',
        phoneNumber: '081337583753',
      },
      {
        userId: userIds[6], //6
        name: 'GRAND_SLAM_SPORTS',
        email: 'grandslamsports@example.com',
        phoneNumber: '081324859385',
      },
      {
        userId: userIds[7], //7
        name: 'VICTORY_SPORTS_MANAGEMENT',
        email: 'victorysportsmanagement@example.com',
        phoneNumber: '081338593042',
      },
      {
        userId: userIds[8], //8
        name: 'STAGE_CRAFT_EVENTS',
        email: 'stagecraftevents@example.com',
        phoneNumber: '081374837465',
      },
      {
        userId: userIds[9], //9
        name: 'HARMONY_EVENTS',
        email: 'harmonyevents@example.com',
        phoneNumber: '081318475830',
      },
    ];

    console.log(organizers);

    return organizers;
  } catch (error) {
    console.error('Error creating organizers array:', error.message);
    throw error;
  }
};

const createEventsArray = async () => {
  try {
    const organizerIds = await fetchAllOrganizerIds();

    const getRandomOrganizerId = () => {
      return organizerIds[Math.floor(Math.random() * organizerIds.length)];
    };

    const events = [
      {
        title: 'FUJI_ROCK_FESTIVAL',
        details:
          'Experience the electrifying energy of Fuji Rock Festival, featuring an incredible lineup of artists from around the world.',
        genreId: 1,
        locationId: 1,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'TV_ASAHI_65TH_ANNIVERSARY',
        details:
          "Celebrate TV Asahi's 65th Anniversary with spectacular performances and special guests.",
        genreId: 1,
        locationId: 2,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'TREASURE_IN_NAGOYA',
        details:
          'TREASURE will be performing at Port Messe Nagoya Exhibition Hall 1 in Nagoya on Wednesday, July 24, 2024. The show is part of the 2024 TREASURE FAN MEETING Tour.',
        genreId: 7,
        locationId: 11,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'TWICE_IN_YOKOHAMA',
        details:
          'TWICE will be performing at Nissan Stadium in Yokohama on Sunday, July 28, 2024. The show is part of the 5TH WORLD TOUR READY TO BE in JAPAN SPECIAL.',
        genreId: 7,
        locationId: 12,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'LE_SSERAFIM_IN_FUKUOKA',
        details:
          'Le Sserafim will be performing at Marine Messe Fukuoka Hall A in Fukuoka on Tuesday, July 30, 2024. The show is part of the FAN MEETING FEARNADA 2024 JAPAN Tour.',
        genreId: 7,
        locationId: 13,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'BABYMONSTER_IN_KOBE',
        details:
          'BABYMONSTER will be performing at World Memorial Hall in Kobe on Wednesday, July 31, 2024. The show is part of the SEE YOU THERE -FINAL- Tour.',
        genreId: 7,
        locationId: 14,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'ADO_JAPAN_TOUR_2024_PROFILE_OF_MONA_LISA',
        details:
          "Ado's first nationwide arena tour, Ado JAPAN TOUR 2024 Profile of Mona Lisa has been announced. Ado will be performing at Port Messe Nagoya Exhibition Hall 1 in Nagoya on Saturday, August 3, 2024. The show is part of the JAPAN TOUR 2024 Mona Lisa Profile.",
        genreId: 1,
        locationId: 11,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'HIKARU_UTADA_SCIENCE_FICTION_TOUR_2024',
        details:
          'Utada Hikaru will be performing at Yoyogi National Gymnasium in Tokyo on Sunday, August 4, 2024. The show is part of the SCIENCE FICTION TOUR 2024.',
        genreId: 1,
        locationId: 15,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'HYDE_LIVE_IN_OSAKA_2024',
        details:
          'HYDE will be performing at Zepp Osaka Bayside in Osaka on Tuesday, August 6, 2024. The show is part of the LIVE 2024 Tour.',
        genreId: 1,
        locationId: 16,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Cerezo_Osaka_vs_Borussia_Dortmund',
        details:
          'European powerhouse Borussia Dortmund to take part! A dream match against Cerezo Osaka with Shinji Kagawa!',
        genreId: 2,
        locationId: 17,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale',
        details:
          "A thrilling clash between J-League giants Urawa Red Diamonds and Kawasaki Frontale! Don't miss this exciting match featuring top-tier Japanese football talent!",
        genreId: 2,
        locationId: 18,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'ASIAN_KUNG-FU_GENERATION_Anniversary_Special_Live',
        details:
          'ASIAN KUNG-FU GENERATION will be performing at Yokohama Buntai Arena in Yokohama on Sunday, August 25, 2024. The show is part of the Anniversary Special Live Fan Thanksgiving 2024 Tour.',
        genreId: 1,
        locationId: 19,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'The_Tale_of_Genji_-_A_Theatrical_Experience',
        details:
          'Experience the timeless classic "The Tale of Genji" brought to life on stage! A mesmerizing performance blending traditional Japanese Noh and modern theatrical elements.',
        genreId: 3,
        locationId: 20,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Anime_Premiere_of_"Legend_of_the_Sky_Warriors"',
        details:
          'Join us for the exclusive premiere of the highly anticipated anime "Legend of the Sky Warriors"! Be among the first to witness the stunning visuals and captivating story of this new series.',
        genreId: 6,
        locationId: 21,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: '"Symphony_of_the_Stars"_-_An_Evening_of_Classical_Music',
        details:
          'Join us for a magical evening with the "Symphony of the Stars" orchestra, performing classical masterpieces under the night sky.',
        genreId: 4,
        locationId: 22,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'LiSA_LiVE_is_Smile_Always_in_Osaka',
        details:
          'LiSA will be performing live in Osaka. Don\'t miss her electrifying performance as part of her "LiVE is Smile Always" tour.',
        genreId: 1,
        locationId: 3,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'ONE_OK_ROCK_2024_PREMONITION_WORLD_TOUR_in_Tokyo',
        details:
          'ONE OK ROCK is coming to Tokyo as part of their 2024 PREMONITION WORLD TOUR. Get ready for an unforgettable night of rock music!',
        genreId: 1,
        locationId: 23,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'OneRepublic_Japan_Tour',
        details:
          'OneRepublic is coming to Japan! Join them for an amazing live performance featuring their biggest hits.',
        genreId: 1,
        locationId: 24,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Shonan_Bellmare_vs_Yokohama_FC',
        details:
          'Watch the exciting match between Shonan Bellmare and Yokohama FC, featuring top football talent.',
        genreId: 2,
        locationId: 25,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Vissel_Kobe_vs_Urawa_Red_Diamonds',
        details:
          "Don't miss the thrilling match between Vissel Kobe and Urawa Red Diamonds. It's going to be an epic showdown!",
        genreId: 2,
        locationId: 26,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Kawasaki_Frontale_vs_FC_Tokyo',
        details:
          'A fierce battle between Kawasaki Frontale and FC Tokyo. Who will come out on top? Be there to find out!',
        genreId: 2,
        locationId: 27,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Anime_Premiere_of_Mystic_Warriors_of_the_Dawn',
        details:
          'Be among the first to witness the premiere of "Mystic Warriors of the Dawn". An anime experience you don\'t want to miss!',
        genreId: 6,
        locationId: 28,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Anime_Premiere_of_Guardians_of_the_Infinite_Realm',
        details:
          'Join us for the premiere of "Guardians of the Infinite Realm". An epic anime journey awaits!',
        genreId: 6,
        locationId: 29,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Journey_Through_Time_-_A_Historical_Play',
        details:
          'Take a journey through time with this captivating historical play. Experience the past like never before.',
        genreId: 3,
        locationId: 30,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Samurai_Saga_-_A_Theatrical_Adventure',
        details:
          'Step into the world of the samurai with this thrilling theatrical adventure. A must-see performance!',
        genreId: 3,
        locationId: 31,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Echoes_of_Eternity_-_An_Evening_of_Classical_Music',
        details:
          'Enjoy an evening of classical music with "Echoes of Eternity". A sublime experience under the stars.',
        genreId: 4,
        locationId: 32,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Harmony_of_the_Spheres_-_An_Orchestral_Night',
        details:
          'Join us for "Harmony of the Spheres", an orchestral night of beautiful music and enchanting melodies.',
        genreId: 4,
        locationId: 33,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima',
        details:
          'A high-stakes match between Nagoya Grampus and Sanfrecce Hiroshima. Get ready for intense football action!',
        genreId: 2,
        locationId: 34,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Sagan_Tosu_vs_Vegalta_Sendai',
        details:
          "Catch the exciting game between Sagan Tosu and Vegalta Sendai. Football fans, don't miss out!",
        genreId: 2,
        locationId: 35,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Anime_Premiere_of_Celestial_Guardians',
        details:
          'Witness the premiere of "Celestial Guardians". A captivating new anime series that promises to impress.',
        genreId: 6,
        locationId: 36,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'Mysteries_of_the_Samurai_-_A_Theatrical_Experience',
        details:
          'Delve into the mysteries of the samurai with this immersive theatrical experience. A blend of history and drama.',
        genreId: 3,
        locationId: 37,
        organizerId: getRandomOrganizerId(),
      },
      {
        title: 'The_Enchanted_Forest_-_A_Fantasy_Play',
        details:
          'Enter "The Enchanted Forest" and experience a fantasy play like no other. Magic and adventure await!',
        genreId: 3,
        locationId: 38,
        organizerId: getRandomOrganizerId(),
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
  {
    eventId: 18, //21
    startDate: new Date('2024-08-15T00:00:00Z'),
    endDate: new Date('2024-08-15T00:00:00Z'),
    startTime: new Date('2024-08-15T18:00:00Z'),
    endTime: new Date('2024-08-15T20:00:00Z'),
  },
  {
    eventId: 19, //22
    startDate: new Date('2024-08-18T00:00:00Z'),
    endDate: new Date('2024-08-18T00:00:00Z'),
    startTime: new Date('2024-08-18T15:30:00Z'),
    endTime: new Date('2024-08-18T17:30:00Z'),
  },
  {
    eventId: 20, //23
    startDate: new Date('2024-09-07T00:00:00Z'),
    endDate: new Date('2024-09-07T00:00:00Z'),
    startTime: new Date('2024-09-07T17:00:00Z'),
    endTime: new Date('2024-09-07T19:00:00Z'),
  },
  {
    eventId: 21, //24
    startDate: new Date('2024-10-20T00:00:00Z'),
    endDate: new Date('2024-10-20T00:00:00Z'),
    startTime: new Date('2024-10-20T14:00:00Z'),
    endTime: new Date('2024-10-20T16:00:00Z'),
  },
  {
    eventId: 22, //25
    startDate: new Date('2024-11-02T00:00:00Z'),
    endDate: new Date('2024-11-02T00:00:00Z'),
    startTime: new Date('2024-11-02T17:00:00Z'),
    endTime: new Date('2024-11-02T19:00:00Z'),
  },
  {
    eventId: 23, //26
    startDate: new Date('2024-12-06T00:00:00Z'),
    endDate: new Date('2024-12-06T00:00:00Z'),
    startTime: new Date('2024-12-06T18:00:00Z'),
    endTime: new Date('2024-12-06T20:00:00Z'),
  },
  {
    eventId: 24, //27
    startDate: new Date('2024-10-11T00:00:00Z'),
    endDate: new Date('2024-10-11T00:00:00Z'),
    startTime: new Date('2024-10-11T19:00:00Z'),
    endTime: new Date('2024-10-11T21:00:00Z'),
  },
  {
    eventId: 25, //28
    startDate: new Date('2024-12-14T00:00:00Z'),
    endDate: new Date('2024-12-14T00:00:00Z'),
    startTime: new Date('2024-12-14T18:00:00Z'),
    endTime: new Date('2024-12-14T20:00:00Z'),
  },
  {
    eventId: 26, //29
    startDate: new Date('2024-11-15T00:00:00Z'),
    endDate: new Date('2024-11-15T00:00:00Z'),
    startTime: new Date('2024-11-15T19:00:00Z'),
    endTime: new Date('2024-11-15T21:00:00Z'),
  },
  {
    eventId: 27, //30
    startDate: new Date('2024-01-20T00:00:00Z'),
    endDate: new Date('2024-01-20T00:00:00Z'),
    startTime: new Date('2024-01-20T18:30:00Z'),
    endTime: new Date('2024-01-20T20:30:00Z'),
  },
  {
    eventId: 28, //31
    startDate: new Date('2024-10-27T00:00:00Z'),
    endDate: new Date('2024-10-27T00:00:00Z'),
    startTime: new Date('2024-10-27T16:00:00Z'),
    endTime: new Date('2024-10-27T18:00:00Z'),
  },
  {
    eventId: 29, //32
    startDate: new Date('2024-11-09T00:00:00Z'),
    endDate: new Date('2024-11-09T00:00:00Z'),
    startTime: new Date('2024-11-09T15:00:00Z'),
    endTime: new Date('2024-11-09T17:00:00Z'),
  },
  {
    eventId: 30, //33
    startDate: new Date('2024-12-21T00:00:00Z'),
    endDate: new Date('2024-12-21T00:00:00Z'),
    startTime: new Date('2024-12-21T17:00:00Z'),
    endTime: new Date('2024-12-21T19:00:00Z'),
  },
  {
    eventId: 31, //34
    startDate: new Date('2024-02-10T00:00:00Z'),
    endDate: new Date('2024-02-10T00:00:00Z'),
    startTime: new Date('2024-02-10T18:00:00Z'),
    endTime: new Date('2024-02-10T20:00:00Z'),
  },
  {
    eventId: 32, //35
    startDate: new Date('2024-03-24T00:00:00Z'),
    endDate: new Date('2024-03-24T00:00:00Z'),
    startTime: new Date('2024-03-24T17:30:00Z'),
    endTime: new Date('2024-03-24T19:30:00Z'),
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
    details: 'FUJIROCK',
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
    details: 'FUJIROCK',
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
    details: 'FUJIROCK',
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
    details: 'FUJIROCK',
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
    details: 'TV_ASAHI',
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
    details: 'TV_ASAHI',
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
    details: 'TV_ASAHI',
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
    details: 'TREASURE',
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
    details: 'TREASURE',
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
    details: 'TREASURE',
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
    details: 'TWICE',
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
    details: 'LE_SSERAFIM',
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
    details: 'LE_SSERAFIM',
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
    details: 'BABYMONSTER',
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
    details: 'BABYMONSTER',
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
    details: 'BABYMONSTER',
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
    details: 'ADO',
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
    details: 'ADO',
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
    details: 'ADO',
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
    details: 'ADO',
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
    details: 'HIKARU_UTADA',
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
    details: 'HYDE',
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
    details: 'HYDE',
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
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund',
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
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund',
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
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund',
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
    details: 'Cerezo_Osaka_vs_Borussia_Dortmund',
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
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale',
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
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale',
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
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale',
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
    details: 'Urawa_Red_Diamonds_vs_Kawasaki_Frontale',
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
    details: 'ASIAN_KUNGFU_GENERATION',
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
    details: 'THE_TALE_OF_GENJI',
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
    details: 'THE_TALE_OF_GENJI',
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
    details: 'LEGEND_OF_THE_SKY_WARRIORS',
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
    details: 'LEGEND_OF_THE_SKY_WARRIORS',
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
    details: 'SYMPHONY_OF_THE_STARS',
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
    details: 'SYMPHONY_OF_THE_STARS',
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
    details: 'LISA',
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
    details: 'ONE_OK_ROCK',
  },
  {
    name: 'ONE_REPUBLIC_REGULAR',
    eventId: 18,
    scheduleId: 21,
    className: 'ONE_DAY_REGULAR',
    price: 12500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'ONE_REPUBLIC',
  },
  {
    name: 'Shonan_Bellmare_vs_Yokohama_FC_VIP',
    eventId: 19,
    scheduleId: 22,
    className: 'ONE_DAY_REGULAR',
    price: 25000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Shonan_Bellmare_vs_Yokohama_FC',
  },
  {
    name: 'Shonan_Bellmare_vs_Yokohama_FC_PREMIUM',
    eventId: 19,
    scheduleId: 22,
    className: 'ONE_DAY_REGULAR',
    price: 18000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Shonan_Bellmare_vs_Yokohama_FC',
  },
  {
    name: 'Shonan_Bellmare_vs_Yokohama_FC_CATEGORY_1',
    eventId: 19,
    scheduleId: 22,
    className: 'ONE_DAY_REGULAR',
    price: 10500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Shonan_Bellmare_vs_Yokohama_FC',
  },
  {
    name: 'Vissel_Kobe_vs_Urawa_Red_Diamonds_VIP',
    eventId: 20,
    scheduleId: 23,
    className: 'ONE_DAY_REGULAR',
    price: 28000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Vissel_Kobe_vs_Urawa_Red_Diamonds',
  },
  {
    name: 'Vissel_Kobe_vs_Urawa_Red_Diamonds_PREMIUM',
    eventId: 20,
    scheduleId: 23,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Vissel_Kobe_vs_Urawa_Red_Diamonds',
  },
  {
    name: 'Vissel_Kobe_vs_Urawa_Red_Diamonds_CATEGORY_1',
    eventId: 20,
    scheduleId: 23,
    className: 'ONE_DAY_REGULAR',
    price: 12000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Vissel_Kobe_vs_Urawa_Red_Diamonds',
  },
  {
    name: 'Kawasaki_Frontale_vs_FC_Tokyo_VIP',
    eventId: 21,
    scheduleId: 24,
    className: 'ONE_DAY_REGULAR',
    price: 30000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Kawasaki_Frontale_vs_FC_Tokyo',
  },
  {
    name: 'Kawasaki_Frontale_vs_FC_Tokyo_PREMIUM',
    eventId: 21,
    scheduleId: 24,
    className: 'ONE_DAY_REGULAR',
    price: 22000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Kawasaki_Frontale_vs_FC_Tokyo',
  },
  {
    name: 'Kawasaki_Frontale_vs_FC_Tokyo_CATEGORY_1',
    eventId: 21,
    scheduleId: 24,
    className: 'ONE_DAY_REGULAR',
    price: 14000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Kawasaki_Frontale_vs_FC_Tokyo',
  },
  {
    name: 'Mystic_Warriors_of_the_Dawn_VIP',
    eventId: 22,
    scheduleId: 25,
    className: 'ONE_DAY_REGULAR',
    price: 12000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Mystic_Warriors_of_the_Dawn',
  },
  {
    name: 'Mystic_Warriors_of_the_Dawn_GENERAL',
    eventId: 22,
    scheduleId: 25,
    className: 'ONE_DAY_REGULAR',
    price: 6000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Mystic_Warriors_of_the_Dawn',
  },
  {
    name: 'Guardians_of_the_Infinite_Realm_VIP',
    eventId: 23,
    scheduleId: 26,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Guardians_of_the_Infinite_Realm',
  },
  {
    name: 'Guardians_of_the_Infinite_Realm_GENERAL',
    eventId: 23,
    scheduleId: 26,
    className: 'ONE_DAY_REGULAR',
    price: 5000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Guardians_of_the_Infinite_Realm',
  },
  {
    name: 'Journey_Through_Time_VIP',
    eventId: 24,
    scheduleId: 27,
    className: 'ONE_DAY_REGULAR',
    price: 18000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Journey_Through_Time',
  },
  {
    name: 'Journey_Through_Time_PREMIUM',
    eventId: 24,
    scheduleId: 27,
    className: 'ONE_DAY_REGULAR',
    price: 14000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Journey_Through_Time',
  },
  {
    name: 'Journey_Through_Time_CATEGORY_1',
    eventId: 24,
    scheduleId: 27,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Journey_Through_Time',
  },
  {
    name: 'Samurai_Saga_VIP',
    eventId: 25,
    scheduleId: 28,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Samurai_Saga',
  },
  {
    name: 'Samurai_Saga_PREMIUM',
    eventId: 25,
    scheduleId: 28,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Samurai_Saga',
  },
  {
    name: 'Samurai_Saga_CATEGORY_1',
    eventId: 25,
    scheduleId: 28,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Samurai_Saga',
  },
  {
    name: 'Echoes_of_Eternity_VIP',
    eventId: 26,
    scheduleId: 29,
    className: 'ONE_DAY_REGULAR',
    price: 18000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Echoes_of_Eternity',
  },
  {
    name: 'Echoes_of_Eternity_PREMIUM',
    eventId: 26,
    scheduleId: 29,
    className: 'ONE_DAY_REGULAR',
    price: 13000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Echoes_of_Eternity',
  },
  {
    name: 'Echoes_of_Eternity_CATEGORY_1',
    eventId: 26,
    scheduleId: 29,
    className: 'ONE_DAY_REGULAR',
    price: 9000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Echoes_of_Eternity',
  },
  {
    name: 'Harmony_of_the_Spheres_VIP',
    eventId: 27,
    scheduleId: 30,
    className: 'ONE_DAY_REGULAR',
    price: 22000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Harmony_of_the_Spheres',
  },
  {
    name: 'Harmony_of_the_Spheres_PREMIUM',
    eventId: 27,
    scheduleId: 30,
    className: 'ONE_DAY_REGULAR',
    price: 17000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Harmony_of_the_Spheres',
  },
  {
    name: 'Harmony_of_the_Spheres_CATEGORY_1',
    eventId: 27,
    scheduleId: 30,
    className: 'ONE_DAY_REGULAR',
    price: 12000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Harmony_of_the_Spheres',
  },
  {
    name: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima_VIP',
    eventId: 28,
    scheduleId: 31,
    className: 'ONE_DAY_REGULAR',
    price: 27000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima',
  },
  {
    name: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima_PREMIUM',
    eventId: 28,
    scheduleId: 31,
    className: 'ONE_DAY_REGULAR',
    price: 19000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima',
  },
  {
    name: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima_CATEGORY_1',
    eventId: 28,
    scheduleId: 31,
    className: 'ONE_DAY_REGULAR',
    price: 11000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Nagoya_Grampus_vs_Sanfrecce_Hiroshima',
  },
  {
    name: 'Sagan_Tosu_vs_Vegalta_Sendai_VIP',
    eventId: 29,
    scheduleId: 32,
    className: 'ONE_DAY_REGULAR',
    price: 25000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Sagan_Tosu_vs_Vegalta_Sendai',
  },
  {
    name: 'Sagan_Tosu_vs_Vegalta_Sendai_PREMIUM',
    eventId: 29,
    scheduleId: 32,
    className: 'ONE_DAY_REGULAR',
    price: 18000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Sagan_Tosu_vs_Vegalta_Sendai',
  },
  {
    name: 'Sagan_Tosu_vs_Vegalta_Sendai_CATEGORY_1',
    eventId: 29,
    scheduleId: 32,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Sagan_Tosu_vs_Vegalta_Sendai',
  },
  {
    name: 'Celestial_Guardians_VIP',
    eventId: 30,
    scheduleId: 33,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Celestial_Guardians',
  },
  {
    name: 'Celestial_Guardians_GENERAL',
    eventId: 30,
    scheduleId: 33,
    className: 'ONE_DAY_REGULAR',
    price: 7500,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Celestial_Guardians',
  },
  {
    name: 'Mysteries_of_the_Samurai_VIP',
    eventId: 31,
    scheduleId: 34,
    className: 'ONE_DAY_REGULAR',
    price: 20000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Mysteries_of_the_Samurai',
  },
  {
    name: 'Mysteries_of_the_Samurai_PREMIUM',
    eventId: 31,
    scheduleId: 34,
    className: 'ONE_DAY_REGULAR',
    price: 15000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Mysteries_of_the_Samurai',
  },
  {
    name: 'Mysteries_of_the_Samurai_CATEGORY_1',
    eventId: 31,
    scheduleId: 34,
    className: 'ONE_DAY_REGULAR',
    price: 10000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'Mysteries_of_the_Samurai',
  },
  {
    name: 'The_Enchanted_Forest_VIP',
    eventId: 32,
    scheduleId: 35,
    className: 'ONE_DAY_REGULAR',
    price: 18000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'The_Enchanted_Forest',
  },
  {
    name: 'The_Enchanted_Forest_PREMIUM',
    eventId: 32,
    scheduleId: 35,
    className: 'ONE_DAY_REGULAR',
    price: 13000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'The_Enchanted_Forest',
  },
  {
    name: 'The_Enchanted_Forest_CATEGORY_1',
    eventId: 32,
    scheduleId: 35,
    className: 'ONE_DAY_REGULAR',
    price: 9000,
    type: 'DIGITAL',
    totalQty: 200,
    qty: 200,
    details: 'The_Enchanted_Forest',
  },
];

const eventPictures = [
  {
    eventId: 1,
    link: 'src/public/event-images/IMG_FUJI_1.jpeg'
  },
  {
    eventId: 2,
    link: 'src/public/event-images/IMG_TV_ASAHI_1.jpeg'
  },
  {
    eventId: 3,
    link: 'src/public/event-images/treasure small.png',
  },
  {
    eventId: 3,
    link: 'src/public/event-images/treasure_concert_poster_landscape.jpg',
  },
  {
    eventId: 4,
    link: 'src/public/event-images/twice small.jpeg',
  },
  {
    eventId: 4,
    link: 'src/public/event-images/twice landscape.jpeg',
  },
  {
    eventId: 5,
    link: 'src/public/event-images/le sserafim small.jpeg',
  },
  {
    eventId: 5,
    link: 'src/public/event-images/le sserafim landscape .jpeg',
  },
  {
    eventId: 6,
    link: 'src/public/event-images/babymonster landscape.jpg',
  },
  {
    eventId: 6,
    link: 'src/public/event-images/babymonster small.jpg',
  },
  {
    eventId: 7,
    link: 'src/public/event-images/ado small.jpg',
  },
  {
    eventId: 8,
    link: 'src/public/event-images/Hikaru Utada landscape.png',
  },
  {
    eventId: 8,
    link: 'src/public/event-images/Hikaru Utada small.jpg',
  },
  {
    eventId: 9,
    link: 'src/public/event-images/hyde landscape.jpg',
  },
  {
    eventId: 9,
    link: 'src/public/event-images/hyde small.jpg',
  },
  {
    eventId: 10,
    link: 'src/public/event-images/Cerezo Osaka vs Borussia Dortmund landscape_.jpg',
  },
  {
    eventId: 10,
    link: 'src/public/event-images/Cerezo Osaka vs Borussia Dortmund small.jpg',
  },
  {
    eventId: 11,
    link: 'src/public/event-images/Urawa Red Diamonds vs Kawasaki Frontale landscape.jpg',
  },
  {
    eventId: 11,
    link: 'src/public/event-images/Urawa Red Diamonds vs Kawasaki Frontale small.png',
  },
  {
    eventId: 12,
    link: 'src/public/event-images/ASIAN KUNG-FU GENERATION landscape.jpg',
  },
  {
    eventId: 12,
    link: 'src/public/event-images/ASIAN KUNG-FU GENERATION small.jpg',
  },
  {
    eventId: 13,
    link: 'src/public/event-images/tale of genji small.jpg',
  },
  {
    eventId: 14,
    link: 'src/public/event-images/legend of the sky warrior small.jpg',
  },
  {
    eventId: 15,
    link: 'src/public/event-images/symphony small.jpg',
  },
  {
    eventId: 16,
    link: 'src/public/event-images/lisa landscape.jpg',
  },
  {
    eventId: 16,
    link: 'src/public/event-images/lisa small.jpg',
  },
  {
    eventId: 17,
    link: 'src/public/event-images/one ok rock landscape.jpg',
  },
  {
    eventId: 17,
    link: 'src/public/event-images/one ok rock small.png',
  },
  {
    eventId: 18,
    link: 'src/public/event-images/one republic small.jpeg',
  },
  {
    eventId: 18,
    link: 'src/public/event-images/one republic landscape.jpg',
  },
  {
    eventId: 19,
    link: 'src/public/event-images/Shonan Bellmare vs Yokohama FC small.png',
  },
  {
    eventId: 20,
    link: 'src/public/event-images/Vissel Kobe vs Urawa Red Diamonds small.jpg',
  },
  {
    eventId: 21,
    link: 'src/public/event-images/Kawasaki Frontale vs FC Tokyo small.jpg',
  },
  {
    eventId: 22,
    link: 'src/public/event-images/Mystic Warriors of the Dawn small.jpg',
  },
  {
    eventId: 23,
    link: 'src/public/event-images/Guardians of the Infinite Realm small.jpg',
  },
  {
    eventId: 24,
    link: 'src/public/event-images/Journey Through Time small.jpg',
  },
  {
    eventId: 25,
    link: 'src/public/event-images/Samurai Saga small.jpg',
  },
  {
    eventId: 26,
    link: 'src/public/event-images/Echoes of Eternity small.jpg',
  },
  {
    eventId: 27,
    link: 'src/public/event-images/Harmony of the Spheres small.jpg',
  },
  {
    eventId: 28,
    link: 'src/public/event-images/Nagoya Grampus vs Sanfrecce Hiroshima small.jpg',
  },
  {
    eventId: 29,
    link: 'src/public/event-images/Sagan Tosu vs Vegalta Sendai small.jpg',
  },
  {
    eventId: 30,
    link: 'src/public/event-images/Celestial Guardian small.jpg',
  },
  {
    eventId: 31,
    link: 'src/public/event-images/Mysteries of the Samurai small.jpg',
  },
  {
    eventId: 32,
    link: 'src/public/event-images/The Enchanted Forest small.jpg',
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
      const organizers = await createOrganizersArray();
      console.log(chalk.red(organizers));
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
