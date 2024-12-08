import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function Footer() {
  return (
    <div className="sm:hidden block w-full bg-[#EEEFFB]">
      {" "}
      {/* Wrapper with full width */}
      <footer className="text-base font-normal text-[#8A8FB9]">
        {/* Main Footer Content */}
        <div className="w-full px-6 py-10 sm:px-16">
          <div className="mx-auto mt-[94px] flex flex-col gap-12 sm:mx-0 sm:grid-cols-4 sm:flex-row">
            {/* Hekto Section */}
            <div>
              <h2 className="mb-4 text-[38px] font-bold text-black">Hekto</h2>
              <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className={`h-[44px] w-full rounded-[3px] border ${lato.className} border-black px-4 focus:outline-none sm:w-[265px]`}
                />
                <button
                  className={`h-[44px] w-[135px] rounded-[3px] bg-[#FB2E86] font-medium text-white ${roboto.className} `}
                >
                  Sign Up
                </button>
              </div>
              <p className={` ${lato.className} mt-[25px]`}>Contact Info</p>
              <p className={` ${lato.className}`}>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black">
                Categories
              </h5>
              <ul className={`flex flex-col ${lato.className} gap-6`}>
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black">
                Customer Care
              </h5>
              <ul className={`flex flex-col ${lato.className} gap-6`}>
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>

            {/* Pages Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black">Pages</h5>
              <ul className={`flex flex-col ${lato.className} gap-6`}>
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        {/* <div className="flex h-[53px] w-full items-center justify-between bg-[#E7E4F8] pl-[377px] sm:pl-[100px]">
          <div className="flex items-center">
            <span className={`w-[260px] font-semibold ${lato.className}`}>
              © Webecy - All Rights Reserved
            </span>
            <div>
              <Image
                src="/Group205.png"
                alt="Social Media Icons"
                width={100}
                height={100}
                className="size-50 ml-[660px] sm:ml-[150px]"
              />
            </div>
          </div>
        </div> */}
        <div className="flex h-[53px] w-full items-center justify-between bg-[#E7E4F8] pl-0 sm:pl-[100px] md:pl-[150px] lg:pl-[200px]">
          <div className="flex flex-col items-center sm:flex-row">
            <span
              className={`w-[260px] text-center font-semibold sm:text-start ${lato.className}`}
            >
              © Webecy - All Rights Reserved
            </span>
            <div className="mt-2 sm:mt-0">
              <Image
                src="/Group205.png"
                alt="Social Media Icons"
                width={100}
                height={100}
                className="size-50 sm:ml-[150px] md:ml-[200px] lg:ml-[250px]"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
