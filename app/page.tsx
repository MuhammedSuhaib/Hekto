import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Nvbr />
      <Bredcrumb pageName="Home" />
      
      <Footer />
      <Mi />
    </div>
  );
}
