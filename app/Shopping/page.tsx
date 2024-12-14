import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import Image from "next/image";
function ShoppingCurtPage() {
  return (
   
    <div>
  <Header />
  <Nvbr />
  <Bredcrumb pageName="Shopping Cart" />

  <div className="container mx-auto mb-[100px] p-4">
    <div className="flex flex-col gap-8 xl:flex-row">
      {/* Left Section */}
      <div className="w-full xl:w-2/3">
        {/* Table Headings */}
        <div className="mb-4 grid grid-cols-4 text-lg font-bold text-[#1D3178]">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        {/* Product List */}
      <div className="space-y-6">
  {[...Array(5)].map((_, i) => (
    <div key={i} className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-4">
        <Image
          src={`/${i + 1}.png`} // Dynamic src
          alt={`Product ${i + 1}`}
          width={83}
          height={87}
          className="rounded-[3px]"
        />

        <div className="hidden md:block text-[#A1A8C1]">
          <p className="text-black">Ut diam consequat</p>
          <p>Color: Brown</p>
          <p>Size: XL</p>
        </div>
      </div>
      <p>$32.00</p>
      <Image src="/counter.png" alt="Counter" width={51} height={15} />
      <p>$32.00</p>
    </div>
  ))}
</div>

        {/* Buttons */}
        <div className="mt-8 flex justify-between">
          <button className="rounded bg-[#FB2E86] px-6 py-2 text-white">Update Cart</button>
          <button className="rounded bg-[#FB2E86] px-6 py-2 text-white">Clear Cart</button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/3 space-y-8">
        {/* Cart Totals */}
        <div className="rounded bg-[#F4F4FC] p-6">
          <h2 className="mb-4 text-2xl font-bold text-[#1D3178]">Cart Totals</h2>
          <div className="flex justify-between border-b pb-2">
            <p>Subtotals:</p>
            <p>£219.00</p>
          </div>
          <div className="flex justify-between border-b pb-2">
            <p>Totals:</p>
            <p>£325.00</p>
          </div>
          <p className={`${lato.className} mt-4 text-xs text-[#C1C8E1]`}>
            Shipping & taxes calculated at checkout
          </p>
          <button className="mt-4 w-full rounded bg-[#19D16F] py-2 text-white">
            Proceed To Checkout
          </button>
        </div>

        {/* Calculate Shipping */}
        <div className="rounded bg-[#F4F4FC] p-6">
          <h2 className="mb-4 text-2xl font-bold text-[#1D3178]">Calculate Shipping</h2>
          <input
            type="text"
            placeholder="Bangladesh"
            className={`mb-4 w-full border-b bg-[#F6F5FF] p-2 text-sm text-[#A1A8C1] ${lato.className} `}
          />
          <input
            type="text"
            placeholder="Mirpur Dhaka - 1200"
            className={`mb-4 w-full border-b bg-[#F6F5FF] p-2 text-sm text-[#A1A8C1] ${lato.className} `}
          />
          <input
            type="number"
            placeholder="Postal Code"
            className={`mb-4 w-full border-b bg-[#F6F5FF] p-2 text-sm text-[#A1A8C1] ${lato.className} `}
          />
          <button className="w-full rounded bg-[#FB2E86] py-2 text-white">
            Calculate Shipping
          </button>
        </div>
      </div>
    </div>
  </div>
<Mi/>

  <Footer />
</div>

  );
}

export default ShoppingCurtPage;

