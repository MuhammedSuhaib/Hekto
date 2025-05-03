"use client"; // ✅ Fix the typo here

import { useEffect } from "react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error Occurred:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F6F5FF] p-6">
            <div className="max-w-md rounded-lg     bg-white p-8 text-center shadow-lg">
                <h2 className={`mb-4 text-2xl font-bold text-[#1D3178] ${lato.className}`}>
                    Oops! Something went wrong 😢
                </h2>
                <p className={`text-sm text-[#A1A8C1] ${lato.className}`}>
                    We encountered an error while loading this page.
                    Please try again, or contact support if the issue persists.
                </p>
                <button
                    onClick={() => reset()}
                    className="mt-6 w-full rounded bg-[#FB2E86] px-6 py-2 text-white transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E33E0]"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}
