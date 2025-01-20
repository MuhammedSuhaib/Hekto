import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import Image from "next/image";
import Link from "next/link";
function DemoPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Hekto Demo" />

      <div className="mb-[1000px] flex items-center justify-center p-4 xl:mb-0">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* Left Form Section */}
          <div className="lg:[770px] w-full md:w-[500px] xl:mb-[326px]">
            <div className="px-[50px] md:px-0">
              <h2 className="mb-4 mt-[74px] text-2xl font-bold text-[#1D3178]">
                Hekto Demo
              </h2>
              <p
                className={`mb-6 text-xs font-normal text-[#1D3178] ${lato.className}`}
              >
                Cart / Information / Shipping / Payment
              </p>
            </div>
            <form>
              <div className="bg-[#F6F5FF] px-[30px] py-16">
                {/* Contact Information */}
                <>
                  <div className="flex flex-col justify-between px-[30px] sm:px-0 md:flex-row">
                    <h3 className="text-lg font-bold text-[#1D3178]">
                      Contact Information
                    </h3>
                    <p
                      className={`text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                    >
                      Already have an account? Log in
                    </p>
                  </div>

                  <input
                    type="email"
                    placeholder="Email or mobile phone number"
                    className={`mt-10 w-full border-b-[2px] bg-[#F6F5FF] p-1 px-[30px] text-sm font-medium text-[#C1C8E1] sm:px-0 ${lato.className}`}
                  />

                  <div className="mb-[109px] mt-[32px] flex items-center gap-2 px-[30px] sm:px-0">
                    <input
                      type="checkbox"
                      id="updates"
                      className="size-2 rounded-[1px]"
                    />
                    <label
                      htmlFor="updates"
                      className={`w-full bg-[#F6F5FF] p-1 text-xs font-medium text-[#C1C8E1] ${lato.className}`}
                    >
                      Keep me up to date on news and excluive offers{" "}
                    </label>
                  </div>
                </>
                {/* Shipping Address */}

                <div className="mb-[117px] flex flex-col gap-10 px-[30px] sm:px-0">
                  <h3 className="text-lg font-bold text-[#1D3178]">
                    Shipping address
                  </h3>
                  <div className="flex gap-[30px]">
                    <input
                      type="text"
                      placeholder="First name"
                      className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                    />
                    <input
                      type="text"
                      placeholder="Last name (optional)"
                      className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Address"
                    className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                  />
                  <input
                    type="text"
                    placeholder="Appaetnentment,suit,e.t.c (optinal)"
                    className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                  />
                  <div className="flex gap-[30px]">
                    <input
                      type="text"
                      placeholder="Bangladesh"
                      className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                    />
                    <input
                      type="number"
                      placeholder="Postal Code"
                      className={`w-full border-b-[2px] bg-[#F6F5FF] p-1 text-sm font-medium text-[#C1C8E1] ${lato.className}`}
                    />
                  </div>
                </div>
                {/* Continue Shipping */}

                <div className="px-[30px] sm:px-0">
                  {" "}
                  <button
                    className={`h-[39px] w-full rounded-[3px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[182px]`}
                  >
                    <Link href="/Grid">Continue Shipping</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Summary Section */}
          <div className="flex w-[400px] px-12 lg:mt-[149px] lg:px-0">
            <div className="flex h-[102px] w-[369px] flex-col gap-[14px]">
              <div className="flex justify-between gap-4 border-b-[2px] border-[#E1E1E4] pb-4 shadow-sm">
                <Image
                  src="/(3).png"
                  alt="Bag"
                  width={83}
                  height={87}
                  className="rounded-[3px]"
                />
                <div className="flex flex-col gap-2 text-[#A1A8C1]">
                  <p className="text-black">Ut diam consequat</p>
                  <p>Color:Brown</p>
                  <p>Size:XL</p>
                </div>
                <p className="text-[#15245E]">$32.00</p>
              </div>
              <div className="flex justify-between gap-4 border-b-[2px] border-[#E1E1E4] pb-4 shadow-sm">
                <Image
                  src="/(7).png"
                  alt="Bag"
                  width={83}
                  height={87}
                  className="rounded-[3px]"
                />
                <div className="flex flex-col gap-2 text-[#A1A8C1]">
                  <p className="text-black">Ut diam consequat</p>
                  <p>Color:Brown</p>
                  <p>Size:XL</p>
                </div>
                <p className="text-[#15245E]">$32.00</p>
              </div>
              <div className="flex justify-between gap-4 border-b-[2px] border-[#E1E1E4] pb-4 shadow-sm">
                <Image
                  src="/(6).png"
                  alt="Bag"
                  width={83}
                  height={87}
                  className="rounded-[3px]"
                />
                <div className="flex flex-col gap-2 text-[#A1A8C1]">
                  <p className="text-black">Ut diam consequat</p>
                  <p>Color:Brown</p>
                  <p>Size:XL</p>
                </div>
                <p className="text-[#15245E]">$32.00</p>
              </div>
              <div className="flex justify-between gap-4 border-b-[2px] border-[#E1E1E4] pb-4 shadow-sm">
                <Image
                  src="/(5).png"
                  alt="Bag"
                  width={83}
                  height={87}
                  className="rounded-[3px]"
                />
                <div className="flex flex-col gap-2 text-[#A1A8C1]">
                  <p className="text-black">Ut diam consequat</p>
                  <p>Color:Brown</p>
                  <p>Size:XL</p>
                </div>
                <p className="text-[#15245E]">$32.00</p>
              </div>
              <div className="flex justify-between gap-4 border-b-[2px] border-[#E1E1E4] pb-4 shadow-sm">
                <Image
                  src="/(4).png"
                  alt="Bag"
                  width={83}
                  height={87}
                  className="rounded-[3px]"
                />
                <div className="flex flex-col gap-2 text-[#A1A8C1]">
                  <p className="text-black">Ut diam consequat</p>
                  <p>Color:Brown</p>
                  <p>Size:XL</p>
                </div>
                <p className="text-[#15245E]">$32.00</p>
              </div>
              {/* Totals */}
              <div className="flex flex-col bg-[#F4F4FC] p-[30px] text-base font-medium text-[#15245E]">
                <div className="flex justify-between border-b-[2px] p-3">
                  <p>Subtotals:</p> <p>£219.00</p>
                </div>
                <div className="flex justify-between border-b-[2px] p-3">
                  <p>Totals:</p>
                  <p>£325.00</p>
                </div>
                <div className="flex items-center gap-2 p-3">
                  <input
                    type="checkbox"
                    id="updates"
                    className="size-2 rounded-[1px]"
                  />
                  <label
                    htmlFor="updates"
                    className={`w-ful p-1 text-xs font-medium text-[#C1C8E1] ${lato.className}`}
                  >
                    Shipping & taxes calculated at checkout
                  </label>
                </div>
                <button
                  className={`mt-[35px] h-[39px] w-full rounded-[3px] bg-[#19D16F] font-bold text-white lg:w-[312px] ${lato.className} transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] `}>
                  Proceed To Checkout{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Mi />
    </div>
  );
}

export default DemoPage;
