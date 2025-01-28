"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

function Nvbr() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      router.push(`/Search?query=${query}`);
    }
  };
  return (
    <div>
      <nav className="flex flex-col p-4 sm:flex-col sm:items-center sm:gap-7 lg:flex-row lg:justify-center xl:ml-[28vh] xl:justify-normal">
        <div className="flex justify-between text-[34px] font-bold text-[#0D0E43]">
          <Link href="/" className="transition-transform duration-300 hover:scale-105">Hekto</Link>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="m-5 rounded-md bg-white" />
              </SheetTrigger>
              <SheetContent
                className={`${lato.className} bg-[#E7E6EF] text-black`}
              >
                {/* Mobile ul for nav */}
                <ul className="space-y-3">
                  <li className="flex hover:text-[#FB2E86]">
                    Home
                    <Image
                      src="/pinkdown.png"
                      alt="Dropdown Icon"
                      width={12}
                      height={12}
                      className="size-3"
                    />
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pages" />
                      </SelectTrigger>
                      <SelectContent>
                        <ul>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/FAQ">FAQ</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/404">404</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Cont">Contact Us</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/About">About Us</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Account">Account</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Order">Order</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Demo">Demo</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Shopping">Shopping Cart</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Wishlist">Wishlist</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/Grid">Shop Grid page</Link>
                          </li>
                          <li className="hover:text-[#FB2E86]">
                            <Link href="/List">Shop List page</Link>
                          </li>
                        </ul>
                      </SelectContent>
                    </Select>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Grid">Products</Link>
                  </li>
                  {/* <li className="hover:text-[#FB2E86]">Blog</li> */}
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/List">Shop</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Cont">Contact</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>{" "}
        </div>
        {/* Pc navbar  */}
        <ul
          className={`${lato.className} hidden items-center justify-center gap-[35px] text-base font-normal text-[#0D0E43] md:flex 2xl:ml-[88px]`}
        >
          <li className="flex items-center justify-center hover:text-[#FB2E86]">
            <Link href="/">Home</Link>

            <Image
              src="/pinkdown.png"
              alt="Dropdown Icon"
              width={12}
              height={12}
              className="size-3"
            />
          </li>
          <li className="hover:text-[#FB2E86]">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pages" />
              </SelectTrigger>
              <SelectContent>
                <ul>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/FAQ">FAQ</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/404">404</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Cont">Contact Us</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/About">About Us</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Account">Account</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Order">Order</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Demo">Demo</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Shopping">Shopping Cart</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Wishlist">Wishlist</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/Grid">Shop Grid page</Link>
                  </li>
                  <li className="hover:text-[#FB2E86]">
                    <Link href="/List">Shop List page</Link>
                  </li>
                </ul>
              </SelectContent>
            </Select>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href="/Grid">Products</Link>
          </li>
          {/* <li className="hover:text-[#FB2E86]">Blog</li> */}
          <li className="hover:text-[#FB2E86]">
            <Link href="/List">Shop</Link>
          </li>
          <li className="hover:text-[#FB2E86]">
            <Link href="/Cont">Contact</Link>
          </li>
        </ul>
        {/* Search bar */}
        <div className="flex items-center justify-between border-[2px] rounded-[7px] border-[#E7E6EF] sm:justify-end">
          <div className="w-full px-4">
            <input
              type="text"
              value={query}
              placeholder="Search"
              onChange={handleChange} // Capture search input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch(); // Trigger search on Enter key press
                }
              }}
              className={`${lato.className} w-full lg:pl-[10px] 2xl:pl-[110px] `}
            />
          </div>
          <div
            onClick={handleSearch} // Trigger search on click
            className="flex h-10 w-11 items-center justify-center rounded-[4px] bg-[#FB2E86]"
          >
            <Image
              src="/uil_search.png"
              alt="Search Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nvbr;
