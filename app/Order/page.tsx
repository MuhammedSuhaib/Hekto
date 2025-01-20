import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import Link from "next/link";

function OrderPage() {
return (
<div>
<Header />
<Nvbr />
<Bredcrumb pageName="Order Completed" />
<div className="flex flex-col items-center justify-center md:h-[1016px]">
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
className={`${lato.className} mb-[37px] w-[200px] p-4 text-center text-base font-semibold text-[#8D92A7] sm:w-[625px]`}
>
Thank you for your order! Your order is being processed and will be
completed within 3-6 hours. You will receive an email confirmation
when your order is completed.
</p>
<button 
className={`h-[44px] ${lato.className} w-[200px] rounded-[3px] bg-[#FB2E86] font-semibold text-white lg:w-[208px] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0] `} 
> 
<Link href="/Grid">Continue Shopping </Link> 
</button> 

<Image 
src="/image.png" 
alt="Partners" 
width={1246} 
height={128} 
className="hidden h-[128px] mt-9 w-[1246px] md:block" 
/> 
<Image 
src="/image.png" 
alt="Partners" 
width={260} 
height={60} 
className="m-4 h-[60px] w-[260px] mt-9 md:hidden" 
/> 
</div> 
<Footer />
<Mi />
</div>
);
}

export default OrderPage;
