import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";

export default function MyTicket(){
    return(
        <>
            <div className="lg:px-[200px] pt-[20px]">
                <div className="text-[35px] font-bold">
                    MyTickets
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px] pt-[20px] justify-center lg:px-[150px] lg:justify-start">
                    <div>
                        Sort By
                    </div>
                    <div>
                        <select className="select select-bordered w-[200px] border border-black rounded p-[3px]">
                            <option>asc</option>
                            <option>desc</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-[200px] border border-black rounded p-[3px]">
                            <option>all</option>
                            <option>Redemeed</option>
                            <option>Unredemeed</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-center pt-[30px] pb-[50px] justify-center">
                    <div className="rounded flex justify-center w-[1000px] h-full shadow-xl px-[25px] gap-[20px] border-t-4 border-blue-500">
                        <div className="py-[10px]">
                            <Image 
                                src="/images/one ok rock small.png"
                                width={250}
                                height={358}
                                alt="gambar event"
                            />
                        </div>
                            
                        <div className="flex flex-col">
                            
                            <div className="flex gap-[20px] pt-[10px]">
                                <div className="w-[100%] flex-[70%] justify-start py-[5px] font-bold">
                                    ONE OK ROCK 2024 PREMONITION WORLD TOUR in Tokyo
                                </div>
                                <div className="flex flex-[40%] justify-end">
                                    <div className="flex w-[120px] h-[40px] items-center justify-center bg-green-500 text-white">
                                        Redemeed    
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-black w-[100%] flex justify-start py-[10px] d">
                                Reserved seat
                            </div>

                            
                            <div className="flex flex-col w-[100%] items-start pt-[10px] gap-[20px]">
                                <div className="font-bold">
                                    Sunday, 15 September 2024, 15:30
                                </div>
                                <div>
                                    Ajinomoto Stadium, Tokyo 
                                </div>
                            </div>

                            <div className="flex w-[100%] justify-end items-center pt-[20px] text-blue-500 hover:text-blue-200 cursor-pointer">
                                <div>
                                    Show More
                                </div>
                                <div className="text-[25px">
                                    <MdKeyboardArrowRight />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}