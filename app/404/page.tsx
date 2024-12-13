import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";

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
        <button
          className={`h-[44px] rounded-[3px] bg-[#FB2E86] font-medium text-white lg:w-[165px]`}
        >
          Back To Home
        </button>
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

export default ErrorPage;
