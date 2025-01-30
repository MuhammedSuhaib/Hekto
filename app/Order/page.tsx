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


// import React from "react";
// import Image from "next/image";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import Bredcrumb from "@/components/Bredcrumb";
// import { Lato } from "next/font/google";
// import Link from "next/link";

// const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

// function OrderPage() {
//   return (
//     <div className="bg-[#181818] text-white min-h-screen">
//       <Header />
//       <Navbar />
//       <Bredcrumb pageName="Order Completed" />

//       {/* Order Confirmation Section */}
//       <div className="flex flex-col items-center justify-center py-10">
//         <h1 className="text-2xl font-bold text-orange-500">Thank you for your purchase!</h1>
//         <p className="text-xl font-semibold mt-2">Rs. <span className="text-orange-400">336</span></p>
//         <p className="mt-1 text-gray-400 text-sm">Your order number is <span className="font-bold">208025491179195</span></p>
        
//         {/* Order Status Box */}
//         <div className="bg-[#222] p-6 mt-6 w-[90%] md:w-[600px] rounded-md shadow-md">
//           <p className="text-lg font-semibold text-gray-300">Please have this amount ready on delivery day.</p>
//           <p className="text-2xl font-bold text-orange-400 mt-2">Rs. 336</p>

//           <div className="flex items-center justify-between mt-6 bg-[#333] p-4 rounded-md">
//             <div>
//               <p className="text-sm text-gray-400">Estimated Delivery:</p>
//               <p className="text-lg font-semibold text-white">Feb 02 - Feb 05</p>
//             </div>
//             <button className="px-4 py-2 bg-orange-500 rounded-md text-white font-semibold transition-transform duration-200 hover:scale-105">
//               <Link href="/orders">View Order</Link>
//             </button>
//           </div>
//         </div>

//         {/* Email Confirmation Notice */}
//         <p className="text-sm text-gray-400 mt-6 text-center px-4">
//           We've sent a confirmation email to <span className="font-semibold text-white">mahmedmunir@gmail.com</span> with the details of your order.
//           Enable push notifications of your Daraz App to receive real-time updates of your order.
//         </p>

//         {/* Continue Shopping Button */}
//         <button className="mt-6 px-6 py-3 bg-orange-500 rounded-md text-white font-bold text-lg transition-transform duration-200 hover:scale-105">
//           <Link href="/shop">Continue Shopping</Link>
//         </button>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default OrderPage;
