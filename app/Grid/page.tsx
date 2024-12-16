import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function Shop_Grid_page() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shop Grid page" />
      <div className="flex flex-col items-center justify-center  md:h-[1822px]">
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

        {/* Grid Section */}

        <>
          <div className="flex  md:flex-col">
            <div className="flex flex-col md:flex-row">
              {/* Product 1 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product1.png"
                    alt="Product 1"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Vel elit euismod
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
                <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 2 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#EBF4F3]">
                  <Image
                    src="/Product2.png"
                    alt="Product 2"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Ultricies condimentum imperdiet{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
              <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 3 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product3.png"
                    alt="Product 3"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Vitae suspendisse sed{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 4 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product4.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Sed at fermentum{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>
            </div>
            <div className="hidden md:flex">
              {/* Product 5 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product5.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Fusce pellentesque at{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
              <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 6 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product6.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Vestibulum magna laoreet{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
              <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 7 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product7.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Sollicitudin amet orci{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 8 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product8.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Ultrices mauris sit{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>
            </div>
            <div className="hidden md:flex">
              {/* Product 9 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product9.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Pellentesque condimentum ac{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 10 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product10.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Cras scelerisque velit{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
              <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 11 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product11.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Lectus vulputate faucibus{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
                <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 12 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product4.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Purus risus, ut{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>
            </div>
          </div>
          <>
            <div className="flex flex-col md:hidden">
              {/* Product 5 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product5.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Fusce pellentesque at{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
               <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 6 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product6.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Vestibulum magna laoreet{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 7 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product7.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Sollicitudin amet orci{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 8 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product8.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Ultrices mauris sit{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:hidden">
              {/* Product 9 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product9.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Pellentesque condimentum ac{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 10 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product10.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Cras scelerisque velit{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 11 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product11.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Lectus vulputate faucibus{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>

              {/* Product 12 */}
              <div className="flex h-[363px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Product4.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  Purus risus, ut{" "}
                </p>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
             <p className="mt-[15px] text-sm font-semibold text-[#151875]">
                  $26.00{" "}
                  <s className="ml-[10px] text-sm font-semibold text-[#FB2E86] line-through">
                    $42.00
                  </s>
                </p>
              </div>
            </div>
          </>
        </>

        {/* Bottom Section */}
        <div className="my-[83px] hidden md:block">
          <Image
            src="/image.png"
            alt="Partners"
            width={1246}
            height={128}
            className="h-[128px] w-full"
          />
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

export default Shop_Grid_page;
