import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTruck, FaCheckCircle, FaTag, FaRecycle } from 'react-icons/fa';

export default function About() {
  return (
    <div>
{/* First Section: Text and Button */}
<div className="flex flex-col md:flex-row">
  {/* First Column: Text */}
  <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center">
    <p className="text-lg md:text-xl lg:text-lg font-serif text-left sm:text-center text-gray-800 leading-relaxed md:leading-relaxed md:px-12 px-6">
      A brand built on the love of craftsmanship, quality, and outstanding customer service. 
      We are committed to delivering timeless pieces that bring beauty and joy into your life, 
      with an unwavering dedication to excellence.
    </p>
  </div>

  {/* Second Column: Button */}
  <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
    <Link href="/productlisting">
      <button className="px-8 py-4 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
        View Our Products
      </button>
    </Link>
  </div>
</div>



      {/* Second Section: Story and Image */}
      <div className="container mx-auto p-4 mt-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Left Column: Story */}
    <div className="bg-gray-900 text-white p-8 rounded-md h-[32rem] flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-serif mb-4 px-3 py-3">It started with a small idea.</h2>
        <p className="text-lg mb-4 py-5 px-3 font-extralight pr-24">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
      </div>
      {/* Button inside the div, with responsive padding and margin */}
     
      <Link href="/productlisting">
    <button className="px-8 py-4 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
      View Collection
    </button>
  </Link>
    </div>

    {/* Right Column: Image */}
    <div className="relative h-[32rem]">
      <Image
        src="/about1.png"
        alt="Living room"
        layout="fill"
        objectFit="cover"
        className="rounded-md"
      />
    </div>
  </div>
</div>


<section className="w-full bg-white mt-12">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center">
    {/* Left Image Section */}
    <div className="relative w-full h-[500px] md:h-screen">
      <Image
        src="/about2.png" // Replace with your actual image path
        alt="Modern Living Space"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>

    {/* Right Content Section */}
    <div className="p-6 md:p-12 h-full flex flex-col justify-between">
      <div>
        <h2 className="mr-5 text-2xl md:text-4xl font-semibold leading-tight mb-12 text-gray-900">
          Our service isn&apos;t just personal, it&apos;s actually 
          hyper personally exquisite
        </h2>
        <p className="mr-10 text-gray-600 mb-12 text-sm md:text-base m">
          When we started <strong>Avion</strong>, the idea was simple. Make
          high quality furniture affordable and available for the mass market.
        </p>
        <p className=" mr-10 text-gray-600 text-sm md:text-base">
          Handmade, and lovingly crafted furniture and homeware is what we
          live, breathe and design so our Chelsea boutique becomes the hotbed
          for the London interior design community.
        </p>
      </div>

      {/* Button */}
      <div className="mt-8 mb-12">
      <Link href="/blog">
 <button className="px-8 py-4 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
      Get In Touch
    </button>
</Link>
      </div>
    </div>
  </div>
</section>







       {/* New Section: What makes our brand different */}
       <section className="bg-white py-12 mt-16 w-full">
  <h2 className="text-2xl md:text-3xl text-center mb-8">
    What makes our brand different
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1280px] mx-auto px-6">
    {[
      {
        icon: <FaTruck size={25} className="text-[#2A254B]" />,
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard.",
      },
      {
        icon: <FaCheckCircle size={25} className="text-[#2A254B]" />,
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftsmanship.",
      },
      {
        icon: <FaTag size={25} className="text-[#2A254B]" />,
        title: "Unbeatable prices",
        description: "For our materials and quality, you won’t find better prices anywhere.",
      },
      {
        icon: <FaRecycle size={25} className="text-[#2A254B]" />,
        title: "Recycled packaging",
        description: "We use 100% recycled packaging to ensure our footprint is manageable.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-start text-start space-y-4 p-4 border shadow-sm hover:scale-105 hover:bg-gray-100 hover:shadow-lg transition-all duration-300"
      >
        <div>{item.icon}</div>
        <h3 className="text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
      </div>
    ))}
  </div>
</section>

    {/* Join the Club Section */}
<div className="bg-white pt-12 pb-14 mt-16 text-center w-full mb-28 px-4 sm:px-8">
  <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
    Join the club and get the benefits
  </h2>
  <p className="mt-4 text-gray-600 max-w-xl mx-auto">
    Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
  </p>
  <div className="mt-16 flex flex-col sm:flex-row justify-center items-center sm:gap-0 gap-4">
    <input
      type="text"
      placeholder="You@email.com"
      className="px-4 py-3 w-full sm:w-[300px] md:w-[400px] border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none sm:rounded-l-lg"
    />
    <button className="px-4 py-3 w-full sm:w-auto bg-[#4E4D93] text-white font-medium shadow-md hover:bg-gray-700 border border-gray-300 sm:rounded-r-lg">
      Sign Up
    </button>
  </div>
</div>

    </div>
  );
}
