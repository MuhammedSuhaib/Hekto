import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex h-full w-screen bg-[#7E33E0] p-4 sm:w-[768px] md:w-[1024px] lg:w-[1280px] xl:w-screen 2xl:w-full">
      <div className="h-[44px]2xl:justify-between flex w-full flex-wrap items-center px-4 sm:px-10 md:gap-10 lg:gap-40 xl:gap-80">
        {/* Left Section */}
        <div className="sm:gap-30 flex items-center gap-8 sm:flex-wrap md:ml-[0vh] md:gap-8 xl:ml-[25vh]">
          <div className="flex items-center gap-2">
            <Image
              src="/uil_envelope-alt.png"
              alt="Email Icon"
              width={16}
              height={16}
            />
            <span className="text-[14px] font-semibold text-[#F1F1F1] sm:text-[16px]">
              mhhasanul@gmail.com
            </span>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Image
              src="/bx_bx-phone-call.png"
              alt="Phone Icon"
              width={16}
              height={16}
            />
            <span className="text-[14px] text-[#F1F1F1] sm:text-[16px]">
              (12345)67890
            </span>
          </div>
        </div>

        {/* Right Section */}
        <ul className="flex flex-wrap items-center gap-2 text-[14px] text-[#F1F1F1] sm:gap-4 sm:text-[16px]">
          <li className="flex items-center gap-1">
            English
            <Image
              src="/Group.png"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-1">
            USD
            <Image
              src="/Group.png"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-1">
            Login
            <Image
              src="/carbon_user.png"
              alt="User Icon"
              width={16}
              height={16}
            />
          </li>
          <li className="flex items-center gap-1">
            Wishlist
            <Image
              src="/uil_heart-alt.png"
              alt="Heart Icon"
              width={16}
              height={16}
            />
          </li>
          <li>
            <Image src="/crt.png" alt="Cart Icon" width={16} height={16} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
