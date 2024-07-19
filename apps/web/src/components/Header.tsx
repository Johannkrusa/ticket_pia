import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlLogin } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <div className="bg-white w-full h-full text-red sticky top-0 flex items-center justify-between lg:px-10 px-[10px] border-b border-black py-[10px]">
        <div>
          <Image 
            src="/images/logo_sp.png"
            width={48}
            height={48}
            alt="logo ticket pia"
          />
        </div>

        <div className="flex items-center justify-center gap-[20px]">
            <div className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer">
                <div>
                  <SlLogin />
                </div>
                <div className="text-[15px]">
                  Log In
                </div>
            </div>

            <div className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer">
                <div>
                  <FaRegUser />
                </div>
                <div className="text-[15px]">
                  Member Registration
                </div>
            </div>

            <div className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer">
                <div>
                <IoTicketOutline />
                </div>
                <div className="text-[15px]">
                  My Ticket
                </div>
            </div>
            
            <div className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer">
                <div>
                <FaRegListAlt />
                </div>
                <div className="text-[15px]">
                  Purchase History
                </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l border-black pl-[15px] hover:text-gray-500 cursor-pointer">
              <div>
                <RxHamburgerMenu className="text-black text-[25px]"/>
              </div>
              <div className="text-[15px]">
                  Menu
              </div>
            </div>
        </div>
      </div>
    </>
  )
};
