'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#FFF7F0] shadow-md z-50 text-[#1D1D1D]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/smileschangeslives-logo.png"
            alt="smiles changes lives logo"
            width={40}
            height={40}
          />
          <h1 className="text-lg font-bold">
            Dr. Verma’s Dental Surgery & Braces Centre
          </h1>
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
        <nav className="hidden lg:flex space-x-4 items-center">
          <Link href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600">
            Services
          </Link>

          <Link href={`tel:${'+918037296355'}`}>
            <button className="flex items-center text-lg justify-center text-white bg-[#18A2BB] rounded-xl border-2 border-transparent p-2 hover:bg-white hover:text-[#18A2BB] hover:border-[#18A2BB] transition-all duration-300">
              +918037296355
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600"
              >
                Services
              </Link>
            </li>
            <li>
              <Link href={`tel:${'+918037296355'}`}>
                <button className="flex items-center justify-center text-white bg-[#18A2BB] p-2 rounded-xl border-2 border-transparent hover:bg-white text-lg hover:text-[#18A2BB] hover:border-[#18A2BB] transition-all duration-300">
                  +918037296355
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
