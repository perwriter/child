"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Figma Design URL with animation */}
      <div className="relative cursor-pointer px-6 py- animate-slideRight overflow-hidden">
        <Link
          href="https://www.figma.com/design/rJBl5ymqF7RmUkAMo7iPOW/E-Learning-Platform-(Community)?node-id=441-4875&t=9ISnz5Qo6a70ON60-0"
          target="_blank"
          className="block text-gray-900 font-medium text-lg hover:text-[#945069] transform transition-all duration-300 whitespace-nowrap"
        >
          The Figma Design{" "}
          <span className="text-[#945069] hover:text-[#2B788B] cursor-pointer">
            https://www.figma.com/design/rJBl5ymqF7RmUkAMo7iPOW/E-Learning-Platform-(Community)?node-id=441-4875&t=9ISnz5Qo6a70ON60-0
          </span>
        </Link>
      </div>

      <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto sticky top-0 bg-white shadow-md z-50">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-black">
            GlobalTalk
          </a>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Home
            </Link>
            <Link href="/textbook" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Textbook
            </Link>
            <Link href="/statistics" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Statistics
            </Link>
            <Link href="/games" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Games
            </Link>
          </div>
        </div>

        {/* Desktop and Tablet view for profile and sign out */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#C3DCE3] flex items-center justify-center text-[#2B788B]">
              A
            </div>
            <span className="text-gray-900">Alex</span>
          </div>
          <button className="text-gray-900 hover:text-gray-700">
            Sign Out →
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-gray-900" />
            ) : (
              <FaBars className="text-2xl text-gray-900" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Home
            </Link>
            <Link href="/textbook" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Textbook
            </Link>
            <Link href="/statistics" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Statistics
            </Link>
            <Link href="/games" className="text-gray-500 hover:text-gray-900 focus:text-black">
              Games
            </Link>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-8 h-8 rounded-full bg-[#C3DCE3] flex items-center justify-center text-[#2B788B]">
                A
              </div>
              <span className="text-gray-900">Alex</span>
            </div>
            <button className="text-gray-900 hover:text-gray-700 mt-2">
              Sign Out →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
