import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function ShopList() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shop List page" />
      <div className="flex flex-col items-center justify-center md:h-[2683px]">
        {/* Top Section */}
        <div className="mb-[144px] mt-[124px] flex flex-col justify-between p-4 md:flex-row md:items-center md:gap-[180px]">
          {/* Left Section */}
          <div className="w-[300px] pl-9 text-center text-[22px] md:w-full md:p-0 md:text-left">
            <h2 className="font-bold text-[#151875]">
              Ecommerce Accessories & Fashion items
            </h2>
            <p
              className={`text-xs font-normal text-[#8A8FB9] ${lato.className}`}
            >
              About 9,620 results (0.62 seconds)
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Per Page */}
            <div className="flex items-center gap-2">
              <label
                className={`text-base font-normal text-[#3F509E] ${lato.className}`}
              >
                Per Page:
              </label>
              <input
                type="number"
                className="w-[55px] border border-[#E7E6EF] p-1 text-center text-sm"
              />
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <label
                className={`text-xs font-normal text-[#3F509E] md:text-base ${lato.className}`}
              >
                Sort By:
              </label>
              <select
                className={`h-7 w-[96px] border border-[#E7E6EF] text-xs font-normal text-[#8A8FB9] ${lato.className}`}
              >
                <option>Best Match</option>
                <option>Newest</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>

            {/* View Options */}
            <div className="hidden items-center gap-2 sm:flex">
              <label
                className={`text-base font-normal text-[#3F509E] ${lato.className}`}
              >
                View:
              </label>
              <Image src="/grid.png" alt="grid" width={16} height={16} />
              <Image src="/list.png" alt="list" width={16} height={16} />
            </div>
          </div>
        </div>

        {/* list Section */}

        <div className="flex flex-col gap-8" >
          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
                Accumsan tincidunt{" "}
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li2.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              In nulla                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li3.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              Vel sem                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li4.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              Porttitor cum                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li5.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              Nunc in                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li6.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              Vitae facilisis                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
            <div>
              <Image
                src="/li7.png"
                alt="Partners"
                width={313.63}
                height={217.56}
              />
            </div>
            <div className="px-[4vh] md:px-0" >
              <div className="flex items-center  gap-5 text-[19px] font-semibold text-[#111C85]">
              Curabitur lectus                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                  className="h-[10px] w-[42px]"
                />{" "}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="text-base font-normal text-[#FF2AAA] line-through">
                    $52.00
                  </s>
                </span>{" "}
                <Image src="/s.png" alt="5s" width={70} height={17.25} />
              </div>
              <p
                className={`${lato.className} md:w-[591px] text-base md:flex-nowrap flex-wrap font-normal text-[#9295AA]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <Image
                src="/G35.png"
                alt="grp"
                width={144.67}
                height={34.23}
                className="-ml-5"
              />
            </div>
          </div>

          </div>
        

        {/* Bottom Section */}
        <div className="my-[83px] hidden md:block">
          <Image src="/image.png" alt="Partners" width={1246} height={128} />
        </div>
        <div className="my-[83px] md:hidden">
          <Image
            src="/image.png"
            alt="Partners"
            width={260}
            height={60}
            className="m-4 h-[60px] w-[260px]"
          />
        </div>
      </div>

      <Footer />
      <Mi />
    </div>
  );
}

export default ShopList;
