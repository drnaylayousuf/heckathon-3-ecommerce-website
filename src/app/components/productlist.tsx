import Image from "next/image";
import Link from "next/link";

import { FaTruck, FaCheckCircle, FaTag, FaRecycle } from "react-icons/fa";

export default function ProductList() {
  return (
    <div className="px-6 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">
    You might also like
  </h2>
     {/* Images Section */}
<div className="flex flex-wrap justify-center gap-4 mt-6">
  {[
    {
      src: "/photo1.png",
      name: "Ceramic Vase",
      price: "€25",
    },
    {
      src: "/photo2.png",
      name: "Ceramic Bowl",
      price: "€30",
    },
    {
      src: "/photo3.png",
      name: "Ceramic Plate",
      price: "€20",
    },
    {
      src: "/photo4.png",
      name: "Ceramic Mug",
      price: "€15",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="w-[300px] h-[450px] overflow-hidden text-start relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100"
    >
      <Image
        src={item.src}
        alt={item.name}
        className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
        width={300} // Set width for the image dynamically
        height={360} // Set height for the image dynamically
      />
      <h3 className="mt-2 text-lg font-medium text-gray-800 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
        {item.name}
      </h3>
      <p className="text-sm text-gray-600 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
        {item.price}
      </p>
    </div>
  ))}
</div>


      {/* Center Button */}
      <div className="mt-12 text-center">
    
    <Link href={"/productlisting"}>
    <button className="px-6 py-3 bg-[#4E4D93] text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:bg-gray-700 hover:scale-105 hover:shadow-lg">
        View Collection
      </button>
    </Link>

      </div>

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
    <Link href =""></Link>
    <button className="px-4 py-3 w-full sm:w-auto bg-[#4E4D93] text-white font-medium shadow-md hover:bg-gray-700 border border-gray-300 sm:rounded-r-lg">
      Sign Up
    </button>
  </div>
</div>



    </div>
  );
}
