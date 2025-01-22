import Bredcrumb from "@/components/Bredcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: "Chair" | "Sofa"; 
}

interface Params {
  params: {
    id: string;
  };
}

async function page({ params }: Params) {
  const resp: Product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
        name,
        image,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
    }`,
    { id: params.id },
  );

  const similarProducts: Product[] = await client.fetch(
    `*[_type == "product" && category == $category && _id != $id]{
        _id,
        name,
        image,
        price,
        discountPercentage
    }`,
    { category: resp.category, id: params.id },
  );

  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Product details" />
      <div className="container mx-auto my-12 px-4">
        {/* Product Section */}
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left: Product Image */}
          <div className="flex-1">
            <img
              src={resp.image ? urlFor(resp.image).url() : "/placeholder.png"}
              alt={resp.name}
              className="size-[325px] rounded-lg object-cover shadow-md"
            />
          </div>

          {/* mid: Product Details */}
          <div className="flex-1">
            <h1 className="mb-4 text-2xl font-bold text-gray-800">
              {resp.name}
            </h1>
            <p className="mb-2 text-xl text-gray-700">
              Price:{" "}
              <span className="font-bold text-[#FB2E86]">
                ${parseFloat(resp.price).toFixed(2)}
              </span>
            </p>
            {resp.discountPercentage > 0 && (
              <p className="text-md text-gray-600 line-through">
                Original Price: $
                {(
                  parseFloat(resp.price) *
                  (1 + resp.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            )}
            <p className="mb-4 text-sm text-green-600">
              Discount: {resp.discountPercentage}% off
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Stock:</span> {resp.stockLevel}
            </p>
            <p className="text-gray-700">
              <span className="font-bold">Category:</span> {resp.category}
            </p>
            <p className="mt-4 text-gray-600">{resp.description}</p>
            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button className="mx-auto flex h-[39px] w-full rounded-lg bg-[#FB2E86] px-6 py-2 font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#e02121] focus:outline-none focus:ring-2 focus:ring-[#e033e0] lg:mx-0 lg:w-[135px]">
                Add to
                <Image
                  width={20}
                  height={20}
                  src="/crt.png"
                  alt="Wishlist"
                  className="h-5 w-5"
                />
              </button>

              <button className=" bg-gray-200 rounded-lg  flex px-6  mx-auto h-[39px] w-full   font-medium  duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e033e0] lg:mx-0 lg:w-[135px]  py-2 text-gray-800 transition hover:bg-gray-300">
                Buy Now
              </button>
            </div>
          </div>
          {/* Right:  Buttons */}
          <div className="flex flex-1 flex-row items-center gap-4 md:flex-col">
            <button className="flex items-center gap-2 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]">
              Add to
              <Image
                width={20}
                height={20}
                src="/uil_heart-alt.png"
                alt="Wishlist"
                className="h-5 w-5"
              />
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]">
              <Image
                width={20}
                height={20}
                src="/share.png"
                alt="Wishlist"
                className="h-5 w-5"
              />
              share
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-12 rounded-lg bg-gray-100 p-4">
          <h2 className="mb-4 text-xl font-bold text-gray-800">
            Product Details
          </h2>
          <p className="text-gray-700">{resp.description}</p>
        </div>

        {/* Similar Products Section */}
        <div className="mt-12">
  <h2 className="mb-6 text-xl font-bold text-gray-800">Similar Products</h2>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {similarProducts.slice(0, 4).map((product) => (
      <div
        key={product._id}
        className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md transition hover:shadow-xl"
      >
        <img
          src={
            product.image
              ? urlFor(product.image).url()
              : "/placeholder.png"
          }
          alt={product.name}
          className="h-48 w-full rounded-t-lg object-cover"
        />
        <h3 className="mt-4 text-lg font-bold text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-700">
          Price: ${parseFloat(product.price).toFixed(2)}
        </p>
        {product.discountPercentage > 0 && (
          <p className="text-sm text-gray-500 line-through">
            $
            {(
              parseFloat(product.price) *
              (1 + product.discountPercentage / 100)
            ).toFixed(2)}
          </p>
        )}
        
        <Link
          href={`/${product._id}`}
          className="mt-4 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
</div>

      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default page;
