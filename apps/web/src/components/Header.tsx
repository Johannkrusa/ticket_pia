'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SlLogin, SlLogout } from 'react-icons/sl';
import { FaRegUser } from 'react-icons/fa6';
import { IoTicketOutline } from 'react-icons/io5';
import { FaRegListAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatToCamelCase } from '@/features/hooks/useFormatData';

export const Header = () => {
  const auth = useSelector((state: any) => state.auth);
  const [username, setUsername] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDropdownOpen, setIsLogoutDropdownOpen] = useState(false);
  const [isLogoutMenuDropdownOpen, setIsLogoutMenuDropdownOpen] = useState(false);

  useEffect(() => {
    if (auth?.auth) {
      const firstName = auth.auth.firstName ?? '';
      const lastName = auth.auth.lastName ?? '';
      const name = `${firstName} ${lastName}`;
      setUsername(formatToCamelCase(name));
    }
  }, [auth]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLogoutDropdown = () => {
    setIsLogoutDropdownOpen(!isLogoutDropdownOpen);
  };
  
  const toggleLogoutMenuDropdown = () => {
    setIsLogoutMenuDropdownOpen(!isLogoutMenuDropdownOpen);
  };

  const deleteToken = () => {
    localStorage.removeItem('tkn');
    window.location.reload(); // Refresh the page to update the auth state
  };

  return (
    <>
      <div className="navbar bg-gray-500 w-full h-[40px] flex items-center">
        <div className="text-white w-[400px] h-full flex items-center text-[13px] px-[20px]">
          If you`re a Platinum user, log in to get your Platinum Pass
        </div>
      </div>

      <div className="navBar bg-white w-full h-full text-red sticky top-0 flex items-center justify-between lg:px-10 px-[10px] shadow py-[10px] z-20">
        <Link href="/home">
          <Image
            src="/images/logo_sp.png"
            width={48}
            height={48}
            alt="logo ticket pia"
          />
        </Link>

        <div className="flex items-center justify-center gap-[20px]">
          {username ? (
            <div className="relative">
              <div
                onClick={toggleLogoutDropdown}
                className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer"
              >
                <div>
                  <FaRegUser />
                </div>
                <div className="text-[15px]">{username}</div>
              </div>
              {isLogoutDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-30">
                  <div
                    onClick={deleteToken}
                    className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px] cursor-pointer"
                  >
                    <div>
                      <SlLogout />
                    </div>
                    <div>Log Out</div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/authenticate"
                className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer"
              >
                <div>
                  <SlLogin />
                </div>
                <div className="text-[15px]">Log In</div>
              </Link>
              <Link
                href="/register/user"
                className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer"
              >
                <div>
                  <FaRegUser />
                </div>
                <div className="text-[15px]">Member Registration</div>
              </Link>
            </>
          )}
          <Link
            href="/myTicket"
            className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer"
          >
            <div>
              <IoTicketOutline />
            </div>
            <div className="text-[15px]">My Ticket</div>
          </Link>
          <Link
            href="/transaction"
            className="hidden sm:flex flex-col items-center justify-center gap-[6px] hover:text-gray-500 cursor-pointer"
          >
            <div>
              <FaRegListAlt />
            </div>
            <div className="text-[15px]">Purchase History</div>
          </Link>
          <div className="md:hidden lg:hidden flex flex-col items-center justify-center border-l border-black pl-[15px] hover:text-gray-500 cursor-pointer relative">
            <div onClick={toggleDropdown}>
              <RxHamburgerMenu className="text-black text-[25px]" />
            </div>
            <div className="text-[15px]">Menu</div>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-30">
                {username ? (
                  <>
                    <div
                      onClick={toggleLogoutMenuDropdown}
                      className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px] cursor-pointer"
                    >
                      <div>
                        <FaRegUser />
                      </div>
                      <div>{username}</div>
                    </div>
                    {isLogoutMenuDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg z-30">
                        <div
                          onClick={deleteToken}
                          className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px] cursor-pointer"
                        >
                          <div>
                            <SlLogout />
                          </div>
                          <div>Log Out</div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <Link
                      href="/authenticate"
                      className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px]"
                    >
                      <div>
                        <SlLogin />
                      </div>
                      <div>Log In</div>
                    </Link>
                    <Link
                      href="/register/user"
                      className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px]"
                    >
                      <div>
                        <FaRegUser />
                      </div>
                      <div>Member Registration</div>
                    </Link>
                  </>
                )}
                <Link
                  href="/myTicket"
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px]"
                >
                  <div>
                    <IoTicketOutline />
                  </div>
                  <div>My Ticket</div>
                </Link>
                <Link
                  href="/transaction"
                  className="flex items-center px-4 py-2 text-black hover:bg-gray-100 gap-[10px]"
                >
                  <div>
                    <FaRegListAlt />
                  </div>
                  <div>Purchase History</div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
