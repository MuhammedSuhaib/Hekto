"use client";

import Bredcrumb from "@/components/Bredcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "../Grid/page";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        setLoading(true);
        try {
          const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
          if (!res.ok) throw new Error("Failed to fetch");
          const data = (await res.json()) as { products: Product[] };
          setResults(data.products || []);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setResults([]); // Fallback to empty array on error
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }
  }, [query]);

  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Search Results" />
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Search Results for &quot;{query}&quot;
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <p className="text-lg text-gray-500">Loading...</p>
          </div>
        )}

        {!loading && results.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {results.map(
              (product) =>
                product && (
                  <div
                    key={product._id}
                    className="relative flex flex-col items-center rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <Link href={`/${product._id}`}>
                      {/* Product Image */}
                      <img
                        src={product.image ? urlFor(product.image).url() : "/placeholder.png"}
                        alt={product.name}
                        className="h-48 w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="mt-4 text-center">
                      {/* Product Name */}
                      <h3 className="text-lg font-bold text-gray-800">
                        {product.name}
                      </h3>
                      {/* Product Price */}
                      <p className="mt-2 text-gray-700">
                        ${parseFloat(product.price).toFixed(2)}
                      </p>
                      {product.discountPercentage > 0 && (
                        <p className="text-sm text-gray-500 line-through">
                          ${(
                            parseFloat(product.price) *
                            (1 + product.discountPercentage / 100)
                          ).toFixed(2)}
                        </p>
                      )}
                    </div>
                    {/* View Details Button */}
                    <Link href={`/${product._id}`}>
                      <button className="mt-4 w-full rounded-lg bg-[#FB2E86] px-4 py-2 text-white transition hover:bg-[#e02174]">
                        View Details
                      </button>
                    </Link>
                  </div>
                )
            )}
          </div>
        ) : (
          !loading && (
            <div className="flex justify-center items-center h-40">
              <p className="text-lg text-gray-500">No results found.</p>
            </div>
          )
        )}
      </div>
      <Footer />
      <Mi />
    </div>
  );
}
