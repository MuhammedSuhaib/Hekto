import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import Clock  from "@/components/Clock";

function OrderPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Order Completed" />
      <div className="flex flex-col mt-[181px] items-center justify-center md:h-[1016px]">
        <Image
          src="/ok.png"
          alt="Done"
          width={87}
          height={80}
          className="mb-[32px] hidden h-[80px] w-[87px] md:block"
        />
        <h1 className="mb-[28px] text-center text-4xl font-bold text-[#101750]">
          Your Order Is Completed!{" "}
        </h1>
        <p
          className={`${lato.className} mb-[37px] sm:w-[625px] w-[200px] p-4  text-center text-base font-semibold text-[#8D92A7]`}
        >
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        
        <button
          className={`h-[44px] ${lato.className} w-[200px] rounded-[3px] bg-[#FB2E86] font-semibold text-white lg:w-[208px]`}
        >
          Continue Shopping{" "}
        </button>

        <Clock  />
        <Image
          src="/image.png"
          alt="Partners"
          width={1246}
          height={128}
          className="hidden h-[128px] w-[1246px] md:block"
        />
        <Image
          src="/image.png"
          alt="Partners"
          width={260}
          height={60}
          className="m-4 h-[60px] w-[260px] md:hidden"
        />
      </div>

      <Footer />
      <Mi />
    </div>
  );
}

export default OrderPage;
