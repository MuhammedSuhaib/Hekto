"use client";

import React from "react";
import Bredcrumb from "@/components/Bredcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/Grid/page";
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation"; // ✅ Import useRouter

export interface ProductDetailsProps {
    product: Product;
    similarProducts: Product[];
}



export default function ProductDetails({ product, similarProducts }: ProductDetailsProps) {

    const router = useRouter(); // ✅ Initialize useRouter

    const addToCart = (product: Product) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        Swal.fire({
            title: `🥳 ${product.name} added to Cart! 🥳`,
            text: 'Click on the cart icon 🛒 at the top right to see your cart .',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };
    
    const addToWishlist = (product: Product) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        const wish = [...wishlist, { ...product, quantity: 1 }];
        localStorage.setItem("wishlist", JSON.stringify(wish));
        Swal.fire({
            title: `💖${product.name} added to Wishlist!💖`,
            text: 'Click on the heart icon 💖 at the top right to see your wishlist..',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };
    const  handleBuyNow = async (product: Product) => {
        if (!product) {
            console.error("Product data is missing!");
            return;
        }
        // router.push("/api/checkout?productId="+ product._id); // ✅ Navigate to checkout page
        // localStorage.setItem("checkoutItems", JSON.stringify([product])); // Save product to localStorage
        const res = await fetch('/api/stripe/checkout', {
            method: 'POST',
            body: JSON.stringify({
                items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: { name: product.name },
                            unit_amount: Math.round(parseFloat(product.price) * 100),
                        },
                        quantity: 1,
                    },
                ],
            }),
        });

        const data = await res.json();
        window.location.href = data.url;

    };
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
                            src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                            alt={product.name}
                            className="size-[325px] rounded-lg object-cover shadow-md"
                            loading="lazy"
                        />
                    </div>

                    {/* mid: Product Details */}
                    <div className="flex-1">
                        <h1 className="mb-4 text-2xl font-bold text-gray-800">{product.name}</h1>
                        <p className="mb-2 text-xl text-gray-700">Price:<span className="font-bold text-[#FB2E86]">${parseFloat(product.price).toFixed(2)}</span></p>
                        {product.discountPercentage > 0 && (<p className="text-md text-gray-600 line-through">Original Price: ${(
                            parseFloat(product.price) * (1 + product.discountPercentage / 100)).toFixed(2)}</p>)}
                        <p className="mb-4 text-sm text-green-600">Discount: {product.discountPercentage}% off</p>
                        <p className="text-gray-700"><span className="font-bold">Stock:</span> {product.stockLevel}</p>
                        <p className="text-gray-700"><span className="font-bold">Category:</span> {product.category}</p>
                        <p className="mt-4 text-gray-600">{product.description}</p>
                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button
                                onClick={() => addToCart(product)}
                                className="mx-auto flex h-[39px] w-full rounded-lg bg-[#FB2E86] px-6 py-2 font-medium text-white transition duration-300 hover:scale-105 hover:bg-[#e02121] focus:outline-none focus:ring-2 focus:ring-[#e033e0] lg:mx-0 lg:w-[135px]"
                            >
                                Add to
                                <Image
                                    width={20}
                                    height={20}
                                    src="/crt.png"
                                    alt="cart"
                                    className="h-5 w-5"
                                />
                            </button>
                            <button onClick={() => handleBuyNow(product)} className="bg-gray-200 rounded-lg flex px-6 mx-auto h-[39px] w-full font-medium duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e033e0] lg:mx-0 lg:w-[135px] py-2 text-gray-800 transition hover:bg-gray-300">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    {/* Right: Buttons */}
                    <div className="flex flex-1 flex-row items-center gap-4 md:flex-col">
                        <button
                            onClick={() => addToWishlist(product)}

                            className="flex items-center gap-2 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]"
                        >
                            Add to
                            <Image
                                width={20}
                                height={20}
                                src="/uil_heart-alt.png"
                                alt="Wishlist"
                                className="h-5 w-5"
                            />
                        </button>
                        <button
                            onClick={() => { navigator.clipboard.writeText(window.location.href); document.getElementById('copyMessage')!.style.display = 'block'; setTimeout(() => document.getElementById('copyMessage')!.style.display = 'none', 5000); }}
                            className="relative flex items-center gap-2 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]"
                        >
                            <Image
                                width={20}
                                height={20}
                                src="/share.png"
                                alt="Wishlist"
                                className="h-5 w-5"
                            />
                            share
                            <div id="copyMessage" className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 text-[#e02174] text-lg" style={{ display: 'none' }}>
                                Link copied to clipboard!
                            </div>
                        </button>

                    </div>

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
                                <Link
                                    href={`/${product._id}`}>
                                    <img
                                        src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                                        alt={product.name}
                                        className="h-48 w-full rounded-t-lg object-cover"
                                        loading="lazy"
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

                                    <div
                                        className="mt-4 rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174] text-center "
                                    >
                                        View Details
                                    </div>
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
