import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Image from "next/image";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Nvbr />
      <div className="lg:h-[7395px]">
        {/* promotional  */}
        <div className="h-auto bg-[#F2F0FF] px-4 lg:pr-[173px]">
          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
            <Image
              src="/image32.png"
              alt="Lamp"
              width={387}
              height={387}
              className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[387px] lg:w-[387px]"
            />
            <div className="mt-8 flex flex-col gap-6 text-center lg:-ml-[100px] lg:mt-[203px] lg:w-[644px] lg:text-left">
              <p
                className={`${lato.className} font-lato text-[14px] font-bold text-[#FB2E86] md:text-[16px]`}
              >
                Best Furniture For Your Castle....
              </p>
              <h1 className="text-[24px] font-bold text-black lg:text-[53px]">
                New Furniture Collection Trends in 2020
              </h1>
              <p
                className={`${lato.className} font-lato text-[14px] text-[#8A8FB9] md:text-[16px]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="mx-auto h-[39px] w-full rounded-[2px] bg-[#FB2E86] font-medium text-white lg:mx-0 lg:w-[135px]">
                Shop Now
              </button>
            </div>
            <Image
              src="/sofa.png"
              alt="sofa"
              width={706}
              height={689}
              className="h-auto w-[300px] md:w-[500px] lg:w-[706px]"
            />
          </div>

          <div className="mt-6 flex justify-center pb-[52px] lg:mt-0">
            <Image
              src="/promotional.png"
              alt="promotional"
              width={66.07}
              height={14.6}
              className="w-[50px] md:w-[66px]"
            />
          </div>
        </div>
        {/*Featured  */}
        <div className="h-[2195px]">
          {/*Featured Products */}
          <>
            <h1 className="mb-[48px] mt-[129px] text-center text-[42px] font-bold text-[#1A0B5B]">
              Featured Products
            </h1>
            <div className="flex flex-col justify-center gap-7 md:flex-row">
              {/* Product 1 */}
              <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
                <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/1168.png"
                    alt="Product 1"
                    width={178}
                    height={178}
                  />
                </div>
                <p className="text-center text-lg font-bold text-[#FB2E86]">
                  Cantilever chair{" "}
                </p>
                <Image src="/141.png" alt="line" width={52} height={4} />
                <p className="text-sm font-semibold text-[#151875]">
                  Code - Y523201{" "}
                </p>
                <p className="text-sm font-semibold text-[#151875]">$42.00</p>
              </div>

              {/* Product 2 */}
              <div className="flex h-[361px] w-[270px] flex-col items-center bg-[#2F1AC4] drop-shadow-md">
                <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB] pr-12">
                  <Image
                    src="/1111.png"
                    alt="Product 1"
                    width={236}
                    height={270}
                  />
                </div>
                <div className="flex h-full w-[270px] flex-col items-center justify-center gap-4">
                  <p className="text-center text-lg font-bold text-white">
                    Cantilever chair{" "}
                  </p>
                  <Image src="/141.png" alt="line" width={52} height={4} />
                  <p className="text-sm font-semibold text-white">
                    Code - Y523201{" "}
                  </p>
                  <p className="text-sm font-semibold text-white">$42.00</p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
                <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/1169.png"
                    alt="Product 1"
                    width={178}
                    height={178}
                  />
                </div>
                <p className="text-center text-lg font-bold text-[#FB2E86]">
                  Cantilever chair{" "}
                </p>
                <Image src="/141.png" alt="line" width={52} height={4} />
                <p className="text-sm font-semibold text-[#151875]">
                  Code - Y523201{" "}
                </p>
                <p className="text-sm font-semibold text-[#151875]">$42.00</p>
              </div>
              {/* Product 4 */}

              <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
                <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/rchr.png"
                    alt="Product 1"
                    width={178}
                    height={178}
                  />
                </div>
                <p className="text-center text-lg font-bold text-[#FB2E86]">
                  Cantilever chair{" "}
                </p>
                <Image src="/141.png" alt="line" width={52} height={4} />
                <p className="text-sm font-semibold text-[#151875]">
                  Code - Y523201{" "}
                </p>
                <p className="text-sm font-semibold text-[#151875]">$42.00</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/89.png"
                alt="design"
                width={91}
                height={4}
                className="mb-[71px] mt-[53px]"
              />
            </div>
          </>
          {/*Leatest Products*/}

          <>
            <h1 className="mb-[19px] text-center text-[42px] font-bold text-[#1A0B5B]">
              Leatest Products
            </h1>
            <ul
              className={`${lato.className} mb-[62px] flex items-center justify-center gap-[58px] text-lg font-normal text-[#151875]`}
            >
              <li className="text-[#FB2E86] underline">New Arrival</li>
              <li>Best Seller</li>
              <li>Featured</li>
              <li>Special Offer</li>
            </ul>
            <div className="flex flex-col justify-center md:flex-row">
              {/* Product 1 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/1166.png"
                    alt="Product 1"
                    width={223}
                    height={229}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/Frame1.png"
                    alt="Product 1"
                    width={360}
                    height={306}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>
              {/* Product 3 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/im.png"
                    alt="Product 1"
                    width={223}
                    height={229}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="mt-[120px] flex flex-col justify-center md:flex-row">
              {/* Product 1 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/img23.png"
                    alt="Product 1"
                    width={223}
                    height={229}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/ima32.png"
                    alt="Product 1"
                    width={223}
                    height={229}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>

              {/* Product 3 */}
              <div className="flex h-[306px] w-[360px] flex-col items-center">
                <div className="flex h-[306px] w-[360px] items-center justify-center bg-[#F6F7FB]">
                  <Image
                    src="/sofchr.png"
                    alt="Product 1"
                    width={223}
                    height={229}
                  />
                </div>
                <div className="mt-4 flex gap-20">
                  <div className="text-base text-[#151875] shadow-md">
                    Comfort Handy Craft
                  </div>
                  <div className=" ">
                    <span className="ml-2 text-sm text-[#151875] line-through">
                      $42.00
                    </span>
                    <s className="ml-2 text-xs text-[#FB2448] line-through">
                      $65.00
                    </s>
                  </div>{" "}
                </div>
              </div>
            </div>
            <h1 className="mb-[55px] mt-[58px] text-center text-[42px] font-bold text-[#1A0B5B]">
              What Shopex Offer!{" "}
            </h1>
            <div
              className={`mb-[135px] flex flex-col items-center justify-center gap-7 text-center font-bold text-[#8A8FB9] lg:flex-row ${lato.className}`}
            >
              <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md">
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
              <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md">
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
              <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md">
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
              <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md">
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
            <div className="flex w-screen flex-col items-center justify-center bg-[#F1F0FF] md:h-[579px] md:flex-row">
              <Image src="/153.png" alt="sofa" width={558} height={550} />
              <div className="flex flex-col gap-8">
                <h1 className="w-[507px] pl-[15vh] text-center text-[35px] font-bold text-[#1A0B5B] md:pl-0 md:text-left">
                  Unique Features Of leatest & Trending Poducts{" "}
                </h1>
                <ul
                  className={`${lato.className} flex w-[461px] flex-col gap-3 pl-[19vh] text-base font-medium text-[#ACABC3] md:pl-0`}
                >
                  <li className="flex items-center gap-3">
                    <Image
                      src="/pink.png"
                      alt="pink"
                      width={11}
                      height={11}
                      className="size-[11px]"
                    />
                    All frames constructed with hardwood solids and laminates
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/yellow.png"
                      alt="yellow"
                      width={11}
                      height={11}
                      className="size-[11px]"
                    />
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </li>
                  <li className="flex items-center gap-3">
                    <Image
                      src="/green.png"
                      alt="green"
                      width={11}
                      height={11}
                      className="size-[11px]"
                    />
                    Arms, backs and seats are structurally reinforced
                  </li>
                </ul>{" "}
                <div className="flex flex-col gap-5 pl-[19vh] md:flex-row md:pl-0">
                  <button
                    className={`h-[39px] w-[50vh] rounded-[2px] bg-[#FB2E86] font-medium text-white lg:w-[135px]`}
                  >
                    Add To Cart{" "}
                  </button>
                  <div>
                    <p className={`text-sm font-semibold text-[#151875]`}>
                      B&B Italian Sofa{" "}
                    </p>
                    <p
                      className={`${lato.className} text-sm font-normal text-[#151875]`}
                    >
                      $32.00{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
          {/*Trending Products*/}
          <>
            <h1 className="mb-[48px] mt-[129px] text-center text-[42px] font-bold text-[#1A0B5B]">
              Trending Products
            </h1>
            <div className="flex flex-col justify-center md:flex-row">
              {/* Product 1 */}
              <div className="flex h-[350px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F5F6F8]">
                  <Image
                    src="/1171.png"
                    alt="Product 1"
                    width={201}
                    height={201}
                  />
                </div>
                <p
                  className={`mb-2 mt-4 text-center text-base font-bold text-[#151875] ${lato.className}`}
                >
                  Cantilever chair
                </p>
                <span className="text-sm font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="ml-3 text-xs font-normal text-[#ACABC3] line-through">
                    $42.00
                  </s>
                </span>
              </div>

              {/* Product 2 */}
              <div className="flex h-[350px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F5F6F8]">
                  <Image
                    src="/1170.png"
                    alt="Product 2"
                    width={201}
                    height={201}
                  />
                </div>
                <p
                  className={`mb-2 mt-4 text-center text-base font-bold text-[#151875] ${lato.className}`}
                >
                  Cantilever chair
                </p>
                <span className="text-sm font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="ml-3 text-xs font-normal text-[#ACABC3] line-through">
                    $42.00
                  </s>
                </span>
              </div>

              {/* Product 3 */}
              <div className="flex h-[350px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F5F6F8]">
                  <Image
                    src="/31.png"
                    alt="Product 3"
                    width={201}
                    height={201}
                  />
                </div>
                <p
                  className={`mb-2 mt-4 text-center text-base font-bold text-[#151875] ${lato.className}`}
                >
                  Cantilever chair
                </p>
                <span className="text-sm font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="ml-3 text-xs font-normal text-[#ACABC3] line-through">
                    $42.00
                  </s>
                </span>
              </div>

              {/* Product 4 */}
              <div className="flex h-[350px] w-[270px] flex-col items-center p-4">
                <div className="flex items-center justify-center bg-[#F5F6F8]">
                  <Image
                    src="/32.png"
                    alt="Product 4"
                    width={201}
                    height={201}
                  />
                </div>
                <p
                  className={`mb-2 mt-4 text-center text-base font-bold text-[#151875] ${lato.className}`}
                >
                  Cantilever chair
                </p>
                <span className="text-sm font-normal text-[#151875]">
                  $26.00{" "}
                  <s className="ml-3 text-xs font-normal text-[#ACABC3] line-through">
                    $42.00
                  </s>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-7">
              <div className="h-[270px] w-[420px] bg-[#FFF6FB] p-6">
                {" "}
                <p className="text-[26px] font-semibold text-[#151875]">
                  23% off in all products
                </p>
                <p
                  className={`${lato.className} text-base font-semibold text-[#FB2E86] underline`}
                >
                  Shop Now
                </p>
                <div className="flex justify-end">
                  {" "}
                  <Image
                    src="/1162.png"
                    alt="product"
                    width={213}
                    height={207}
                  />
                </div>
              </div>
              <div className="h-[270px] w-[420px] bg-[#EEEFFB]">
                {" "}
                <p className="text-[26px] font-semibold text-[#151875]">
                  23% off in all products
                </p>
                <p
                  className={`${lato.className} text-base font-semibold text-[#FB2E86] underline`}
                >
                  View Collection{" "}
                </p>
                <div className="flex justify-end">
                  {" "}
                  <Image
                    src="/1161.png"
                    alt="product"
                    width={312}
                    height={173}
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-2">
                  <div className="flex h-[74px] w-[107px] items-center justify-center bg-[#F5F6F8]">
                    <Image src="/2up.png" alt="chr" width={67} height={67} />
                  </div>
                  <div className="font-normal text-[#151875]">
                    <p className="text-base">Executive Seat chair</p>
                    <span className="text-xs line-through">$32.00</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex h-[74px] w-[107px] items-center justify-center bg-[#F5F6F8]">
                    <Image src="/mid.png" alt="chir" width={67} height={67} />
                  </div>
                  <div className="font-normal text-[#151875]">
                    <p className="text-base">Executive Seat chair</p>
                    <span className="text-xs line-through">$32.00</span>
                  </div>{" "}
                </div>
                <div className="flex gap-2">
                  <div className="flex h-[74px] w-[107px] items-center justify-center bg-[#F5F6F8]">
                    <Image src="/bot.png" alt="chair" width={67} height={67} />
                  </div>
                  <div className="font-normal text-[#151875]">
                    <p className="text-base">Executive Seat chair</p>
                    <span className="text-xs line-through">$32.00</span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </>
          {/* Discount Item */}
          <>
          <h1 className="mb-[33px] mt-[126px] text-center text-[42px] font-bold text-[#1A0B5B]">
            Discount Item{" "}
          </h1>
          <ul
            className={`${lato.className} mb-[62px] flex items-center justify-center gap-7 text-lg font-normal text-[#151875]`}
          >
            <li className="flex items-center justify-center text-[#FB2E86] underline">
              Wood Chair{" "}
              <div className="ml-2 size-[5px] rounded-full bg-[#FB2E86]"></div>
            </li>
            <li>Plastic Chair</li>
            <li>Sofa Colletion</li>
          </ul>
          <div className="flex flex-col items-center justify-center  md:flex-row">
            {/* Left Text Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[35px] font-bold text-[#1D3178]">
                20% Discount Of All Products
              </h2>
              <h3 className="text-[21px] font-semibold text-[#FB2E86]">
                Eams Sofa Compact
              </h3>
              <p
                className={`${lato.className} w-[523px] text-base font-normal text-[#B7BACB]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              {/* Features List */}
              <div className="flex flex-col gap-2">
                <ul
                  className={`${lato.className} flex gap-12 text-base font-normal text-[#B7BACB]`}
                >
                  <li className="flex items-center justify-center">
                    <Image
                      src={"/check.png"}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    Material expose like metals
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    <Image
                      src={"/check.png"}
                      alt="check"
                      width={24}
                      height={24}
                    />{" "}
                    Clear lines and geomatric figures
                  </li>
                </ul>
                <ul
                  className={`${lato.className} flex gap-20 text-base font-normal text-[#B7BACB]`}
                >
                  <li className="flex items-center justify-center">
                    <Image
                      src={"/check.png"}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    Simple neutral colours.
                  </li>
                  <li className="flex items-center justify-center">
                    {" "}
                    <Image
                      src={"/check.png"}
                      alt="check"
                      width={24}
                      height={24}
                    />{" "}
                    Material expose like metals
                  </li>
                </ul>
              </div>

              {/* Button */}
              <button className="mt-4 w-[150px] rounded-[2px] bg-[#FB2E86] p-2 text-white">
                Shop Now
              </button>
            </div>
            {/* Right Section */}
            <div>
              <Image src="/tortuga.png" alt="chair" width={699} height={567} />
            </div>
          </div>
          </>
          {/* Top Categories*/}
          <h1 className="mb-[56px] mt-[79px] text-center text-[42px] font-bold text-[#1A0B5B]">Top Categories </h1>
          
        </div>
      </div>
      <Footer />
      <Mi />
    </div>
  );
}
