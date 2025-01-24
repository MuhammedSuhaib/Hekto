"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

interface CartProduct {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
  quantity: number;
}

function ShoppingCurtPage() {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  // Handle quantity change
  const handleQuantityChange = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]); // Clear cart items
    localStorage.removeItem("cart"); // Remove from localStorage
  };

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <Nvbr />
        <Bredcrumb pageName="Shopping Cart" />
        <div className="container mx-auto my-12 text-center">
          <h2 className="text-2xl font-bold text-[#1D3178]">Your cart is empty!</h2>
        </div>
        <Footer />
        <Mi />
      </div>
    );
  }

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
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image ? urlFor(item.image).url() : "/placeholder.png"}
                      alt={item.name}
                      width={83}
                      height={87}
                      className="rounded-[3px]"
                    />
                    <div className="hidden md:block text-[#A1A8C1]">
                      <p className="text-black">{item.name}</p>
                      <p>Quantity: 
                        <input 
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                          className="w-16 p-1 border border-gray-300"
                          min="1"
                        />
                      </p>
                    </div>
                  </div>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                  <p>${(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Clear Cart Button */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={clearCart}
                className="rounded bg-[#FB2E86] px-6 py-2 text-white"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full xl:w-1/3 space-y-8">
            {/* Cart Totals */}
            <div className="rounded bg-[#F4F4FC] p-6">
              <h2 className="mb-4 text-2xl font-bold text-[#1D3178]">Cart Totals</h2>
              <div className="flex justify-between border-b pb-2">
                <p>Subtotals:</p>
                <p>
                  ${cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between border-b pb-2">
                <p>Totals:</p>
                <p>
                  ${cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2)}
                </p>
              </div>
              <p className={`${lato.className} mt-4 text-xs text-[#C1C8E1]`}>
                Shipping & taxes calculated at checkout
              </p>
              <button className="mt-4 w-full rounded bg-[#19D16F] py-2 text-white">
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
