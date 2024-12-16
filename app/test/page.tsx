import React from 'react'

function page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-8 md:flex-row">
            {/* Left Text Section */}
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-[#1D3178]">
                20% Discount Of All Products
              </h2>
              <h3 className="text-xl font-semibold text-[#FB2E86]">
                Eams Sofa Compact
              </h3>
              <p
                className={`${lato.className} text-base font-normal text-[#B7BACB]`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
                feugiat habitasse nec, bibendum condimentum.
              </p>
              {/* Features List */}
              <div className="flex gap-11">
                <ul
                  className={`${lato.className} flex flex-col gap-2 text-base font-normal text-[#B7BACB]`}
                >
                  <li className="flex items-center justify-center">
                    <Image src={"/check.png"} alt="check" width={24} height={24}/>
                    Material expose like metals
                  </li>
                  <li className="flex items-center justify-center">
                  <Image src={"/check.png"} alt="check" width={24} height={24}/>
                  Simple neutral colours.
                  </li>
                </ul>
                <ul
                  className={`${lato.className} flex flex-col gap-2 text-base font-normal text-[#B7BACB]`}
                >
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
              <button className="mt-4 w-[150px] rounded bg-[#FB2E86] p-2 text-white">
                Shop Now
              </button>
            </div>

            {/* Right Image Section */}
            <div className="relative mt-8 flex items-center justify-center md:mt-0">
              <div className="flex h-[400px] w-[400px] items-center justify-center rounded-full bg-[#FCECF1]">
                
              </div>
            </div>
          </div>
    </div>
  )
}

export default page
