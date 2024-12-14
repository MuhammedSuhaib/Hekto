import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function DemoPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Hekto Demo" />

      <div className="flex flex-col items-center justify-center">
        <div className="ml-[120vh] flex w-full flex-col">
          <h1 className="text-2xl font-bold text-[#1D3178]">Hekto Demo</h1>
          <p className={`${lato.className} text-xs font-normal text-[#1D3178]`}>
            Cart/ Information/ Shipping/ Payment
          </p>
        </div>

        <div className="mb-[326px] mt-[153px] flex flex-col items-center justify-center gap-[30px] md:flex-row">
          {/* General Information Section */}
          <div className="flex flex-col gap-16"></div>
          {/* Ask a Question Section */}
          <div className="flex h-[738px] w-fit border-[1px] bg-[#F8F8FD] sm:w-[566px]"></div>
        </div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default DemoPage;
