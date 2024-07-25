import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoTicketSharp } from "react-icons/io5";

export default function Transaction(){
    return(
        <>
            <div className="lg:px-[200px] pt-[20px]">
                <div className="flex text-[35px] font-bold justify-center lg:justify-start">
                    Transactions
                </div>
                <div className="flex flex-col lg:flex-row gap-[20px] pt-[20px] justify-center px-[10px] lg:px-[150px] lg:justify-start">
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

                <div className="flex items-center pt-[30px] pb-[50px] justify-center px-[10px]">
                    <div className="rounded flex justify-center w-[1000px] h-full shadow-xl lg:px-[25px] gap-[20px] border-t-4 border-blue-500">
                        <div className="flex flex-col w-[100%] px-[15px]">
                            <div className="w-[100%] flex pt-[10px] border-b border-black justify-center items-center">
                                <div className="flex text-[30px] flex-[2%] justify-center items-center py-[5px] ">
                                    <IoTicketSharp />
                                </div>
                                <div className="flex flex-col flex-[70%] gap-[10px] pl-[15px] text-[16px] lg:text-[20px]">
                                    <div>
                                        (transaction id)
                                    </div>
                                    <div>
                                        (tanggal transaction)
                                    </div>
                                </div>
                                <div className="flex flex-[10%] justify-end">
                                    <div className="flex w-[120px] h-[40px] items-center justify-center rounded bg-green-500 text-white">
                                        Paid    
                                    </div>
                                </div>
                            </div>

                            <div className="flex pt-[20px] gap-[20px]">
                                <div className="flex">
                                    <div className="py-[10px]">
                                        <Image 
                                            src="/images/one ok rock small.png"
                                            width={260}
                                            height={358}
                                            alt="gambar event"
                                            className="w-[100px] lg:w-[260px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-[100%] items-start gap-[20px] px-[10px] text-[16px] lg:text-[20px]">
                                    <div className="font-bold">
                                        ONE OK ROCK 2024 PREMONITION WORLD TOUR in Tokyo
                                    </div>
                                    <div>
                                        Sunday, 15 September 2024, 15:30 
                                    </div>
                                    <div>
                                        Quantity: 3 
                                    </div>
                                    <div>
                                        Total Price: 6000 yen 
                                    </div>
                                </div>
                            </div>


                            <div className="flex w-[100%] justify-end items-center pt-[20px] text-blue-500 hover:text-blue-200 cursor-pointer">
                                <div>
                                    Transaction Details
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