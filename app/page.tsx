import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Navbar";
import Image from "next/image";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Button from "@/components/Button";
import Link from "next/link";
interface Product {
  _id: string;
  name: string;
  image: { asset: { url: string } };
  price: string;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  isLeatestProduct: boolean;
  isTrendingProduct: boolean;
  stockLevel: number;
  category: "Chair" | "Sofa" | null | string;
}

export default async function Home() {
  let data: Product[] = [];
  let dataL: Product[] = [];
  let dataT: Product[] = [];
  let dataTC: Product[] = [];
  try {
    data =
      await client.fetch(`*[_type == "product" && isFeaturedProduct == true]{
_id,
name,
image,
price,
description,
discountPercentage,
isFeaturedProduct,
stockLevel,
category
}`);
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
  try {
    dataL =
      await client.fetch(`*[_type == "product" && isLeatestProduct == true]{
_id,
name,
image,
price,
description,
discountPercentage,
isFeaturedProduct,
isLeatestProduct,
stockLevel,
category
}`);
  } catch (error) {
    console.error("Error fetching latest products:", error);
  }

  try {
    dataT =
      await client.fetch(`*[_type == "product" && isTrendingProduct == true]{
_id,
name,
image,
price,
description,
discountPercentage,
isFeaturedProduct,
isTrendingProduct,
isLeatestProduct,
stockLevel,
category
}`);
  } catch (error) {
    console.error("Error fetching trending products:", error);
  }

  try {
    dataTC = await client.fetch(`*[_type == "product" && topCategories == true]{
_id,
name,
image,
price,
description,
discountPercentage,
isFeaturedProduct,
topCategories,
isTrendingProduct,
isLeatestProduct,
stockLevel,
category
}`);
  } catch (error) {
    console.error("Error fetching featured products:", error);
  }
  return (
    <div className="w-screen overflow-x-hidden bg-white">
      <Header />
      <Nvbr />
      <div className="lg:h-[6695px]">
        {/* promotional*/}
        <div className="h-auto bg-[#F2F0FF] px-4 lg:pr-[173px]">
          <Link href={`/0e0ztuJY6NWdyblBESqXIV`}>
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
                  New Furniture Collection Trends in 2025
                </h1>
                <p
                  className={`${lato.className} font-lato text-[14px] text-[#8A8FB9] md:text-[16px]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <Button />
              </div>
              <Image
                src="/sofa.png"
                alt="sofa"
                width={706}
                height={689}
                className="h-auto w-[300px] md:w-[500px] lg:w-[706px]"
              />
            </div>
          </Link>
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
        {/*Featured*/}
        <div className="h-[2195px]">
          {/*Featured Products */}
          <>
            <h1 className="mb-[48px] mt-[129px] text-center text-[42px] font-bold text-[#1A0B5B]">
              Featured Products
            </h1>
            <>
              <Carousel className="mx-auto">
                <CarouselContent>
                  {data.map((product, index) => (
                    <CarouselItem
                      key={product._id}
                      className={`flex flex-col items-stretch p-4 transition duration-300 ease-in-out hover:bg-[#f599c15b] hover:shadow-2xl md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${index === 0 ? "animate-nudge" : ""
                        } `}
                    >
                      <Link href={`/${product._id}`} key={product._id}>
                        <div className="flex h-full items-center justify-center">
                          <Card className="flex h-full flex-col rounded-none">
                            <CardContent className="flex h-full flex-col items-center justify-center">
                              {/* head of card with img */}
                              <div className="flex items-center justify-center bg-[#F6F7FB]">
                                <img
                                  src={urlFor(product.image.asset).url()}
                                  alt={product.name}
                                  width={201}
                                  height={201}
                                  loading="lazy"
                                  className="h-56 w-full object-cover"
                                />
                              </div>
                              <span className="text-center text-lg font-bold text-[#FB2E86]">
                                {product.name}
                              </span>
                              <Image
                                src="/141.png"
                                alt="line"
                                width={52}
                                height={4}
                                className="my-4"
                              />
                              <span className="text-sm font-semibold text-[#151875]">
                                Code - {product._id.slice(0, 7)}
                              </span>

                              <div className="mt-2 flex items-center">
                                <span className="text-sm font-medium text-[#151875]">
                                  ${product.price}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
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
              className={`${lato.className} mb-[62px] flex items-center justify-center gap-5 text-lg font-normal text-[#151875] md:gap-[58px]`}
            >
              <li className="hover:text-[#FB2E86] hover:underline">
                New Arrival
              </li>
              <li className="hidden hover:text-[#FB2E86] hover:underline md:flex">
                Best Seller
              </li>
              <li className="hover:text-[#FB2E86] hover:underline">Featured</li>
              <li className="hover:text-[#FB2E86] hover:underline">
                Special Offer
              </li>
            </ul>
            <>
              <Carousel className={`${"animate-nudge"} mx-auto`}>
                <CarouselContent>
                  {dataL.map((product) => (
                    <CarouselItem
                      key={product._id}
                      className={`flex flex-col items-stretch p-4 transition duration-300 ease-in-out hover:bg-[#f599c15b] hover:shadow-2xl md:basis-1/2 lg:basis-1/3 xl:basis-1/4`}
                    >
                      <Link href={`/${product._id}`} key={product._id}>
                        <div className="flex h-full items-center justify-center">
                          <Card className="flex h-full flex-col rounded-none">
                            <CardContent className="flex h-full flex-col items-center justify-center">
                              {/* head of card with img */}
                              <div className="flex items-center justify-center bg-[#F6F7FB]">
                                <img
                                  src={urlFor(product.image.asset).url()}
                                  alt={product.name}
                                  width={201}
                                  height={201}
                                  loading="lazy"
                                  className="h-56 w-full object-cover"
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-base text-[#151875]">
                                  Comfort Handy Craft
                                </span>
                                <span className="ml-7 text-sm font-medium text-[#151875]">
                                  ${product.price}{" "}
                                  {product.discountPercentage > 0 && (
                                    <span className="ml-1 text-xs text-[#FB2E86] line-through">
                                      $
                                      {(
                                        parseFloat(product.price) *
                                        (1 + product.discountPercentage / 100)
                                      ).toFixed(2)}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
            <>
              <Carousel className="md:mx-auto">
                <CarouselContent>
                  {dataL.toReversed().map((product, index) => (
                    <CarouselItem
                      key={product._id}
                      className={`flex flex-col items-stretch p-4 transition duration-300 ease-in-out hover:bg-[#f599c15b] hover:shadow-2xl md:basis-1/2 lg:basis-1/3 xl:basis-1/4 ${index === 0 ? "animate-nudge" : ""
                        }`}
                    >
                      <Link href={`/${product._id}`} key={product._id}>
                        <div className="flex h-full items-center justify-center">
                          <Card className="flex h-full flex-col rounded-none">
                            <CardContent className="flex h-full flex-col items-center justify-center">
                              {/* head of card with img */}
                              <div className="flex items-center justify-center bg-[#F6F7FB]">
                                <img
                                  src={urlFor(product.image.asset).url()}
                                  alt={product.name}
                                  width={201}
                                  height={201}
                                  loading="lazy"
                                  className="h-56 w-full object-cover"
                                />
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-base text-[#151875]">
                                  Comfort Handy Craft
                                </span>
                                <span className="ml-7 text-sm font-medium text-[#151875]">
                                  ${product.price}{" "}
                                  {product.discountPercentage > 0 && (
                                    <span className="ml-1 text-xs text-[#FB2E86] line-through">
                                      $
                                      {(
                                        parseFloat(product.price) *
                                        (1 + product.discountPercentage / 100)
                                      ).toFixed(2)}
                                    </span>
                                  )}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </Link>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </>
            {/* What Shopex Offer! */}
            <>
              <h1 className="mb-[55px] mt-[58px] text-center text-[42px] font-bold text-[#1A0B5B]">
                What Shopex Offer!{" "}
              </h1>
              <div
                className={`mb-[135px] flex flex-col items-center justify-center gap-7 text-center font-bold text-[#8A8FB9] lg:flex-row ${lato.className}`}
              >
                <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md hover:shadow-2xl">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
                <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md hover:shadow-2xl">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
                <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md hover:shadow-2xl">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
                <div className="flex h-[320px] w-[270px] max-w-full flex-col items-center justify-center gap-[21px] shadow-md hover:shadow-2xl">
                  <Image src="/24.png" width={65} height={65} alt="24/7" />
                  <h3 className="text-[22px] font-bold text-[#151875]">
                    24/7 Support
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Massa purus gravida.
                  </p>
                </div>
              </div>
            </>
            {/* banner */}
            <div className="flex w-screen flex-col items-center justify-center bg-[#F1F0FF] p-4 md:h-[579px] md:flex-row">
              <Link href={"/BQj9k9W1Mf2GlcuUg3OakX"} >
                <Image src="/153.png" alt="sofa" width={558} height={550} /></Link>
              <div className="flex flex-col gap-8">
                <h1 className="w-[50vh] pl-[1vh] text-center text-[35px] font-bold text-[#1A0B5B] md:w-[507px] md:text-left">
                  Unique Features Of leatest & Trending Poducts{" "}
                </h1>
                <ul
                  className={`${lato.className} flex w-[50vh] flex-col gap-3 pl-[10vh] text-base font-medium text-[#ACABC3] md:w-[461px] md:pl-0`}
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
                <div className="flex flex-col gap-5 pl-[15vh] md:flex-row md:pl-0">
                  <Button label="Add To Cart" />
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
            <div className="flex flex-col items-center justify-center">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {dataT.map((product) => (
                  <div
                    key={product._id}
                    className="flexh-fit w-fit flex-col items-center transition duration-300 ease-in-out hover:bg-[#51d0f715] hover:shadow-xl"
                  >
                    <Link href={`/${product._id}`} key={product._id}>
                      {/* head of card with img */}
                      <div className="flex items-center justify-center">
                        <img
                          src={urlFor(product.image.asset).url()}
                          alt={product.name}
                          width={201}
                          height={201}
                          loading="lazy"
                          className="h-56 w-full rounded-t-lg object-cover"
                        />
                      </div>
                      <span className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
                        {product.name}
                      </span>
                      <div className="mt-2 flex items-center">
                        <span className="text-lg font-bold text-[#151875]">
                          ${product.price}
                        </span>
                        {product.discountPercentage > 0 && (
                          <span className="ml-2 text-sm text-[#FB2E86] line-through">
                            $
                            {(
                              parseFloat(product.price) *
                              (1 + product.discountPercentage / 100)
                            ).toFixed(2)}
                          </span>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

{/* <div className="mt-4 hidden flex-col items-center justify-center gap-7 md:flex md:flex-row">
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
</div> */}

          </>
          {/* Discount Item */}
          <>
            <h1 className="mb-[33px] mt-[126px] text-center text-[42px] font-bold text-[#1A0B5B]">
              Discount Item{" "}
            </h1>
            <ul
              className={`${lato.className} mb-[62px] flex items-center justify-center gap-7 pl-[5vh] text-lg font-normal text-[#151875] md:pl-0`}
            >
              <li className="flex items-center justify-center text-[#FB2E86] underline">
                Wood Chair{" "}
                <div className="ml-2 size-[5px] rounded-full bg-[#FB2E86]"></div>
              </li>
              <li>Plastic Chair</li>
              <li>Sofa Colletion</li>
            </ul>
            <div className="flex flex-col items-center justify-center md:flex-row">
              {/* Left Text Section */}
              <div className="flex flex-col gap-4 pl-[10vh] md:pl-0">
                <h2 className="w-[50vh] text-[35px] font-bold text-[#1A0B5B] md:w-full">
                  20% Discount On All Products
                </h2>
                <h3 className="text-[21px] font-semibold text-[#FB2E86]">
                  Eams Sofa Compact
                </h3>
                <p
                  className={`${lato.className} w-[60vh] text-base font-normal text-[#B7BACB] md:w-[523px]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                  eget feugiat habitasse nec, bibendum condimentum.
                </p>
                {/* Features List */}
                <div className="flex flex-col gap-2">
                  <ul
                    className={`${lato.className} flex flex-wrap text-base font-normal text-[#B7BACB] md:flex-nowrap md:gap-12`}
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
                    className={`${lato.className} flex flex-wrap text-base font-normal text-[#B7BACB] md:flex-nowrap md:gap-20`}
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
                <Button />
              </div>
              {/* Right Section */}
              <div>
                <Link href={"/YjFIo1g1LQZHJZg27Q0Unp"}>
                  <Image
                    src="/tortuga.png"
                    alt="chair"
                    width={699}
                    height={567}
                  /></Link>
              </div>
            </div>
          </>
          {/* Top Categories*/}
          <>
            <div className="flex flex-col items-center justify-center gap-14">
              <h1 className="mt-[79px] text-center text-[42px] font-bold text-[#1A0B5B]">
                Top Categories{" "}
              </h1>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                {dataTC.map((product) => (
                  <div
                    key={product._id}
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <Link href={`/${product._id}`} key={product._id}>
                      {/* Image container */}
                      <div className="flex items-center justify-center rounded-full bg-[#F6F7FB]">
                        <img
                          src={urlFor(product.image.asset).url()}
                          alt={product.name}
                          width={269}
                          height={269}
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xl font-normal text-[#151875]">
                        {product.name}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <Image
                src="/promo.png"
                alt="promo"
                width={66.07}
                height={14.6}
                className="mb-[125.4px]"
              />
            </div>
            <div className="flex h-[462px] w-screen flex-col items-center justify-center bg-[url('/Rectangle.png')]">
              <h1 className="mb-[28px] w-[1/2] text-center text-[35px] font-bold text-[#1A0B5B] md:w-[574px]">
                Get Leatest Update By Subscribe 0ur Newslater
              </h1>
              <Button />
            </div>
          </>
          <div className="my-[96px] flex items-center justify-center">
            <Image
              src="/image.png"
              alt="Partners"
              width={1246}
              height={128}
              className="hidden h-[128px] w-[1246px] md:block"
            />
            <Image
              src="/image.png"
              alt="Partners"
              width={260}
              height={60}
              className="m-4 h-[60px] w-[260px] md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="mt-[7000px] sm:mt-[6000] md:mt-[5400px] lg:mt-0">
        <Footer />
        <Mi />
      </div>
    </div>
  );
}
