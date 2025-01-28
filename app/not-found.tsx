import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import Link from "next/link";

function ErrorPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="404 Not Found" />
      <div className="flex flex-col items-center justify-center md:h-[1016px]">
        <Image
          src="/Group123.png"
          alt="404 error"
          width={677}
          height={913}
          className="hidden h-[913px] w-[677px] md:block"
        />
        <Image
          src="/Group123.png"
          alt="404 error"
          width={277}
          height={300}
          className="h-[300px] w-[277px] md:hidden"
        />

        <button className="mx-auto h-[39px] w-[90%] rounded-[2px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[135px]">
        <Link href="/">Back To Home</Link>
        </button>
        <div className="m-0 md:mb-[59px] md:mt-[124px]">
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
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default ErrorPage;
