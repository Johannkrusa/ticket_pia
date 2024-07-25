'use client'
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlMusicTone } from "react-icons/sl";
import { GiTheaterCurtains } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { GiViolin } from "react-icons/gi";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiMyanimelist } from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import dynamic from "next/dynamic";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

export default function ProductPage(){    
    
    const banners = [
        { src: '/images/ASIAN KUNG-FU GENERATION landscape.jpg', alt: 'Avenged Sevenfold' },
        { src: '/images/one ok rock landscape.jpg', alt: 'Babymetal' },
        { src: '/images/twice landscape.jpeg', alt: 'Avicii' },
        { src: '/images/Cerezo Osaka vs Borussia Dortmund landscape_.jpg', alt: 'David Guetta' },
        { src: '/images/lisa landscape.jpg', alt: 'Skrillex' },
        { src: '/images/hyde landscape.jpg', alt: 'Loket Music Festival' },
        { src: '/images/Hikaru Utada landscape.png', alt: 'Loket Music Event' }
    ];

    const music = [
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avenged Sevenfold' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
    ];

    const theater = [
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Theater Japan' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Babymetal' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Avicii' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'David Guetta' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Skrillex' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Festival' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Loket Music Event' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Pop Concert' },
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
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
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
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
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
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
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
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
        { src: '/images/FUJI_ROCK_2_0205-500.jpg', alt: 'Shawn Mendes' }
    ];

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
        nextArrow: <div style={{ fontSize: "30px", color: "black" }}>&gt;</div>,
        prevArrow: <div style={{ fontSize: "30px", color: "black" }}>&lt;</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '15px',
                }
            }
        ]
    };

    const settings_2 = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: false, // Disable centerMode since we are showing multiple slides
        arrows: true,
        nextArrow: <div style={{ fontSize: "30px", color: "black" }}>&gt;</div>,
        prevArrow: <div style={{ fontSize: "30px", color: "black" }}>&lt;</div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return(
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
                        <div className="bg-red-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Music
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-yellow-500 px-[12px]">
                        <div className="bg-yellow-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <MdOutlineSportsSoccer />
                        </div>
                        <div>
                            Sports
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-purple-500 px-[12px]">
                        <div className="bg-purple-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <GiTheaterCurtains />
                        </div>
                        <div>
                            Theater
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-500 px-[12px]">
                        <div className="bg-green-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <GiViolin />
                        </div>
                        <div>
                            Classic
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-700 px-[12px]">
                        <div className="bg-green-700 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <BiSolidCameraMovie />
                        </div>
                        <div>
                            Movie
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-blue-400 px-[12px]">
                        <div className="bg-blue-400 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SiMyanimelist />
                        </div>
                        <div>
                            Anime
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-300 px-[12px]">
                        <div className="bg-green-300 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Korean
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-purple-300 px-[12px]">
                        <div className="bg-purple-300 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Video
                        </div>
                    </button>
                </div>
            </div>

            <div className="lg:px-[300px] px-[10px] py-[40px] text-[35px] font-bold">
                Recommended Ticket Information
            </div>

            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                            <SlMusicTone />
                        </div>
                        <div className="text-[25px]">
                            Music
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {music.map((music, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={music.src}
                                    alt={music.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{music.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div>  

            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px] pt-[50px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                            <GiTheaterCurtains />
                        </div>
                        <div className="text-[25px]">
                            Theater
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {theater.map((theater, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={theater.src}
                                    alt={theater.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{theater.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div>  



            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px] pt-[50px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                        <MdOutlineSportsSoccer />
                        </div>
                        <div className="text-[25px]">
                            Sports
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {sports.map((sports, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={sports.src}
                                    alt={sports.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{sports.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div> 

            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px] pt-[50px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                            <GiViolin />
                        </div>
                        <div className="text-[25px]">
                            Classic
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {classic.map((classic, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={classic.src}
                                    alt={classic.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{classic.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div>  

            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px] pt-[50px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                            <BiSolidCameraMovie />
                        </div>
                        <div className="text-[25px]">
                            movie
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {movie.map((movie, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={movie.src}
                                    alt={movie.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{movie.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div>  

            <div className="lg:px-[300px] px-[10px] flex flex-col gap-[40px] pt-[50px]">
                <div className="flex justify-between border-b-[3px] border-blue-500 pb-[15px]">
                    <div className="flex items-center gap-[10px]">
                        <div className="text-[25px] text-blue-500">
                            <SiMyanimelist />
                        </div>
                        <div className="text-[25px]">
                            Anime
                        </div>
                    </div>
                    <div className="text-blue-500">
                        Show More
                    </div>
                </div>
            </div>

            <div className="w-full mb-12 lg:px-[300px] py-[20px]"> 
                <Slider {...settings_2}> 
                    {anime.map((anime, index) => (
                        <div key={index} className="px-2">
                            <div className="relative w-full h-[270px]">
                                <Image
                                    src={anime.src}
                                    alt={anime.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="text-center mt-2">{anime.alt}</div>
                        </div>
                    ))}
                </Slider>
            </div>  

            <div className="bg-gray-200 w-full h-full flex flex-col lg:px-[300px] px-[10px] py-[35px]">
                <div className="text-[30px] pb-[20px] font-bold">
                    Important Notices
                </div>
                <div className="flex flex-col gap-[10px] text-gray-600">
                    <div className="flex items-center">
                        <div>
                            <MdKeyboardArrowRight />
                        </div>
                        <div>
                            Notification of mandatory registration for identity authentication service "3D Secure 2.0"
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <MdKeyboardArrowRight />
                        </div>
                        <div>
                            June 5, 2024 Service change announcement
                        </div>
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
                            Notice of refunds due to performance cancellations, postponements, etc.
                        </div>
                    </div>

                </div>
            </div>

            <div className="lg:px-[300px] px-[10px] bg-blue-500 pb-[50px]">
                <div className="text-white text-[35px] py-[20px]">
                    Search By Area
                </div>
                <div className="bg-white rounded-xl ">
                    <div className="flex flex-col px-[40px] py-[20px]">
                        <div className="border-b border-gray-500 py-[15px]">
                            Hokkaido
                        </div>
                        <div className="border-b border-gray-500 py-[15px]">
                            Tohoku
                        </div>
                        <div className="border-b border-gray-500 py-[15px]">
                            Kanto
                        </div>
                        <div className="border-b border-gray-500 py-[15px]">
                            Chubu / Hokuriku
                        </div>
                        <div className="border-b border-gray-500 py-[15px]">
                            Kansai
                        </div>
                        <div className="py-[15px]">
                            Kyushu-Okinawa
                        </div>
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
                    Ticket Pia is one of the largest ticket sales sites in Japan. You can reserve and purchase tickets for live shows, concerts, theater, sports, classical music, Korean pop, anime, movies, and more.
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
    )
}