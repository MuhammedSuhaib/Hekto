"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

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
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistItems(wishlist);
    } catch (error) {
      console.error("Error loading wishlist from localStorage:", error);
      setWishlistItems([]);
    }
  }, []);

  // Remove product from wishlist
  const removeFromWishlist = (id: string) => {
    const updatedWishlis = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlis);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlis));
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
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-4 rounded bg-[#FB2E86] px-6 py-2 text-white"
          >
            Back to Shop
          </button>
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
                  <Link href={`/${item._id}`} className="flex items-center gap-4 ">

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
                <p>${parseFloat(item.price || "0").toFixed(2)}</p>
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="text-red-600 hover:text-red-800"
                  aria-label={`Remove ${item.name} from wishlist`}
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
              aria-label="Clear wishlist"
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
