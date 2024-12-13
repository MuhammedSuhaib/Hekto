import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
function Page() {
  return (
    <div>
    <Header />
    <Nvbr />
    <Bredcrumb pageName="Contact Us" />
    <div>
        {/* up */}
      <div>
        {/* left */}
        <div><h1>k</h1></div>
        {/* Right */}
        <div></div>
      </div>
      {/* down */}
      <div></div>
    </div>
    <Footer />
      <Mi />
    </div>
  )
}

export default Page
