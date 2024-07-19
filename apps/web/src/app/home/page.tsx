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

export default function ProductPage(){
    return(
        <>
            <div className="bg-blue-400 w-full h-full flex justify-center px-[300px] py-[20px]">
                <div className="relative w-[700px]">
                    <input
                    type="text"
                    placeholder="Event/Artist/Group Name"
                    className="w-full py-[10px] px-[5px] pr-10 text-gray-700 bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IoSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
                </div>
            </div>

            <div className="flex justify-center w-full h-full pt-[30px]">
                <div className="flex bg-red-500 justify-center w-[700px] h-[250px]">
                    <Image 
                        src="/images/2024_D_1.jpg"
                        width={700}
                        height={250}
                        alt="gambar event"
                    />
                </div>
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
                            <SlMusicTone />
                        </div>
                        <div>
                            Sports
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-purple-500 px-[12px]">
                        <div className="bg-purple-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Theater
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-500 px-[12px]">
                        <div className="bg-green-500 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Classic
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-green-700 px-[12px]">
                        <div className="bg-green-700 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
                        </div>
                        <div>
                            Movie
                        </div>
                    </button>

                    <button className="w-[200px] h-[70px] flex justify-start items-center gap-[8px] rounded border-[2px] border-blue-400 px-[12px]">
                        <div className="bg-blue-400 w-[full] h-[full] p-[5px] rounded rounded-full text-white">
                            <SlMusicTone />
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

            <div className="px-[300px] py-[40px] text-[35px] font-bold">
                Recommended Ticket Information
            </div>

            <div className="px-[300px] flex flex-col gap-[40px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>

            <div className="px-[300px] flex flex-col gap-[40px] pt-[50px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>

            <div className="px-[300px] flex flex-col gap-[40px] pt-[50px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>

            <div className="px-[300px] flex flex-col gap-[40px] pt-[50px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>

            <div className="px-[300px] flex flex-col gap-[40px] pt-[50px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>

            <div className="px-[300px] flex flex-col gap-[40px] pt-[50px]">
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

                <div className="flex flex-col gap-[10px]">
                    <div className="bg-blue-100 flex w-[260px] h-[260px] justify-center items-center">
                        <Image 
                            src="/images/FUJI_ROCK_2_0205-500.jpg"
                            width={230}
                            height={200}
                            alt="gambar event 1"
                        />
                    </div>
                    <div className="flex w-[260px] h-[50px] justify-center">
                            FUJI ROCK FESTIVAL '24
                    </div>
                </div>
            </div>
        </>
    )
}