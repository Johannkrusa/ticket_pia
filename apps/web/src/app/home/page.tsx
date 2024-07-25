'use client';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { SlMusicTone } from 'react-icons/sl';
import { GiTheaterCurtains } from 'react-icons/gi';
import { MdOutlineSportsSoccer } from 'react-icons/md';
import { GiViolin } from 'react-icons/gi';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { SiMyanimelist } from 'react-icons/si';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookFill } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { convertUnderscoreToSpace } from '@/features/hooks/useFormatData';

import dynamic from 'next/dynamic';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useGetEvents } from '@/features/api/useGetEvents.hook';

import MiniCarousel from '@/components/MiniCarousel';

const Slider = dynamic(() => import('react-slick'), { ssr: false });
interface MusicItem {
  src: string;
  alt: string;
}

export default function ProductPage() {
  const banners = [
    {
      src: '/images/ASIAN KUNG-FU GENERATION landscape.jpg',
      alt: 'Avenged Sevenfold',
    },
    { src: '/images/one ok rock landscape.jpg', alt: 'Babymetal' },
    { src: '/images/twice landscape.jpeg', alt: 'Avicii' },
    {
      src: '/images/Cerezo Osaka vs Borussia Dortmund landscape_.jpg',
      alt: 'David Guetta',
    },
    { src: '/images/lisa landscape.jpg', alt: 'Skrillex' },
    { src: '/images/hyde landscape.jpg', alt: 'Loket Music Festival' },
    { src: '/images/Hikaru Utada landscape.png', alt: 'Loket Music Event' },
  ];

  const {
    data: musics,
    isLoading,
    error,
  } = useGetEvents({ genreId: 1, result: 6 });
  const [music, setMusic] = useState<MusicItem[]>([]); // Define state with type MusicItem[]

  const arrayEventPictures = (musics: any): MusicItem[] => {
    if (!musics) return [];
    return musics.map((music: any) => {
      const alt = convertUnderscoreToSpace(music.title);
      const fileName = music.EventPicture[0]?.link.split('/').pop() || '';
      return {
        src: `http://localhost:8000/public/event-images/${fileName}`,
        alt: `${alt}`,
      };
    });
  };

  useEffect(() => {
    if (musics) {
      const formattedMusic = arrayEventPictures(musics);
      console.log('Formatted Music Data:', formattedMusic);
      setMusic(formattedMusic);
    }
  }, [musics]);

  const theater = [
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' },
  ];

  const sports = [
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' },
  ];

  const classic = [
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' },
  ];

  const movie = [
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' },
  ];

  const anime = [
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
    { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '200px',
    arrows: true,
    nextArrow: <div style={{ fontSize: '30px', color: 'black' }}>&gt;</div>,
    prevArrow: <div style={{ fontSize: '30px', color: 'black' }}>&lt;</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '50px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '15px',
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-blue-500 w-full h-full flex justify-center px-[10px] lg:px-[300px] py-[20px]">
        <div className="relative w-[700px]">
          <input
            type="text"
            placeholder="Event/Artist/Group Name"
            className="w-full py-[10px] px-[5px] pr-10 text-gray-700 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
        </div>
      </div>

      <div className="w-full mb-12 pt-[30px] h-[300px] lg:h-[450px]">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="px-2">
              <div className="relative w-full h-[300px] lg:h-[450px]">
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  className="rounded-md object-fit"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="pt-[50px] flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px]">
          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-red-500 px-[12px]">
            <div className="bg-red-500 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <SlMusicTone />
            </div>
            <div>Music</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-yellow-500 px-[12px]">
            <div className="bg-yellow-500 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <MdOutlineSportsSoccer />
            </div>
            <div>Sports</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-purple-500 px-[12px]">
            <div className="bg-purple-500 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <GiTheaterCurtains />
            </div>
            <div>Theater</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-500 px-[12px]">
            <div className="bg-green-500 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <GiViolin />
            </div>
            <div>Classic</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-700 px-[12px]">
            <div className="bg-green-700 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <BiSolidCameraMovie />
            </div>
            <div>Movie</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-blue-400 px-[12px]">
            <div className="bg-blue-400 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <SiMyanimelist />
            </div>
            <div>Anime</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-300 px-[12px]">
            <div className="bg-green-300 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <SlMusicTone />
            </div>
            <div>Korean</div>
          </button>

          <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-purple-300 px-[12px]">
            <div className="bg-purple-300 w-[full] h-[full] p-[5px]  rounded-full text-white">
              <SlMusicTone />
            </div>
            <div>Video</div>
          </button>
        </div>
      </div>

      <div className="lg:px-[300px] px-[10px] py-[40px] text-[35px] font-bold">
        Recommended Ticket Information
      </div>

      {/* Music */}
      <MiniCarousel genreId={1} result={6} />

      {/* Theater */}
      <MiniCarousel genreId={3} result={6} />

      {/* Sports */}
      <MiniCarousel genreId={2} result={6} />

      {/*  Classic */}
      <MiniCarousel genreId={4} result={6} />

      {/* Korean */}
      <MiniCarousel genreId={7} result={6} />

      {/* Anime */}
      <MiniCarousel genreId={6} result={6} />

      <div className="bg-gray-200 w-full h-full flex flex-col lg:px-[300px] px-[10px] py-[35px]">
        <div className="text-[30px] pb-[20px] font-bold">Important Notices</div>
        <div className="flex flex-col gap-[10px] text-gray-600">
          <div className="flex items-center">
            <div>
              <MdKeyboardArrowRight />
            </div>
            <div>
              {`Notification of mandatory registration for identity authentication service 3D Secure "2.0"`}
              `
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <MdKeyboardArrowRight />
            </div>
            <div>June 5, 2024 Service change announcement</div>
          </div>
          <div className="flex items-center">
            <div>
              <MdKeyboardArrowRight />
            </div>
            <div>
              Please be careful of fake sites that imitate the official website.
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <MdKeyboardArrowRight />
            </div>
            <div>
              Please beware of suspicious emails claiming to be from Ticket Pia.
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <MdKeyboardArrowRight />
            </div>
            <div>
              Notice of refunds due to performance cancellations, postponements,
              etc.
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-[300px] px-[10px] bg-blue-500 pb-[50px]">
        <div className="text-white text-[35px] py-[20px]">Search By Area</div>
        <div className="bg-white rounded-xl ">
          <div className="flex flex-col px-[40px] py-[20px]">
            <div className="border-b border-gray-500 py-[15px]">Hokkaido</div>
            <div className="border-b border-gray-500 py-[15px]">Tohoku</div>
            <div className="border-b border-gray-500 py-[15px]">Kanto</div>
            <div className="border-b border-gray-500 py-[15px]">
              Chubu / Hokuriku
            </div>
            <div className="border-b border-gray-500 py-[15px]">Kansai</div>
            <div className="py-[15px]">Kyushu-Okinawa</div>
          </div>
        </div>
      </div>

      <div className="lg:px-[300px] px-[10px] flex flex-col justify-center items-center py-[20px] gap-[10px]">
        <div className="text-[50px] font-bold text-blue-400">
          チケット購入方法
        </div>
        <div className="text-[30px] font-bold text-blue-700">
          ファミリーマートでのお支払い
        </div>
      </div>
      <div className="w-full h-auto lg:px-[300px] px-[10px] py-[10px]">
        <Image
          src="/images/purchase_pc1b.png"
          layout="responsive"
          width={1500}
          height={200}
          alt="gambar event 1"
          className="object-cover"
        />
      </div>

      <div className="lg:px-[300px] flex justify-center items-center py-[20px] gap-[10px] pt-[30px]">
        <div className="text-[30px] font-bold text-blue-700">
          クレジットカードでのお支払い
        </div>
      </div>
      <div className="w-full h-auto lg:px-[300px] py-[10px] mb-[20px]">
        <Image
          src="/images/purchase_pc2b.png"
          layout="responsive"
          width={1500}
          height={200}
          alt="gambar event 1"
          className="object-cover"
        />
      </div>

      <div className="bg-blue-100 w-full h-full flex flex-col py-[30px]">
        <div className="lg:px-[200px] px-[10px] py-[30px] text-center lg:text-justify">
          Ticket Pia is one of the largest ticket sales sites in Japan. You can
          reserve and purchase tickets for live shows, concerts, theater,
          sports, classical music, Korean pop, anime, movies, and more.
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          <div className="bg-white w-[50px] h-[50px] text-[25px] flex justify-center items-center">
            <FaXTwitter />
          </div>
          <div className="bg-blue-800 text-white w-[50px] h-[50px] text-[25px] flex justify-center items-center">
            <RiFacebookFill />
          </div>
          <div className="bg-white w-[50px] h-[50px] text-[25px] flex justify-center items-center">
            <FaInstagram />
          </div>
          <div className="bg-white text-red-600 w-[50px] h-[50px] text-[25px] flex justify-center items-center">
            <FaYoutube />
          </div>
        </div>
      </div>
    </>
  );
}
