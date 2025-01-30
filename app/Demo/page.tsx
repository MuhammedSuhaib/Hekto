"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { Product } from "@/app/Grid/page";
import { Lato } from "next/font/google";
import { useRouter } from "next/navigation"; // ✅ Import useRouter

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function CheckoutPage() {
  const router = useRouter(); // ✅ Initialize useRouter

  const [checkoutItems, setCheckoutItems] = useState<Product[]>([]);

  // ✅ Retrieve products from localStorage when page loads
  useEffect(() => {
    const storedItems = localStorage.getItem("checkoutItems");
    if (storedItems) {
      setCheckoutItems(JSON.parse(storedItems));
    }
  }, []);

  // ✅ Handle Form Submission
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    Swal.fire({
      title: "Order Placed!",
      text: "Your order has been placed successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    router.push("/Order"); // ✅ Navigate to checkout page

    localStorage.removeItem("checkoutItems"); // ✅ Clear after purchase
  };

  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Checkout" />

      <div className="flex flex-col xl:flex-row items-start justify-center gap-10 p-6">
        {/* Left Side: Checkout Form */}
        <div className="w-full md:w-[500px] bg-[#F6F5FF] p-6 rounded-lg shadow font">
          <h3 className={`text-lg ${lato.className} font-bold text-[#1D3178] mb-4`}>Shipping Information</h3>
          <form onSubmit={handleCheckout} className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full border p-2 text-sm bg-white rounded-md" />
            <input type="email" placeholder="Email" required className="w-full border p-2 text-sm bg-white rounded-md" />
            <input type="text" placeholder="Address" required className="w-full border p-2 text-sm bg-white rounded-md" />
            <input type="text" placeholder="City" required className="w-full border p-2 text-sm bg-white rounded-md" />
            <input type="text" placeholder="Postal Code" required className="w-full border p-2 text-sm bg-white rounded-md" />
            <select className="w-full border p-2 text-sm bg-white rounded-md">
              <option value="easypaisa">EasyPaisa (In Development)</option>
              <option value="jazzcash">JazzCash (In Development)</option>
              <option value="cashondelivery">Cash on Delivery</option>
            </select>
            <button type="submit" className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#E02D82] transition">
              Confirm Order
            </button>
          </form>
        </div>

        {/* Right Side: Product Summary */}
        <div className="w-full md:w-[400px] bg-[#F4F4FC] p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#1D3178]">Order Summary</h2>

          {checkoutItems.length > 0 ? (
            checkoutItems.map((item) => (
              <div key={item._id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image ? urlFor(item.image).url() : "/placeholder.png"}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-md text-gray-500">Category: {item.category}</p>
                    <p className="text-lg font-bold text-[#FB2E86]">${parseFloat(item.price).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No product selected.</p>
          )}

          <div className="mt-4 text-xl font-bold text-[#1D3178]">
            Total: $
            {checkoutItems
              .reduce((sum, item) => sum + parseFloat(item.price), 0)
              .toFixed(2)}
          </div>
        </div>
      </div>

      <Footer />
      <Mi />
    </div>
  );
}
