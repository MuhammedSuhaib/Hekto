// import React from "react";
// import Image from "next/image";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Mi from "@/components/Mi";
// import Nvbr from "@/components/Navbar";
// import Bredcrumb from "@/components/Bredcrumb";

// function AccountPage() {
//   return (
//     <div>
//       <Header />
//       <Nvbr />
//       <Bredcrumb pageName="My Account" />
//       <div className="flex flex-col items-center justify-center md:h-[905px]">
//  <div>
import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function AccountPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="My Account" />
      <div className="flex flex-col items-center justify-center md:h-[905px] p-4">
        <div className="mb-[109px] w-full flex flex-col items-center justify-center bg-white p-6 shadow-md md:w-[544px]">
          <h2 className="mb-6 text-center text-[32px] font-bold">Login</h2>
          <p
            className={`${lato.className} mb-[37px] text-center text-[17px] font-normal text-[#9096B2]`}
          >
            Please login using account detail bellow.
          </p>
          <form className="flex flex-col items-center justify-center" >
            <div>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Email Address"
                  className="mb-[23px] h-[52px] w-[200px] border p-4 md:w-[432px]"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Password"
                  className="mb-[13px] h-[52px] w-[200px] border p-4 md:w-[432px]"
                />
              </div>
            </div>
            <p
              className={`${lato.className} mb-[27px] text-[17px] font-normal text-[#9096B2]`}
            >
              Forgot your password?
            </p>
          </form>

          <button
            type="submit"
            className={`mb-[28px] mt-[23px] h-[52px] rounded-[3px] bg-[#FB2E86] px-10 py-2 text-[17px] font-normal text-white md:w-[445px] ${lato.className} `}
          >
            Sign In
          </button>

          <p
            className={`${lato.className} mb-[37px] text-center text-[17px] font-normal text-[#9096B2]`}
          >
            Don't have an Account?Create account
          </p>
        </div>
        <Image
          src="/image.png"
          alt="Partners"
          width={1246}
          height={128}
          className="hidden h-[128px] w-[1246px] md:block"
        />
        <Image
          src="/image.png"
          alt="Partners"
          width={260}
          height={60}
          className="m-4 h-[60px] w-[260px] md:hidden"
        />
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default AccountPage;
