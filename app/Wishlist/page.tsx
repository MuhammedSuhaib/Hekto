"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { urlFor } from "@/sanity/lib/image";

interface WishlistProduct {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
}

function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistProduct[]>([]);

  // Load wishlist items from localStorage when the component mounts
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistItems(wishlist);
  }, []);

 // Remove product from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Clear wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
    localStorage.removeItem("wishlist");
  };

  if (wishlistItems.length === 0) {
    return (
      <div>
        <Header />
        <Nvbr />
        <Bredcrumb pageName="Wishlist Page" />
        <div className="container mx-auto my-12 text-center">
          <h2 className="text-2xl font-bold text-[#1D3178]">Your Wishlist is empty!</h2>
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
      <Bredcrumb pageName="Wishlist" />

      <div className="container mx-auto my-[100px] p-4">
        <div className="w-full xl:w-2/3">
            {/* Table Headings */}
            <div className="mb-4 flex justify-around items-center text-lg font-bold text-[#1D3178]">
              <p>Product</p>
              <p>Price</p>
              <p>Actions</p>
            </div>
            {/* Wishlist Product List */}
            <div className="space-y-6">
              {wishlistItems.map((item) => (
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
                    </div>
                  </div>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromWishlist(item._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            {/* Clear Wishlist Button */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={clearWishlist}
                className="rounded bg-[#FB2E86] px-6 py-2 text-white"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default WishlistPage;
