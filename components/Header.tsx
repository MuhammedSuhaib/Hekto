
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="w-screen sm:w-[1920px]  bg-[#7E33E0]">
      <div className="flex flex-wrap items-center h-[44px] justify-between w-full  px-4 sm:px-10">
        {/* Left Section */}
        <div className="flex items-center gap-8 sm:ml-[21vh]">
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
          <div className="flex items-center gap-2">
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
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 text-[14px] text-[#F1F1F1] sm:text-[16px]">
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





