"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export interface CartProduct {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
  quantity: number;
}

function ShoppingCurtPage() {
  const router = useRouter(); // ✅ Initialize useRouter
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  // Handle Proceed to Checkout
  const handleProceedNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add items before proceeding.");
      return;
    }

    localStorage.setItem("checkoutItems", JSON.stringify(cartItems)); // ✅ Save cart data
    router.push("/Demo"); // ✅ Navigate to checkout page
  };

  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shopping Cart" />

      <div className="container mx-auto mb-[100px] p-4">
        <div className="flex flex-col gap-8 xl:flex-row">
          {/* Left Section */}
          <div className="w-full xl:w-2/3">
            <div className="mb-4 flex justify-around items-center text-lg font-bold text-[#1D3178]">
              <p>Product</p>
              <p>Price</p>
              <p>Total</p>
            </div>

            {/* Product List */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4 ">
                    <Link href={`/${item._id}`} className="flex items-center gap-4">
                      <img
                        src={item.image?.asset ? urlFor(item.image.asset).url() : "/placeholder.png"}
                        alt={item.name}
                        width={83}
                        height={87}
                        className="rounded-[3px]"
                        loading="lazy"
                      />
                      <div className="hidden md:block text-[#A1A8C1]">
                        <p className="text-black">{item.name}</p>
                      </div>
                    </Link>
                  </div>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                  <p>${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-1/3 space-y-8">
            <div className="rounded bg-[#F4F4FC] p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#1D3178]">Cart Totals</h2>
              <div className="flex justify-between border-b pb-2">
                <p>Subtotals:</p>
                <p>${cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2)}</p>
              </div>
              <p className={`${lato.className} mt-4 text-xs text-[#C1C8E1]`}>
                Shipping & taxes calculated at checkout
              </p>
              <button onClick={handleProceedNow} className="mt-4 w-full rounded bg-[#19D16F] py-2 text-white">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Mi />
    </div>
  );
}

export default ShoppingCurtPage;
