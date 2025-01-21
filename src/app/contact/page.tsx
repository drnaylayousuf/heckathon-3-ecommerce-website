import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg space-y-12">
      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>

      {/* Contact Information */}
      <div className="space-y-8">
        {/* Phone */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaPhoneAlt className="mr-2 text-blue-500" /> Number
          </h2>
          <p className="text-gray-600">+1 (234) 567-890</p>
        </div>

        {/* Email */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaEnvelope className="mr-2 text-green-500" /> Email Address
          </h2>
          <p className="text-gray-600">contact@example.com</p>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-xl font-semibold flex items-center text-gray-800">
            <FaMapMarkerAlt className="mr-2 text-red-500" /> Store Location
          </h2>
          <p className="text-gray-600">123 Main Street, Cityville</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6">
  {/* Facebook */}
  <Link
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <FaFacebook className="text-blue-700 text-3xl cursor-pointer" />
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <FaInstagram className="text-pink-500 text-3xl cursor-pointer" />
  </Link>

  {/* LinkedIn */}
  <Link
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <FaLinkedin className="text-blue-500 text-3xl cursor-pointer" />
  </Link>

  {/* Twitter */}
  <Link
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition-transform"
  >
    <FaTwitter className="text-blue-400 text-3xl cursor-pointer" />
  </Link>
</div>


      {/* Embedded Map */}
      <div className="mt-4">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345090747!2d144.9537363155044!3d-37.81627944202179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772d7ba6d67c!2s123%20Main%20Street%2C%20Cityville!5e0!3m2!1sen!2sus!4v1692384000000!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Divider */}
      <hr />

      {/* Get in Touch Section */}
      <div className="p-6 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              style={{ minHeight: '150px' }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring focus:ring-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}




//////////////////////////////////////


// import ProductList from '@/app/components/productlist';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';


// interface Params {
//   params: {
//     id: string;
//   };
// }

// interface Iproduct {
//   _id: string;
//   image: string;
//   name: string;
//   price: number;
//   description: string;
//   price_id: string;
  
// }



// export default async function ProductPage({ params }: Params) {
//   const { id } = params;
                                  
//   // Fix the query syntax here by properly closing the object   
//   const product:Iproduct = await client.fetch(
//     ` 
// *[_type == "product" && _id == $id][0]{
//       name,
//       image,
//       description,
//       price,
//        _id,
      
//     }
//       `, // Fixed the closing brace and added a comma for correct formatting
//     { id }
//   );
//   console.log(product)

//   if (!product) {
//     return <div className="text-center mt-20 text-gray-500">Product not found.</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
//         <div className="w-full lg:w-1/2">
//           <Image
//             src={urlFor(product.image).url()} // Ensure that product.image is correct here
//             alt={product.name}
//             width={500}
//             height={500}
//             className="rounded-md object-cover"
//           />
//         </div>
//         <div className="w-full lg:w-1/2">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           {/* <p className="text-xl text-amber-500 font-semibold mb-4">Price: ${product.price}</p> */}
//           {/* <p className="text-gray-700 mb-6">{product.description}</p> */}
//         </div>
//       </div>
//       <div className="mt-12">
//         <ProductList />
//       </div>
//     </div>
//   );
// }


/////////////////////




