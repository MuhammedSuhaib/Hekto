import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function ContactUsPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Contact Us" />
      <div className="flex flex-col px-4 pt-[120px] xl:pl-[10vh] 2xl:pl-[375px]">
        {/* up */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-[117px]">
          {/* left */}
          <div className="lg:w-[550px]">
            <h1 className="mb-3 text-4xl font-bold text-[#151875]">
              Information About us
            </h1>
            <p
              className={`mb-16 text-base font-semibold text-[#8A8FB9] ${lato.className}`}
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
          <div className="lg:w-[550px]">
            <h1 className="mb-3 text-4xl font-bold text-[#151875]">
              Contact Way
            </h1>
            <div
              className={`mb-16 flex flex-col gap-[57px] text-base font-semibold text-[#8A8FB9] ${lato.className}`}
            >
              <div className="flex flex-col gap-[37px] lg:flex-row">
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="/blue.png"
                    width={45}
                    height={45}
                    alt="Picture of the author"
                  />
                  <div>
                    <p>Tel: 877-67-88-99</p>
                    <p>E-Mail: shop@store.com</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/pink.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />{" "}
                    <div>
                      <p>Support Forum</p>
                      <p>For over 24hr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[37px] lg:flex-row">
                <div className="flex items-center gap-[5px]">
                  <Image
                    src="/yellow.png"
                    width={45}
                    height={45}
                    alt="Picture of the author"
                  />{" "}
                  <div>
                    <p>20 Margaret st, London</p>
                    <p>Great britain, 3NM98-LK</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/green.png"
                      width={45}
                      height={45}
                      alt="Picture of the author"
                    />{" "}
                    <div>
                      <p>Free standard shipping</p>
                      <p>on all orders.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* down */}
        <div className="mt-[176px] flex flex-col gap-4 lg:flex-row">
          {/* left */}
          <div className="lg:w-[550px]">
            <h1 className="mb-3 text-4xl font-bold text-[#151875]">
              Get In Touch
            </h1>
            <p
              className={`mb-16 text-base font-semibold text-[#8A8FB9] ${lato.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices tristique amet erat vitae eget dolor los vitae
              lobortis quis bibendum quam.
            </p>
            <form
              className={`mb-[35px] w-[200px] sm:w-[445px] ${lato.className}`}
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name*"
                    className="mb-[35px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="email"
                    placeholder="Your E-mail*"
                    className="mb-[35px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[255px]"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject*"
                  className="mb-[45px] h-[50px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  placeholder="Type Your Message*"
                  rows={5}
                  className="h-[197px] w-[200px] rounded-[5px] border p-2 sm:w-[534px]"
                ></textarea>
              </div>

              <button className="mx-auto h-[41px]  w-[157px] rounded-[2px] bg-[#FB2E86] font-medium text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] lg:mx-0 lg:w-[135px]">
                Send Mail
              </button>
            </form>
          </div>
          {/* Right */}
          <div>
            <Image src="/Group124.png" width={723} height={692} alt="Picture" />
          </div>
        </div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default ContactUsPage;
