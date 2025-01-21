import { FaTruck, FaCheckCircle, FaTag, FaRecycle } from "react-icons/fa"; // Import icons
import Image from "next/image";
import Link from "next/link";


export const dynamic = "force-dynamic";


export default function Home() {
  return (
    <div className="mt-14  flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex max-w-[1280px] h-[584px] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Text Box */}
        <div className="flex flex-col justify-between bg-[#2A254B] text-white w-full md:w-[760px] h-full p-8">
          <div>
            <h1 className="text-3xl md:text-3xl ml-3 p-5">
              The furniture brand for the <br /> future, with timeless designs
            </h1>
            <Link href="/productlisting" className="ml-6 mt-8">
  <button className="px-6 py-3 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
    View Collection
  </button>
</Link>
          </div>
          <p className="text-sm md:text-base mb-6 p-3">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="hidden md:flex items-center justify-center bg-teal-100 w-[520px] h-full">
          <Image
            src="/right-image.png" // Replace with the path to your chair image
            alt="Chair"
            className=""
            height={620} width={584}
          />
        </div>
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

      {/* New Ceramics Section */}
      <div className=" self-start ml-12 mt-8 text-indigo-950 text-2xl font-semibold">
        New Ceramics
      </div>

           {/* Images Section */}
     <div className="flex flex-wrap justify-center gap-4 mt-6">
  {[
    { src: "/photo1.png", name: "Ceramic Vase", price: "€25" },
    { src: "/photo2.png", name: "Ceramic Bowl", price: "€30" },
    { src: "/photo3.png", name: "Ceramic Plate", price: "€20" },
    { src: "/photo4.png", name: "Ceramic Mug", price: "€15" },
  ].map((item, index) => (
    <div
      key={index}
      className="group w-[305px] h-[450px] overflow-hidden text-start relative transform transition-all duration-500 ease-in-out hover:scale-105 hover:z-10"
    >
      <div className="transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-100 group-hover:shadow-xl">
        <Image
          src={item.src} // Replace with the paths to your images
          alt={item.name}
          className="object-cover brightness-60 group-hover:brightness-100 transition-all duration-500 ease-in-out"
          height={400}
          width={350}
        />
      </div>
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
  <div className="mt-12">
  <Link href="/productlisting">
    <button className="px-4 py-3 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
      View Collection
    </button>
  </Link>
</div>

{/* Popular Products Section */}
<div className="pb-7 self-start ml-4 sm:ml-12 mt-8 text-indigo-950 text-2xl font-semibold">
  Our Popular Products
</div>

{/* Popular Products Images Section */}
<div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-6">
  {/* First image with larger width */}
  <div className="group w-full sm:w-[60%] h-auto overflow-hidden text-start relative transition-all duration-500 ease-in-out transform hover:scale-105 hover:z-10">
    <Image
      src="/pp1.png" // Replace with the path to your image
      alt="Popular Product 1"
      className="h-[200px] sm:h-[300px] lg:h-[400px] object-cover w-full group-hover:brightness-100 transition-all duration-300 ease-in-out"
      width={650}
      height={500}
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
    <h3 className="mt-2 text-lg font-medium text-gray-800 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      Popular Product 1
    </h3>
    <p className="text-sm text-gray-600 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      €40
    </p>
  </div>

  {/* Second image with medium width */}
  <div className="group w-full sm:w-[30%] h-auto overflow-hidden text-start relative transition-all duration-500 ease-in-out transform hover:scale-105 hover:z-10">
    <Image
      src="/pp2.png" // Replace with the path to your image
      alt="Popular Product 2"
      className="h-[200px] sm:h-[300px] lg:h-[400px] object-cover w-full group-hover:brightness-100 transition-all duration-300 ease-in-out"
      width={320}
      height={250}
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
    <h3 className="mt-2 text-lg font-medium text-gray-800 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      Popular Product 2
    </h3>
    <p className="text-sm text-gray-600 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      €50
    </p>
  </div>

  {/* Third image with smaller width */}
  <div className="group w-full sm:w-[30%] h-auto overflow-hidden text-start relative transition-all duration-500 ease-in-out transform hover:scale-105 hover:z-10">
    <Image
      src="/pp3.png" // Replace with the path to your image
      alt="Popular Product 3"
      className="h-[200px] sm:h-[300px] lg:h-[400px] object-cover w-full group-hover:brightness-100 transition-all duration-300 ease-in-out"
      width={320}
      height={250}
    />
    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
    <h3 className="mt-2 text-lg font-medium text-gray-800 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      Popular Product 3
    </h3>
    <p className="text-sm text-gray-600 ml-2 group-hover:text-indigo-600 transition-colors duration-300">
      €60
    </p>
  </div>
</div>



      {/* New Button after Popular Products */}
   <div className="mt-10 mb-20">
  <Link href="/productlisting">
    <button className="px-7 py-3 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
      View All Product
    </button>
  </Link>
</div>
       

       
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




  {/* Brand Story Section */}
<section className=" flex flex-col lg:flex-row items-center lg:items-start justify-between w-full h-auto lg:h-[481px] bg-white">
  {/* Text Section */}
  <div className=" w-full lg:w-1/2 px-6 lg:px-12 py-8 lg:py-16">
    <h2 className="px-5 text-3xl lg:text-4xl text-gray-900 mb-4">
      From a studio in London to a global brand with over 400 outlets
    </h2>
    <p className="px-5 text-base lg:text-xl text-gray-700 mb-4">
      When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
    </p>
    <p className="px-5 text-base lg:text-xl text-gray-700 mb-5">
      Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique becomes the hotbed for the London interior design community.
    </p>
    <Link href="/blog">
 <button className="mb-12  px-6 py-3 bg-gradient-to-r from-[#4E4D93] to-[#6A6AAB] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:from-[#6A6AAB] hover:to-[#4E4D93]">
      Get In Touch
    </button>
</Link>
  </div>

  {/* Image Section */}
  <div className="w-full lg:w-1/2 h-[300px] lg:h-full bg-cover bg-center" 
    style={{
      backgroundImage: "url('/getintouch.png')"
    }}>
  </div>
</section>



    </div>
  );
}
