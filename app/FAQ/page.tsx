import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mi from "@/components/Mi";
import Nvbr from "@/components/Nvbr";
import Bredcrumb from "@/components/Bredcrumb";
import Image from "next/image";
function FAQ_Page() {
  return (
    <div>
      <Header />
      <Nvbr />
      <Bredcrumb pageName="FAQ" />
        <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* General Information Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-6">General Information</h2>

          <div className="space-y-6">
            {[
              {
                title: 'Eu dictumst cum at sed euismod condimentum?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Magna bibendum est fermentum eros.',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Odio muskana hak eris conseekin sceleton?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
              {
                title: 'Elit id blandit sabara boi velit gua mara?',
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
              },
            ].map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ask a Question Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Ask a Question</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject*
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Type Your Message*
              </label>
              <textarea
                id="message"
                placeholder="Type Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>
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
    <Footer />
      <Mi />
    </div>
  )
}

export default FAQ_Page
