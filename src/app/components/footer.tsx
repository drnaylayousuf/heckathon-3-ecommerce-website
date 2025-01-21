import Link from 'next/link';

import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> {/* Reduced gap */}
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Menu</h3>
            <ul>
              <li><Link href="#" className="hover:text-gray-400">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Recently Viewed</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Popular This Week</Link></li>
              <li><Link href="#" className="hover:text-gray-400">All Products</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg mb-4">Categories</h3>
            <ul>
              <li><Link href="#" className="hover:text-gray-400">Crockery</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Furniture</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Homeware</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Plant Pots</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Chairs</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Clockery</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg mb-4">Our company</h3>
            <ul>
              <li><Link href="mailto:info@example.com" className="hover:text-gray-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Vacancies</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Contact Us </Link></li>
              <li><Link href="#" className="hover:text-gray-400">Privacy</Link></li>
              <li><Link href="#" className="hover:text-gray-400">Returns Policy </Link></li>
            </ul>
          </div>

          {/* Join Our Mailing List Section */}
          <div className="col-span-1 mt-0 md:mt-0 "> {/* Removed margin-top */}
            <h3 className="text-lg mb-4 ">Join Our Mailing List</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-7 py-4 bg-gray-700 text-white  w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4  hover:bg-blue-700 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">Copyright &copy; {new Date().getFullYear()} Your Company Name</p>
          <div className="flex space-x-6 md:space-x-6 justify-center md:justify-start">
            <Link href="#" className="text-white hover:text-gray-400">
              <FaLinkedin size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaSkype size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="#" className="text-white hover:text-gray-400">
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
