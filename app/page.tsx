import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/nvbr";
import Bredcrumb from "@/components/Bredcrumb";
import Err from "./404err/Page";
export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Header />
      <Nvbr />
      <Bredcrumb />
      <Err />
      <Footer />
      <Mi />
    </div>
  );
}
