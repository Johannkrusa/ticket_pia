import { RiQuestionnaireLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Image from "next/image";
import Link from "next/link"


export const Footer = () => {
  return (
    <>
      <section className="bg-white flex w-full h-full justify-center py-[20px]">
        <Link href="#top">
          <button className="button bg-white flex items-center gap-[5px]">
            <div>
              <IoIosArrowUp className="text-xl"/>
            </div>
            <div>
              Back to top
            </div>
          </button>
        </Link>
      </section>


      <nav className="bg-gray-500 w-full h-full flex flex-col text-white gap-3 lg:pl-[300px] lg:py-[20px]">
          <section className="hidden lg:flex gap-5">
            <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
              <div>
                <RiQuestionnaireLine className="text-xl"/>
              </div>
              <div className="text-[20px]">
                Help
              </div>
            </div>

            <div className="flex items-center gap-1 hover:text-gray-200 cursor-pointer">
              <div>
                <FaRegUser className="text-l"/>
              </div>
              <div className="text-[20px]">
                For New Users 
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 lg:gap-[20px] text-[15px]">
            <div className="flex border-b border-r border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              privacy policy
            </div>
            <div className="flex border-b border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Customer Policy
            </div>
            <div className="flex border-b border-r border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Pia Membership Terms and Condition
            </div>
            <div className="flex border-b border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Data Disclosure
            </div>
            <div className="flex border-b border-r border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Travel agency registration form, terms and conditions, etc.
            </div>
            <div className="flex border-b border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Operating environment and security
            </div>
            <div className="flex border-b border-r border-white py-[10px] lg:py-0 lg:border-0 justify-center text-center lg:justify-start hover:text-gray-200 cursor-pointer">
              Pia Company Profile
            </div>
          </section>

          <section className="lg:hidden flex flex-col gap-1">
            <div className="flex border-b border-white py-[20px] justify-between px-[5px] items-center">
              <div className="flex gap-1 items-center">
                <div>
                  <RiQuestionnaireLine className="text-xl"/>
                </div>
                <div>
                  Help
                </div>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>

            <div className="flex border-b border-white py-[20px] justify-between px-[5px] items-center">
              <div className="flex gap-1 items-center">
                <div>
                  <FaRegUser className="text-l"/>
                </div>
                <div>
                  For New Users 
                </div>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </section>
      </nav>

      <nav className="bg-white w-full h-full flex flex-col justify-center items-center gap-7 py-7">
        <div>
          <Image 
              src="/images/logo.png"
              width={120}
              height={25}
              alt="logo besar ticket pia"
            />
        </div>
        <div className="text-center italic">
          Copyright © PIA Corporation. All Rights Reserved.
        </div>
      </nav>
    </>
  )
};
