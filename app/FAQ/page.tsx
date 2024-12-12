import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Nvbr";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

import Image from "next/image";
function FAQ_Page() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="FAQ" />
      <div className="flex  flex-col items-center justify-center">
        <div className="mb-[92px] mt-[123px] flex flex-col md:flex-row justify-center gap-[106px]">
          {/* General Information Section */}
          <div className="flex flex-col gap-16">
            <h2 className="mb-6 text-2xl font-bold text-blue-900">
              General Information
            </h2>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-[15px]">
                <p className="w-[395px] text-[17px] font-semibold text-[#1D3178]">
                  Eu dictumst cum at sed euismood condimentum?
                </p>

                <p className="h-[45px] w-[499px] text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="w-[395px] text-[17px] font-semibold text-[#1D3178]">
                  Magna bibendum est fermentum eros.{" "}
                </p>

                <p className="h-[45px] w-[499px] text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="w-[395px] text-[17px] font-semibold text-[#1D3178]">
                  Odio muskana hak eris conseekin sceleton?{" "}
                </p>

                <p className="h-[45px] w-[499px] text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div className="flex flex-col gap-[15px]">
                <p className="w-[395px] text-[17px] font-semibold text-[#1D3178]">
                  Elit id blandit sabara boi velit gua mara?{" "}
                </p>

                <p className="h-[45px] w-[499px] text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
            </div>
          </div>
          {/* Ask a Question Section */}
          <div className="h-[738px] w-full md:w-[566px] border-[1px] bg-[#F8F8FD]">
            <div className="ml-[42px] mr-[75px] mt-[66px] flex-col items-center justify-center">
              <h2 className="mb-[114px] text-2xl font-bold text-[#1D3178]">
                Ask a Question
              </h2>
              <form
                className={`mb-[35px] ml-[2px] md:w-[445px] ${lato.className} `}
              >
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name*"
                    className="mb-[35px] h-[50px] w-[445px] rounded-[5px] border p-2"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject*"
                    className="mb-[45px] h-[50px] w-[445px] rounded-[5px] border p-2"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    placeholder="Type Your Message*"
                    rows={5}
                    className="h-[197px] w-[445px] rounded-[5px] border p-2"
                  ></textarea>
                </div>
              </form>
              <button
                type="submit"
                className="mb-[62px] mt-[41px] h-[48px] w-[156px] rounded-[3px] bg-[#FB2E86] px-10 py-2 text-base font-medium text-white"
              >
                Send Mail
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/image.png"
            alt="Partners"
            width={1246}
            height={128}
            className="mb-[90px] hidden h-[128px] w-[1246px] md:block"
          />
          <Image
            src="/image.png"
            alt="Partners"
            width={260}
            height={60}
            className="m-4 mb-[90px] h-[60px] w-[260px] md:hidden"
          />
        </div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default FAQ_Page;
