// import React from "react";
// import Image from "next/image";

// function Header() {
//   return (
//     <header className="h-[44px] w-full flex flex-wrap items-center justify-between bg-[#7E33E0] px-4 sm:px-10">
//       {/* Left Section */}
//       <div className="flex items-center gap-2">
//         <Image src="/uil_envelope-alt.png" alt="Email Icon" width={16} height={16} />
//         <span className="text-[14px] sm:text-[16px] font-semibold text-[#F1F1F1]">
//           mhhasanul@gmail.com
//         </span>
//       </div>

//       {/* Middle Section */}
//       <div className="hidden sm:flex items-center gap-2">
//         <Image src="/bx_bx-phone-call.png" alt="Phone Icon" width={16} height={16} />
//         <span className="text-[14px] sm:text-[16px] text-[#F1F1F1]">
//           (12345)67890
//         </span>
//       </div>

//       {/* Right Section */}
//       <ul className="flex items-center gap-4 text-[14px] sm:text-[16px] text-[#F1F1F1]">
//         <li className="flex items-center gap-1">
//           English
//           <Image src="/Group.png" alt="Dropdown Icon" width={16} height={16} />
//         </li>
//         <li className="flex items-center gap-1">
//           USD
//           <Image src="/Group.png" alt="Dropdown Icon" width={16} height={16} />
//         </li>
//         <li className="flex items-center gap-1">
//           Login
//           <Image src="/carbon_user.png" alt="User Icon" width={16} height={16} />
//         </li>
//         <li className="flex items-center gap-1">
//           Wishlist
//           <Image src="/uil_heart-alt.png" alt="Heart Icon" width={16} height={16} />
//         </li>
//         <li>
//           <Image src="/crt.png" alt="Cart Icon" width={16} height={16} />
//         </li>
//       </ul>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="h-[44px] w-full flex flex-wrap items-center justify-between bg-[#7E33E0] px-4 sm:px-10">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        <Image src="/uil_envelope-alt.png" alt="Email Icon" width={16} height={16} />
        <span className="text-[14px] sm:text-[16px] font-semibold text-[#F1F1F1]">
          mhhasanul@gmail.com
        </span>
      </div>

      {/* Middle Section */}
      <div className="hidden sm:flex items-center gap-2">
        <Image src="/bx_bx-phone-call.png" alt="Phone Icon" width={16} height={16} />
        <span className="text-[14px] sm:text-[16px] text-[#F1F1F1]">
          (12345)67890
        </span>
      </div>

      {/* Right Section */}
      <ul className="flex items-center gap-4 text-[14px] sm:text-[16px] text-[#F1F1F1]">
        <li className="flex items-center gap-1">
          English
          <Image src="/Group.png" alt="Dropdown Icon" width={16} height={16} />
        </li>
        <li className="flex items-center gap-1">
          USD
          <Image src="/Group.png" alt="Dropdown Icon" width={16} height={16} />
        </li>
        <li className="flex items-center gap-1">
          Login
          <Image src="/carbon_user.png" alt="User Icon" width={16} height={16} />
        </li>
        <li className="flex items-center gap-1">
          Wishlist
          <Image src="/uil_heart-alt.png" alt="Heart Icon" width={16} height={16} />
        </li>
        <li>
          <Image src="/crt.png" alt="Cart Icon" width={16} height={16} />
        </li>
      </ul>
    </header>
  );
}

export default Header;

