'use client';
import Image from 'next/image';
import { SlMusicTone } from 'react-icons/sl';
import { convertUnderscoreToSpace } from '@/features/hooks/useFormatData';

import dynamic from 'next/dynamic';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { useGetEvents } from '@/features/api/useGetEvents.hook';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface IEventPicture {
  src: string;
  alt: string;
}

export default function MiniCarousel({
  genreId,
  result,
}: {
  genreId: number;
  result: number;
}) {
  const genreNames: { [key: number]: string } = {
    1: 'MUSIC',
    2: 'SPORT',
    3: 'THEATER',
    4: 'CLASSIC',
    5: 'MOVIE',
    6: 'ANIME',
    7: 'KOREAN',
    8: 'LIVE_STREAMING',
  };

  const genreName = (genreId: number): string => {
    return genreNames[genreId] || 'UNKNOWN'; 
  };

  const {
    data: eventPictures,
    isLoading,
    error,
  } = useGetEvents({ genreId, result });
  const [eventPictureList, setEventPictureList] = useState<IEventPicture[]>([]);

  const arrayEventPictures = (events: any): IEventPicture[] => {
    if (!events) return [];
    return events.map((event: any) => {
      const alt = convertUnderscoreToSpace(event.title);
      const fileName = event.EventPicture[0]?.link.split('/').pop() || '';
      return {
        src: `http://localhost:8000/public/event-images/${fileName}`,
        alt: `${alt}`,
      };
    });
  };

  useEffect(() => {
    if (eventPictures) {
      const formattedEventPictures = arrayEventPictures(eventPictures);
      console.log('Formatted Event Pictures Data:', formattedEventPictures);
      setEventPictureList(formattedEventPictures);
    }
  }, [eventPictures]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    arrows: true,
    nextArrow: <div style={{ fontSize: '30px', color: 'black' }}>&gt;</div>,
    prevArrow: <div style={{ fontSize: '30px', color: 'black' }}>&lt;</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px]">
        <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
          <div className="flex items-center gap-[10px]">
            <div className="text-[25px] text-blue-500">
              <SlMusicTone />
            </div>
            <div className="text-[25px]">{genreName(genreId)}</div>
          </div>
          <div className="text-blue-500">Show More</div>
        </div>
      </div>

      <div className="w-full mb-12 lg:px-[300px] py-[20px]">
        {!isLoading && !error && eventPictureList.length > 0 && (
          <Slider {...settings}>
            {eventPictureList.map((eventPicture, index) => (
              <div key={index} className="px-2">
                <div className="relative w-full h-[270px]">
                  <Image
                    src={eventPicture.src}
                    alt={eventPicture.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <div className="text-center mt-2">{eventPicture.alt}</div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}
