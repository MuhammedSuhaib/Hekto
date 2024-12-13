import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Bredcrumb from "@/components/Bredcrumb";
import { Lato } from "next/font/google";
import Image from "next/image";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
function AboutUsPage() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="About Us" />
      <div className="mt-[119px] mb-[382px] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start" >
            <Image src="/73.png" width={570} height={409} alt="Picture" className="hidden md:flex" />
            <Image src="/73.png" width={330} height={209} alt="Picture" className="p-4 flex md:hidden" />

          </div>
          <div className="md:w-[550px] w-full p-4">
            <h1 className="mb-3 text-4xl font-bold  text-[#151875]">
              Know About Our Ecomerce Business, History{" "}
            </h1>
            <p
              className={`mb-16 text-base font-semibold text-[#8A8FB9] ${lato.className}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </p>
            <button
              type="submit"
              className="mt-20 h-[48px] w-[157px] rounded-[3px] bg-[#FB2E86] px-10 py-2 text-base font-medium text-white"
            >
              Contact us{" "}
            </button>
          </div>
        </div>
        {/* Our Features */}
        <div>
          <h1 className="mb-[67px] mt-[141px] flex justify-center text-[42px] font-semibold">
            Our Features
          </h1>
          <div
            className={`flex flex-col lg:flex-row items-center justify-center gap-7 text-center font-bold text-[#8A8FB9] ${lato.className}`}
          >
            <div className="flex h-[320px] w-[270px] flex-col items-center justify-center gap-[21px] shadow-md">
              <Image
                src="/delivery.png"
                width={65}
                height={65}
                alt="free delivery"
              />
              <h3 className="text-[22px] font-bold text-[#151875]">
                Free Delivery
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>

            <div className="flex h-[320px] w-[270px] flex-col items-center justify-center gap-[21px] border-b-2 border-[#FF9100] shadow-md">
              <Image
                src="/cashback.png"
                width={65}
                height={65}
                alt="cashback"
              />
              <h3 className="text-[22px] font-bold text-[#151875]">
                100% Cash Back
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>

            <div className="flex h-[320px] w-[270px] flex-col items-center justify-center gap-[21px] shadow-md">
              <Image
                src="/quality.png"
                width={65}
                height={65}
                alt="free delivery"
              />
              <h3 className="text-[22px] font-bold text-[#151875]">
                {" "}
                Quality Product
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>

            <div className="flex h-[320px] w-[270px] flex-col items-center justify-center gap-[21px] shadow-md">
              <Image src="/24.png" width={65} height={65} alt="24/7" />
              <h3 className="text-[22px] font-bold text-[#151875]">
                24/7 Support
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
        {/* Our Client Say! */}
        <div>
          
          <div className="mt-[204px] flex flex-col items-center justify-center text-center w-[689px]">
            <h3 className="text-[42px] font-semibold">Our Client Say!</h3>
            <div>
              <Image src="/Client.png" width={191} height={64} alt="Client" className=" mb-[25px] mt-[64px]" />
            </div>
            <div className={`flex justify-center items-center ${lato.className} text-[#8A8FB9] flex-col gap-[14px]`}>
              <h6 className={`font-bold text-[22px] text-black`} >Selina Gomez</h6>
              <p className="text-[10px]">Ceo At Webecy Digital</p>
              <p className="w-1/2 md:w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices
                dolor aliquam lacus volutpat praesent.
              </p>
              <Image src="/89.png" width={73} height={3} alt="Client" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}

export default AboutUsPage;
