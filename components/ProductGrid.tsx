"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Product } from "@/app/Grid/page";
import { urlFor } from "@/sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton"
import SkeletonProductCard from "./SkeletonProductCard";

export default function ProductGrid() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [perPage, setPerPage] = useState(12);
    const [sortOption, setSortOption] = useState("Best Match");

    useEffect(() => {
        client.fetch(`*[_type == "product"]{
  _id, name, image, price, description, discountPercentage, stockLevel, category
}`).then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, []);

    // Sorting Logic
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "Newest") return b._id.localeCompare(a._id);
        if (sortOption === "Price Low to High") return parseFloat(a.price) - parseFloat(b.price);
        if (sortOption === "Price High to Low") return parseFloat(b.price) - parseFloat(a.price);
        return 0;
    });

    return (
        <div className="p-16" >
            {/* Controls: Per Page, Sort By, View Mode */}
            <div className="flex  md:justify-between  gap-4 md:p-7">
                {/* View Mode */}
                <div className="flex items-center gap-2">
                    <label className="text-gray-700">View:</label>
                    <button onClick={() => setViewMode("grid")}>
                        <Image src="/grid.png" alt="Grid View" width={12} height={12} />
                    </button>
                    <button onClick={() => setViewMode("list")}>
                        <Image src="/list.png" alt="List View" width={12} height={12} />
                    </button>
                </div>
                {/* Sort By */}
                <div className="flex items-center gap-2">
                    <label className="text-gray-700 text-xs text-nowrap">Sort By:</label>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="border w-fit border-gray-300 p-1 text-xs text-nowrap "
                    >
                        <option>Best Match</option>
                        <option>Newest</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                    </select>
                </div>
            </div>
            {/* Products Grid / List */}
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <SkeletonProductCard key={index} />
                    ))}
                </div>
            ) : (
                <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-6`}>
                    {sortedProducts.slice(0, perPage).map((product) => (
                        <Link href={`/${product._id}`} key={product._id} className={`flex ${viewMode === "grid" ? "flex-col" : "flex-row justify-around"} items-center p-4 shadow-md hover:shadow-2xl hover:shadow-[#9950f896] rounded-lg`}>

                            {/* Image */}
                            <div className="flex items-center justify-center">
                                <img
                                    src={product.image && product.image.asset
                                        ? urlFor(product.image.asset).url()
                                        : "/placeholder.png"
                                    }
                                    alt={product.name}
                                    width={201}
                                    height={201}
                                    className="h-56 w-full rounded-t-lg object-cover"
                                />
                            </div>
                            {/* Name & Price */}
                            <span className="mt-4 text-lg font-bold text-gray-800">{product.name}</span>
                            <span className={`mt-2 text-sm text-gray-600 w-1/3  ${viewMode === "grid" ? "hidden" : "flex"} `}>{product.description}</span>
                            <Image src="/Group44.png" alt="Stars" width={42} height={10} />
                            <div className="mt-2 flex items-center">
                                <span className="text-lg font-bold text-gray-800">${parseFloat(product.price).toFixed(2)}</span>
                            </div>
                        </Link>
                    ))}

                </div>
            )}
            {/* Per Page */}
            <div className="flex items-center gap-2 justify-end mt-4">
                <label className="text-gray-700  text-nowrap">Per Page:</label>
                <input
                    type="number"
                    value={perPage}
                    onChange={(e) => setPerPage(Number(e.target.value))}
                    className="w-16 border  border-gray-300 p-1 text-center"
                />
            </div>
        </div>
    );
}
