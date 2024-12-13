import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function Page() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Contact Us" />
      <div className="flex flex-col lg:px-[375px] lg:pt-[120px]">
        {/* up */}
        <div className="flex gap-[117px]">
          {/* left */}
          <div>
            <h1 className="mb-3 text-4xl font-bold text-[#151875]">
              {" "}
              Information About us
            </h1>
            <p
              className={`mb-16 text-base font-semibold text-[#8A8FB9] ${lato.className} w-[550px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <Image
              src="/Group94.png"
              width={103}
              height={25}
              alt="Picture of the author"
            />
          </div>
          {/* Right */}
          <div>
            <h1 className="mb-3 text-4xl font-bold text-[#151875]">
              Contact Way
            </h1>
            <div
              className={`mb-16 text-base font-semibold flex flex-col gap-[57px] text-[#8A8FB9] ${lato.className} w-[550px]`}
            >
              <div className="flex gap-[37px]">
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="/44.png"
                    width={45}
                    height={45}
                    alt="Picture of the author"
                  />
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/44.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />
                    <div>
                      <p>Tel: 877-67-88-99</p>
                      <p>E-Mail: shop@store.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[37px]">
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="/44.png"
                    width={45}
                    height={45}
                    alt="Picture of the author"
                  />
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex ">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/44.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />
                    <div>
                      <p>Tel: 877-67-88-99</p>
                      <p>E-Mail: shop@store.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* down */}
        <div></div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default Page;
