import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Nvbr() {
  return (
    <div>
      <nav className="flex flex-col p-4 sm:flex-col sm:items-center sm:gap-7 lg:flex-row lg:justify-center xl:ml-[28vh] xl:justify-normal">
        <h2 className="flex justify-between text-[34px] font-bold text-[#0D0E43]">
          Hekto
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="m-5 rounded-md bg-white" />
              </SheetTrigger>
              <SheetContent
                className={`${lato.className} bg-[#E7E6EF] text-black`}
              >
                <ul className="space-y-3">
                  <li className="flex text-[#FB2E86]">
                    Home
                    <Image
                      src="/pinkdown.png"
                      alt="Dropdown Icon"
                      width={12}
                      height={12}
                      className="size-3"
                    />
                  </li>
                  <li>Pages</li>
                  <li>Products</li>
                  <li>Blog</li>
                  <li>Shop</li>
                  <li>Contact</li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>{" "}
        </h2>

        <ul
          className={`${lato.className} hidden items-center justify-center gap-[35px] text-base font-normal text-[#0D0E43] md:flex 2xl:ml-[88px]`}
        >
          <li className="flex items-center justify-center text-[#FB2E86]">
            Home
            <Image
              src="/pinkdown.png"
              alt="Dropdown Icon"
              width={12}
              height={12}
              className="size-3"
            />
          </li>
          <li>Pages</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center justify-between border-[2px] border-[#E7E6EF] sm:justify-end 2xl:ml-[110px]">
          <input type="text" className={`${lato.className} px-4`} />
          <div className="flex size-[40px] items-center justify-center bg-[#FB2E86]">
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
