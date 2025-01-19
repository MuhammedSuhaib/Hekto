import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
function Mi() {
  return (
    <div className="hidden bg-[#EEEFFB] text-[#8A8FB9] md:block xl:w-[1536px] 2xl:w-full">
      <footer className="w-screen text-base font-normal text-[#8A8FB9]">
        {/* Main Footer Content */}
        <div className="flex w-full flex-col px-6 py-10 sm:flex-row sm:px-16 xl:ml-[10.04vh]">
          <div className="mx-auto mr-[446px] mt-[94px] flex max-w-full gap-12 sm:grid-cols-4">
            {/* Hekto Section */}
            <div>
              <h2 className="mb-4 text-[38px] font-bold text-black">           <Link href="/" >Hekto</Link>
              </h2>
              <div className="mt-4 flex w-[300px] items-center justify-end gap-4 rounded-[3px] bg-white lg:h-[44px] lg:w-[377px]">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className={`${lato.className} px-4`}
                />

                <button
                  className={`h-[39px] w-[70px] rounded-[3px] bg-[#FB2E86] font-medium text-white lg:w-[135px] ${roboto.className} `}
                >
                  Sign Up
                </button>
              </div>
              <p className={` ${lato.className} mt-[25px]`}>Contact Info</p>
              <p className={`flex w-[200px] lg:w-[400px] ${lato.className}`}>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black">
                Categories
              </h5>
              <ul
                className={`flex flex-col ${lato.className} gap-6 lg:whitespace-nowrap`}
              >
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black lg:whitespace-nowrap">
                Customer Care
              </h5>
              <ul
                className={`flex flex-col ${lato.className} gap-6 lg:whitespace-nowrap`}
              >
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li className="hidden xl:block">Orders History</li>
                <li className="xl:hidden">History</li>
                <li className="hidden xl:block">Order Tracking</li>
                <li className="xl:hidden">Tracking</li>
              </ul>
            </div>

            {/* Pages Section */}
            <div>
              <h5 className="mb-10 w-full text-[22px] text-black">Pages</h5>
              <ul
                className={`flex flex-col ${lato.className} gap-6 lg:whitespace-nowrap`}
              >
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li className="hidden xl:block">Pre-Built Pages</li>
                <li className="xl:hidden">Pages</li>
                <li className="hidden xl:block">Visual Composer Elements</li>
                <li className="xl:hidden">Elements</li>
                <li className="hidden xl:block">WooCommerce Pages</li>
                <li className="xl:hidden">WooComm Pgs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Bottom Section */}
      <div className="flex h-[53px] w-full items-center justify-between bg-[#E7E4F8] px-4 md:px-8">
        <div className="flex w-full items-center">
          {/* Text Section */}
          <span
            className={`font-semibold ${lato.className} ml-[20%] text-left`}
          >
            © Webecy - All Rights Reserved
          </span>

          {/* Social Media Icons Section */}
          <div>
            <Image
              src="/Group205.png"
              alt="Social Media Icons"
              width={100}
              height={100}
              className="ml-[500%] w-[50px] md:w-[60px] lg:w-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mi;
