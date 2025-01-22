import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
interface Product {
  _id: string;
  name: string;
  image: { asset: { url: string } };
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  isLeatestProduct: boolean;
  isTrendingProduct: boolean;
  listProduct: boolean;
  stockLevel: number;
  category: "Chair" | "Sofa";
}
async function page() {
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
  return <div>

    <h1 className="text-4xl font-bold text-[#111C85] flex justify-center items-center">
      Testing page
    </h1>
    <div className="flex flex-col gap-8" >
      {dataLP.map((product) => (
        <div key={product._id} className="flex flex-col md:flex-row px-[4vh] md:px-0 items-center justify-center gap-8">
          <div>
            <img
              src={urlFor(product.image.asset).url()}
              alt={product.name}
              width={313.63}
              height={217.56}
            />
          </div>
          <div className="px-[4vh] md:px-0">
            <div className="flex items-center gap-5 text-[19px] font-semibold text-[#111C85]">
              {product.name}
              <img
                src="/Group44.png"
                alt="circles"
                width={42}
                height={10}
                className="h-[10px] w-[42px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-normal text-[#151875]">
                ${product.price}
                {product.discountPercentage > 0 && (
                  <span className="ml-1 text-xs text-[#fb2e2e] line-through">
                    $
                    {(
                      parseFloat(product.price) *
                      (1 + product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                )}
              </span>{" "}
              <img src="/s.png" alt="5s" width={70} height={17.25} />
            </div>
            <p
              className="md:w-[591px] text-base font-normal text-[#9295AA]"
            >
              {product.description}
            </p>
            <img
              src="/G35.png"
              alt="grp"
              width={144.67}
              height={34.23}
              className="-ml-5"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
    ;
}

export default page;
