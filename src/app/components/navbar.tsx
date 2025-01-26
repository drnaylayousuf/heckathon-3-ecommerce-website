
"use client";

import { FiSearch } from "react-icons/fi";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchBar, setShowSearchBar] = useState(false); // State to toggle search bar visibility
  const searchRef = useRef<HTMLDivElement | null>(null); // Ref to track the search bar container

  const { cartDetails, handleCartClick } = useShoppingCart();

  // Calculate the total number of items in the cart
  const totalItems = Object.values(cartDetails || {}).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        showSearchBar &&
        searchRef.current &&
        !searchRef.current.contains(target) &&
        !target.closest(".menu-toggle")
      ) {
        setShowSearchBar(false); // Hide search bar if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearchBar]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    // Redirect to the search results page
    window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="shadow-sm relative">
      {/* Top Navbar */}
      <div className="flex justify-between items-center py-4 px-6 border-b">
        {/* Center: Logo */}
        <h1 className="text-blue-500 mr-28 text-2xl font-semibold tracking-wide sm:text-center sm:flex-1">
          Avion
        </h1>

        {/* Right: Icons and Hamburger Menu for Small Screens */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="relative"
            onClick={() => setShowSearchBar((prev) => !prev)} // Toggle search bar visibility on mobile
          >
            <FiSearch className="text-lg cursor-pointer text-blue-500" />
          </button>
          {showSearchBar && (
            <div ref={searchRef} className="absolute top-0 right-0 w-full bg-white p-2 shadow-md">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
                />
                <button type="submit" className="absolute right-2 top-1.5">
                  <FiSearch className="text-lg cursor-pointer " />
                </button>
              </form>
            </div>
          )}
          <button onClick={() => handleCartClick()} className="relative">
            <FaShoppingCart className="text-blue-500 text-lg cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <AiOutlineMenu
            role="button"
            tabIndex={0}
            aria-label="Toggle Menu"
            className="text-blue-500 text-2xl cursor-pointer menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </div>

        {/* Right: Navigation Links, Cart, and User Icons for Larger Screens */}
        <div className="hidden sm:flex items-center space-x-6">
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-blue-500 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-blue-500 hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-500 hover:text-gray-900">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/productlisting" className="text-blue-500 hover:text-gray-900">
                Products
              </Link>
            </li>
          </ul>
          <button onClick={() => handleCartClick()} className="relative">
            <FaShoppingCart className="text-blue-500 text-lg cursor-pointer" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <Link href="/signup">
            <FaUserCircle className="text-blue-500 text-lg cursor-pointer" />
          </Link>

          {/* Search Bar for Large Screens */}
          <div className="hidden lg:flex items-center gap-6 relative">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#23A6F0]"
              />
              <button type="submit" className="absolute right-2 top-2">
                <FiSearch className="text-lg cursor-pointer mt-1 text-blue-500" />
              </button>
            </form>
            
            {/* Cart item count next to the search icon */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-12 bg-blue-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg mt-2 rounded-md z-50">
              <ul className="py-2">
                {searchResults.map((product) => (
                  <li key={product._id} className="px-4 py-2 hover:bg-gray-100">
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center gap-4"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">${product.price}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-10 flex justify-end">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-25"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Drawer Menu */}
          <div className="mobile-menu relative bg-white w-64 h-full shadow-lg p-6 flex flex-col space-y-4">
            <IoMdClose
              role="button"
              tabIndex={0}
              aria-label="Close Menu"
              className="text-gray-600 text-2xl cursor-pointer self-end"
              onClick={() => setMenuOpen(false)}
            />
            <Link href="/" className="text-blue-500 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-blue-500 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/contact" className="text-blue-500 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/productlisting" className="text-blue-500 hover:text-gray-900">
              Products
            </Link>
            <Link href="/signup" className="text-blue-500 hover:text-gray-900">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}


















//////////////////////////
//  {/* Bottom Navbar Items for Mobile */}
//  <div className="flex flex-col space-y-2 pt-4">
//  <Link href="/plantpots" className="hover:text-gray-900 hover:underline">
//    Plant pots
//  </Link>
//  <Link href="/ceramics" className="hover:text-gray-900 hover:underline">
//    Ceramics
//  </Link>
//  <Link href="/tables" className="hover:text-gray-900 hover:underline">
//    Tables
//  </Link>
//  <Link href="/chairs" className="hover:text-gray-900 hover:underline">
//    Chairs
//  </Link>
//  <Link href="/crockery" className="hover:text-gray-900 hover:underline">
//    Crockery
//  </Link>
//  <Link href="/tableware" className="hover:text-gray-900 hover:underline">
//    Tableware
//  </Link>
//  <Link href="/cutlery" className="hover:text-gray-900 hover:underline">
//    Cutlery
//  </Link>
// </div> 


// {/* Bottom Navbar for Larger Screens */}
// <div className="hidden sm:flex justify-center items-center space-x-8 py-3 text-sm text-gray-600">
// <Link href="/plantpots" className="text-amber-400 hover:text-blue-900 hover:underline">
// Plant pots
// </Link>
// <Link href="/ceramics" className="text-amber-400 hover:text-blue-900 hover:underline">
// Ceramics
// </Link>
// <Link href="/tables" className="text-amber-400 hover:text-blue-900 hover:underline">
// Tables
// </Link>
// <Link href="/chairs" className="text-amber-400 hover:text-blue-900 hover:underline">
// Chairs
// </Link>
// <Link href="/crockery" className="text-amber-400 hover:text-blue-900hover:underline">
// Crockery
// </Link>
// <Link href="/tableware" className="text-amber-400 hover:text-blue-900 hover:underline">
// Tableware
// </Link>
// <Link href="/cutlery" className="text-amber-400 hover:text-blue-900 hover:underline">
// Cutlery
// </Link>
// </div> 

