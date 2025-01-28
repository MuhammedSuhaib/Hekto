import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
export interface Product {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: "Chair" | "Sofa" | null | string;
}
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
async function Shop_Grid_page() {
  const data: Product[] = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      image,
      price,
      description,
      discountPercentage,
      isFeaturedProduct,
      stockLevel,
      category
    }`);
    
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shop Grid page" />
      <div className="flex flex-col items-center justify-center md:h-[1822px]">
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
        <div className="flex flex-col items-center justify-center">
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
            {data.slice(0, 12).map((product) => (
              <Link
                href={`/${product._id}`}
                key={product._id}
                className="flex w-[270px] flex-col items-center p-4 transition duration-300 ease-in-out hover:shadow-xl hover:bg-[#51d0f715]"
              >
                {/* Card Header with Image */}
                <div className="flex items-center justify-center ">
                  <img
                    src={
                      product.image && product.image.asset
                        ? urlFor(product.image.asset).url()
                        : "/placeholder.png"
                    }
                    alt={product.name}
                    width={201}
                    height={201}
                    loading="lazy"
                    className="h-56 w-full rounded-t-lg object-cover"
                  />
                </div>
                <span className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                  {product.name}
                </span>
                <Image
                  src="/Group44.png"
                  alt="circles"
                  width={42}
                  height={10}
                />
                <div className="mt-2 flex items-center">
                  <span className="text-lg font-bold text-[#151875]">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="ml-2 text-sm text-[#FB2E86] line-through">
                      $
                      {(
                        parseFloat(product.price) *
                        (1 + product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

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
