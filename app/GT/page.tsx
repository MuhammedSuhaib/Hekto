import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// interface Product {
//   _id: string;
//   name: string;
//   image: { asset: { url: string } };
//   price: string;
//   description: string;
//   discountPercentage: number;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: "Chair" | "Sofa"; // Adjust this list as needed
// }

// async function page() {
//   const data: Product[] =
//     await client.fetch(`*[_type == "product" && isFeaturedProduct == true]{
// _id,
// name,
// image,
// price,
// description,
// discountPercentage,
// isFeaturedProduct,
// stockLevel,
// category
// }`);
//   return (
//     <>
//   <style>
//     {`
//       @keyframes nudge {
//         0% { transform: translateX(0); }
//         25% { transform: translateX(10px); }
//         50% { transform: translateX(0); }
//         75% { transform: translateX(10px); }
//         100% { transform: translateX(0); }
//       }

//       .animate-nudge {
//         animation: nudge 1.5s ease-in-out;
//       }
//     `}
//   </style>

//   <Carousel className="mx-auto overflow-x-auto">
//     <CarouselContent className="flex">
//       {data.map((product, index) => (
//         <CarouselItem
//           key={product._id}
//           className={`flex flex-col items-stretch p-4 transition duration-300 ease-in-out hover:bg-[#f599c15b] hover:shadow-2xl ${
//             index === 0 ? "animate-nudge" : ""
//           }`}
//         >
//           <div className="flex h-full items-center justify-center">
//             <Card className="flex h-full flex-col rounded-none">
//               <CardContent className="flex h-full flex-col items-center justify-center">
//                 {/* Head of card with image */}
//                 <div className="flex items-center justify-center bg-[#F6F7FB]">
//                   <img
//                     src={urlFor(product.image.asset).url()}
//                     alt={product.name}
//                     width={201}
//                     height={201}
//                     className="h-56 w-full object-cover"
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-base text-[#151875]">
//                     Comfort Handy Craft
//                   </span>
//                   <span className="ml-7 text-sm font-medium text-[#151875]">
//                     ${product.price}{" "}
//                     {product.discountPercentage > 0 && (
//                       <span className="ml-1 text-sm text-[#FB2E86] line-through">
//                         $
//                         {(
//                           parseFloat(product.price) *
//                           (1 + product.discountPercentage / 100)
//                         ).toFixed(2)}
//                       </span>
//                     )}
//                   </span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </CarouselItem>
//       ))}
//     </CarouselContent>
//   </Carousel>
// </>

  
//   );
// }

// export default page;

// //               className=""
// //             >
// //               {/* head of card with img */}
// //               <div className="flex items-center justify-center">
// //                 {" "}
// //                 <img
// //                   src={urlFor(product.image.asset).url()}
// //                   alt={product.name}
// //                   width={201}
// //                   height={201}
// //                   className="h-56 w-full rounded-t-lg object-cover"
// //                 />
// //               </div>
// // <span className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
// //   {product.name}
// // </span>
// // <Image src="/Group44.png" alt="circles" width={42} height={10} />
// // <div className="mt-2 flex items-center">
// //   <span className="text-lg font-bold text-[#151875]">
// //     ${product.price}
// //   </span>
// //   {product.discountPercentage > 0 && (
// //     <span className="ml-2 text-sm text-[#FB2E86] line-through">
// //       $
// //       {(
// //         parseFloat(product.price) *
// //         (1 + product.discountPercentage / 100)
// //       ).toFixed(2)}

// //     </span>
// //                 )}
// //               </div>
// //             </div>
// //           ))}

// // export default async function Home() {
// //

// //   return (
// //     <>
// //       {" "}
// //       <div className="flex flex-col items-center justify-center">
// //         <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
// //           {data.slice(0, 12).map((product) => (
// //             <div
// //               key={product._id}
// //               className="flex w-[270px] flex-col items-center p-4 transition duration-300 ease-in-out hover:shadow-lg"
// //             >
// //               {/* head of card with img */}
// //               <div className="flex items-center justify-center">
// //                 {" "}
// //                 <img
// //                   src={urlFor(product.image.asset).url()}
// //                   alt={product.name}
// //                   width={201}
// //                   height={201}
// //                   className="h-56 w-full rounded-t-lg object-cover"
// //                 />
// //               </div>
// //               <span className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
// //                 {product.name}
// //               </span>
// //               <Image src="/Group44.png" alt="circles" width={42} height={10} />
// //               <div className="mt-2 flex items-center">
// //                 <span className="text-lg font-bold text-[#151875]">
// //                   ${product.price}
// //                 </span>
// //                 {product.discountPercentage > 0 && (
// //                   <span className="ml-2 text-sm text-[#FB2E86] line-through">
// //                     $
// //                     {(
// //                       parseFloat(product.price) *
// //                       (1 + product.discountPercentage / 100)
// //                     ).toFixed(2)}

// //                   </span>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //       <div className="flex flex-col justify-center gap-7 pl-[5vh] md:flex-row md:pl-0">
// //         {/* Product 1 */}
// //         <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
// //           <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
// //             <Image src="/1168.png" alt="Product 1" width={178} height={178} />
// //           </div>
// //           <p className="text-center text-lg font-bold text-[#FB2E86]">
// //             Cantilever chair{" "}
// //           </p>
// //           <Image src="/141.png" alt="line" width={52} height={4} />
// //           <p className="text-sm font-semibold text-[#151875]">
// //             Code - Y523201{" "}
// //           </p>
// //           <p className="text-sm font-semibold text-[#151875]">$42.00</p>
// //         </div>

// //         {/* Product 2 */}
// //         <div className="flex h-[361px] w-[270px] flex-col items-center bg-[#2F1AC4] drop-shadow-md">
// //           <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB] pr-12">
// //             <Image src="/1111.png" alt="Product 1" width={236} height={270} />
// //           </div>
// //           <div className="flex h-full w-[270px] flex-col items-center justify-center gap-4">
// //             <p className="text-center text-lg font-bold text-white">
// //               Cantilever chair{" "}
// //             </p>
// //             <Image src="/141.png" alt="line" width={52} height={4} />
// //             <p className="text-sm font-semibold text-white">Code - Y523201 </p>
// //             <p className="text-sm font-semibold text-white">$42.00</p>
// //           </div>
// //         </div>

// //         {/* Product 3 */}
// //         <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
// //           <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
// //             <Image src="/1169.png" alt="Product 1" width={178} height={178} />
// //           </div>
// //           <p className="text-center text-lg font-bold text-[#FB2E86]">
// //             Cantilever chair{" "}
// //           </p>
// //           <Image src="/141.png" alt="line" width={52} height={4} />
// //           <p className="text-sm font-semibold text-[#151875]">
// //             Code - Y523201{" "}
// //           </p>
// //           <p className="text-sm font-semibold text-[#151875]">$42.00</p>
// //         </div>
// //         {/* Product 4 */}

// //         <div className="flex h-[361px] w-[270px] flex-col items-center gap-4 bg-white py-[17px] drop-shadow-md">
// //           <div className="flex h-[236px] w-[270px] items-center justify-center bg-[#F6F7FB]">
// //             <Image src="/rchr.png" alt="Product 1" width={178} height={178} />
// //           </div>
// //           <p className="text-center text-lg font-bold text-[#FB2E86]">
// //             Cantilever chair{" "}
// //           </p>
// //           <Image src="/141.png" alt="line" width={52} height={4} />
// //           <p className="text-sm font-semibold text-[#151875]">
// //             Code - Y523201{" "}
// //           </p>
// //           <p className="text-sm font-semibold text-[#151875]">$42.00</p>
// //         </div>
// //       </div>
// //       <div className="flex flex-col items-center justify-center">
// //         <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
// //           {data.slice(0, 12).map((product) => (
// //             <div
// //               key={product._id}
// //               className="flex w-[270px] flex-col items-center p-4 transition duration-300 ease-in-out hover:bg-[#51d0f715] hover:shadow-xl"
// //             >
// //               {/* head of card with img */}
// //               <div className="flex items-center justify-center">
// //                 <img
// //                   src={urlFor(product.image.asset).url()}
// //                   alt={product.name}
// //                   width={201}
// //                   height={201}
// //                   className="h-56 w-full rounded-t-lg object-cover"
// //                 />
// //               </div>
// //               <span className="mb-[8px] mt-[47px] text-center text-lg font-bold text-[#151875]">
// //                 {product.name}
// //               </span>
// //               <Image src="/Group44.png" alt="circles" width={42} height={10} />
// //               <div className="mt-2 flex items-center">
// //                 <span className="text-lg font-bold text-[#151875]">
// //                   ${product.price}
// //                 </span>
// //                 {product.discountPercentage > 0 && (
// //                   <span className="ml-2 text-sm text-[#FB2E86] line-through">
// //                     $
// //                     {(
// //                       parseFloat(product.price) *
// //                       (1 + product.discountPercentage / 100)
// //                     ).toFixed(2)}
// //                   </span>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //     </>
// //   );
// // }
// // components/CarouselSize.js
