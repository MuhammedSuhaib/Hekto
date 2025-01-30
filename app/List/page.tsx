import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Product } from "../Grid/page";
async function ShopList() {
  let dataLP: Product[] = [];
  try {
    dataLP = await client.fetch(`*[_type == "product" && listProduct == true]{
        _id,
        name,
        image,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        isLeatestProduct,
        isTrendingProduct,
        stockLevel,
        category
      }`);
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shop List page" />
      <div className="flex flex-col items-center justify-center md:h-[2683px]">
        {/* list Section */}
        <div className="flex flex-col gap-8" >
          <div>
            {dataLP.map((product) => (
              <Link href={`/${product._id}`} key={product._id}>
                <div className="flex flex-col my-16 md:flex-row px-[4vh] md:px-0 hover:shadow-2xl hover:shadow-[#9950f896] rounded-lg items-center justify-center gap-8">
                  <div>
                    <img
                      src={product.image?.asset ? urlFor(product.image.asset).url() : "/placeholder.png"}
                      alt={product.name}
                      width={313.63}
                      height={217.56}
                      className="h-[267.56px] w-[313.63px] rounded-[10px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-[4vh] md:px-0">
                    <div className="flex items-center gap-5 text-2xl md:text-4xl font-semibold text-[#111C85]">
                      {product.name}
                      <Image
                        src="/Group44.png"
                        alt="circles"
                        width={42}
                        height={10}
                        className="h-[10px] w-[42px]"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-normal text-[#151875]">
                        ${product.price}
                        {product.discountPercentage > 0 && (
                          <span className="ml-1 text-sm text-[#fb2e2e] line-through">
                            $
                            {(
                              parseFloat(product.price) *
                              (1 + product.discountPercentage / 100)
                            ).toFixed(2)}
                          </span>
                        )}
                      </span>
                      <Image src="/s.png" alt="5s" width={70} height={17.25} loading="lazy" />
                    </div>
                    <p className="md:w-[591px] text-base md:text-lg font-normal text-[#9295AA]">
                      {product.description}
                    </p>
                    <Image
                      src="/G35.png"
                      alt="grp"
                      width={144.67}
                      height={34.23}
                      className="-ml-5"
                      loading="lazy"
                    />
                  </div>
                </div>
              </Link>
            ))}
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
