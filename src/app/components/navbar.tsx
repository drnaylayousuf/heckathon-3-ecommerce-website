"use client";

import {  FaShoppingCart, FaUserCircle ,  FaHeart} from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (menuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const { handleCartClick } = useShoppingCart();

  return (
    <div className="shadow-sm relative">
      {/* Top Navbar */}
      <div className="flex justify-between items-center py-4 px-6 border-b">
        {/* Center: Logo */}
        <h1 className="text-blue-500 mr-28 text-2xl font-semibold tracking-wide sm:text-center sm:flex-1">
          Avion
        </h1>

        {/* Right: Icons and Hamburger Menu for Small Screens */}
        <div className="sm:hidden flex items-center space-x-4">
          <button 
           onClick={() => handleCartClick()}
          >
           <FaShoppingCart className="text-blue-500 text-lg cursor-pointer" />
          </button>
          <AiOutlineMenu
            role="button"
            tabIndex={0}
            aria-label="Toggle Menu"
            className="text-blue-500 text-2xl cursor-pointer menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          />
          {/* <button className="bg-red-900" >
          <FaHeart />
          </button> */}
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
          <button 
          onClick={() => handleCartClick()}
          >
  <FaShoppingCart className="text-blue-500 text-lg cursor-pointer" />
</button>
<Link href="/signup">
  <FaUserCircle className="text-blue-500 text-lg cursor-pointer" />
</Link>

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

            {/* Bottom Navbar Items for Mobile */}
            {/* <div className="flex flex-col space-y-2 pt-4">
              <Link href="/plantpots" className="hover:text-gray-900 hover:underline">
                Plant pots
              </Link>
              <Link href="/ceramics" className="hover:text-gray-900 hover:underline">
                Ceramics
              </Link>
              <Link href="/tables" className="hover:text-gray-900 hover:underline">
                Tables
              </Link>
              <Link href="/chairs" className="hover:text-gray-900 hover:underline">
                Chairs
              </Link>
              <Link href="/crockery" className="hover:text-gray-900 hover:underline">
                Crockery
              </Link>
              <Link href="/tableware" className="hover:text-gray-900 hover:underline">
                Tableware
              </Link>
              <Link href="/cutlery" className="hover:text-gray-900 hover:underline">
                Cutlery
              </Link>
            </div> */}
          </div>
        </div>
      )}

      {/* Bottom Navbar for Larger Screens */}
      {/* <div className="hidden sm:flex justify-center items-center space-x-8 py-3 text-sm text-gray-600">
        <Link href="/plantpots" className="text-amber-400 hover:text-blue-900 hover:underline">
          Plant pots
        </Link>
        <Link href="/ceramics" className="text-amber-400 hover:text-blue-900 hover:underline">
          Ceramics
        </Link>
        <Link href="/tables" className="text-amber-400 hover:text-blue-900 hover:underline">
          Tables
        </Link>
        <Link href="/chairs" className="text-amber-400 hover:text-blue-900 hover:underline">
          Chairs
        </Link>
        <Link href="/crockery" className="text-amber-400 hover:text-blue-900hover:underline">
          Crockery
        </Link>
        <Link href="/tableware" className="text-amber-400 hover:text-blue-900 hover:underline">
          Tableware
        </Link>
        <Link href="/cutlery" className="text-amber-400 hover:text-blue-900 hover:underline">
          Cutlery
        </Link>
      </div> */}
    </div>
  );
}
