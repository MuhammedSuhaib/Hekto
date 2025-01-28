import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import ProductGrid from "@/components/ProductGrid";
export interface Product {
  _id: string;
  name: string;
  image: { asset: { url: string } } | null;
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: "Chair" | "Sofa" | null | string;
}
function Shop_Grid_page() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Shop Grid page" />
      <ProductGrid />
      <Footer />
      <Mi />
    </div>
  );
}

export default Shop_Grid_page;
