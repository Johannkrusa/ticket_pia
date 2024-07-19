import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function ProductPage(){
    return(
        <>
            <div className="bg-blue-400 w-full h-full flex justify-between px-[300px] py-[20px]">
                <div className="text-white font-bold text-[30px]">
                    "WRESTLE PETER PAN 2024 7/21"
                </div>
                <div className="bg-white text-green-500 rounded flex items-center justify-center px-[10px]">
                    In Progress
                </div>
            </div>

            <div className="flex py-[20px] gap-[10px]">
                <div className="flex flex-[40%] justify-end py-[10px]">
                    <Image 
                        src="/images/plan_img_tqxpajPT.png"
                        width={300}
                        height={358}
                        alt="gambar event"
                    />
                </div>
                <div className="flex justify-start flex-[50%]">
                    <div className="flex flex-col">
                        <div className="flex justify-between border-b py-4 px-[10px]">
                            <div className="font-bold text-gray-700 w-[250px]">
                                Venue
                            </div>
                            <div className="text-blue-800 w-[450px]">
                                : Ryogoku Kokugikan, Tokyo
                            </div>
                        </div>
                        <div className="bg-gray-200 flex justify-between py-4 px-[10px]">
                            <div className="font-bold text-gray-700 w-[250px] ">
                                Address
                            </div>
                            <div className="text-blue-800 w-[450px]">
                                : 1-3-28 Yokoami, Sumida-ku, Tokyo 130-0015
                            </div>
                        </div>
                        <div className="flex justify-between border-b py-4 px-[10px]">
                            <div className="font-bold text-gray-700 w-[250px]">
                                Date
                            </div>
                            <div className="text-blue-800 w-[450px]">
                                : 2024/07/21 (Sun)
                            </div>
                        </div>
                        <div className="bg-gray-100 flex justify-between py-4 px-[10px]">
                            <div className="font-bold text-gray-700 w-[250px]">
                                Start
                            </div>
                            <div className="text-blue-800 w-[450px]">
                                : 14:00 ~
                            </div>
                        </div>
                        <div className="flex justify-between border-b py-4 px-[10px]">
                            <div className="font-bold text-gray-700 w-[250px]">
                                Opening
                            </div>
                            <div className="text-blue-800 w-[450px]">
                                : 12:30
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[300px] py-[20px]">
                The recommended space for each person is 1 square meter. On the day of the fireworks, you can reserve your own space within the area to watch the fireworks, but we ask for your understanding and cooperation in not reserving too much space.
            </div>

            <div className="flex gap-[70px] justify-center pt-[30px]">
                <div className="w-[250px] bg-red-500 h-[200px] flex">
                    <Image 
                        src="/images/plan_slides_img_E5C4E2BC424115DB3117BA587236F902.jpg"
                        width={250}
                        height={400}
                        alt="gambar event 1"
                    />
                </div>
                <div className="w-[250px] bg-red-500 h-[200px] flex">
                    <Image 
                        src="/images/plan_slides_img_E5C4E2BC424115DB3117BA587236F902.jpg"
                        width={300}
                        height={400}
                        alt="gambar event 2"
                    />
                </div>
                <div className="w-[250px] bg-red-500 h-[200px] flex">
                    <Image 
                        src="/images/plan_slides_img_E5C4E2BC424115DB3117BA587236F902.jpg"
                        width={300}
                        height={400}
                        alt="gambar event 3"
                        />
                    </div>
            </div>
            
            <div className="flex justify-center pt-[50px]">
                <Image 
                    src="/images/1648631190_5.jpg"
                    width={600}
                    height={400}
                    alt="gambar event"
                />
            </div>

            <div className="flex flex-col px-[300px] py-[60px]">
                <div className="bg-red-500 text-white text-[30px] w-full rounded flex justify-center py-[5px]">
                    Important Notes
                </div>
                <div className="flex flex-col py-[20px] text-[25px] gap-[10px]">
                    <div>
                        - Sales will be on a first-come, first-served basis. Payment methods are credit card and PayPay only.
                    </div>
                    <div>
                        - For those who purchase a ticket, a wristband to wear on the day of the event will be sent to you at a later date.
                    </div>
                    <div>
                        - Please wear a wristband when you arrive.
                    </div>
                    <div>
                        - As it is expected to be crowded on the day, please be sure to wear your wristband before coming to the venue.
                    </div>
                    <div>
                        - The recommended space for each person is 1 square meter. On the day of the fireworks, you can reserve your own space within the area to watch the fireworks, but we ask for your understanding and cooperation in not reserving too much space.
                    </div>
                    <div>
                        - Tickets cannot be cancelled or changed after purchase.
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-[300px] py-[20px]">
                <div className="text-[25px] font-bold text-blue-800 pb-[10px]">
                    Sales Information
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col shadow px-[15px] w-full">
                            <div className="flex justify-start py-4">
                                <div className="font-bold text-gray-500 w-[250px]">
                                    Sales Period
                                </div>
                                <div className="text-blue-800 w-[900px]">
                                    : 2024/03/17 (Sun) 10:00 ~ 2024/07/18 (Thu) 11:00
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="font-bold text-gray-500 w-[250px] ">
                                    Arena Seats
                                </div>
                                <div className="text-blue-800 w-[900px]">
                                    : 15,000 yen
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="font-bold text-gray-500 w-[250px]">
                                    Mass Seat A
                                </div>
                                <div className="text-blue-800 w-[900px]">
                                    : 12,000 yen
                                </div>
                            </div>
                            <div className="flex justify-start py-4">
                                <div className="font-bold text-gray-500 w-[250px]">
                                    Mass Seat B
                                </div>
                                <div className="text-blue-800 w-[900px]">
                                    : 9,000 yen
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-[20px] px-[300px]">
                <div className="text-[25px] font-bold text-blue-800 pb-[10px]">
                    Tickets
                </div>
                <div className="flex shadow px-[15px] py-4">
                    <div className="flex flex-col flex-[50%]">
                        <div>
                            Arena Seat 15,000 yen *Price is per person
                        </div>
                        <div>
                            Seat A 12,000 yen *Price is per person
                        </div>
                        <div>
                            Seat B 9,000 yen *Price is per person
                        </div>
                        <div className="pt-[30px]">
                            *If you are using a wheelchair, please contact ddt@ddtpro.co.jp in advance. Please note that due to the structure of the venue, we may ask you to specify the type of seat and the location of the seat.
                        </div>
                    </div>
                    <div className="flex flex-col flex-[50%] items-end">
                        <div>
                            Please select a seat type
                        </div>
                        <div className="pt-[15px]">
                            <select className="select bg-blue-400 text-white w-[300px] border border-white p-[9px]">
                                <option>Arena Seat: 15,000 yen</option>
                                <option>Mass Seat A: 12,000 yen</option>
                                <option>Mass Seat B: 9,000 yen</option>
                            </select>
                        </div>
                        <div className="pt-[30px]">
                            Please select the number of tickets
                        </div>
                        <div className="pt-[15px]">
                            <select className="select bg-blue-400 text-white w-[300px] border border-white p-[9px]">
                                <option>--</option>
                                <option>1 Sheet</option>
                                <option>2 Sheet</option>
                                <option>3 Sheet</option>
                                <option>4 Sheet</option>
                                <option>5 Sheet</option>
                            </select>
                        </div>
                        <div className="pt-[30px] px-[50px]">
                            <button className="button bg-blue-800 w-[200px] rounded-xl text-[30px] text-white font-bold p-[5px]">
                                Apply
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col py-[20px] px-[300px]">
                <div className="text-[25px] font-bold text-blue-800 pb-[10px]">
                    Contact
                </div>
                <div className="flex ">
                    <div className="flex flex-col shadow px-[15px] w-full">
                            <div className="flex justify-start py-4">
                                <div className="font-bold text-gray-500 w-[250px]">
                                    Name
                                </div>
                                <div className="text-black w-[900px]">
                                    : DDT Pro-Wrestling
                                </div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-[20px] px-[300px]">
                <div className="text-[25px] font-bold text-blue-800 pb-[10px]">
                    Reviews
                </div>
                <div className="flex ">
                    <div className="flex flex-col shadow px-[15px] w-full">
                            <div className="flex flex-col py-4">
                                <div className="font-bold text-gray-500">
                                    James
                                </div>
                                <div className="flex gap-[5px] text-yellow-500 text-[25px]">
                                    <div>
                                        <FaStar />
                                    </div>
                                    <div>
                                        <FaStar />
                                    </div>
                                    <div>
                                        <FaStar />
                                    </div>
                                    <div>
                                        <FaStar />
                                    </div>
                                    <div>
                                        <FaStarHalfAlt />
                                    </div>
                                </div>
                                <div className="pt-[20px]">
                                    The events was amazing.
                                </div>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )
}