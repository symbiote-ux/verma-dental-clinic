'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Clinic Logo" className="h-8 w-8" /> */}
          <h1 className="text-lg font-bold">Dental Clinic</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navbar Links - visible on large screens */}
        <nav className="hidden lg:flex space-x-4">
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-700 hover:text-blue-600"
          >
            Contact Us
          </Link>
          <Link href="/about-us" className="text-gray-700 hover:text-blue-600">
            About Us
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-gray-700 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-gray-700 hover:text-blue-600"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
