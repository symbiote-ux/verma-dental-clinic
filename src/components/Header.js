'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#FFF7F0] z-50 text-[#1D1D1D] shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center p-4">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <Image
            src="/images/smileschangeslives-logo.png"
            alt="Smiles Changes Lives logo"
            width={50}
            height={50}
          />
          <h1 className="text-xl font-bold text-[#1D1D1D]">
            Dr. Verma’s Dental Surgery & Braces Centre
          </h1>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-[#1D1D1D]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
            )}
          </button>
        </div>

        {/* Navbar Links - visible on large screens */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/about" className="text-[#1D1D1D] hover:text-[#18A2BB] font-semibold transition duration-300">
            About
          </Link>
          <Link href="/services" className="text-[#1D1D1D] hover:text-[#18A2BB] font-semibold transition duration-300">
            Services
          </Link>
          <Link href={`tel:07500225225`} className="flex items-center space-x-2">
            <button className="text-lg text-white bg-[#18A2BB] font-semibold rounded-full border-2 border-transparent p-2 px-4 hover:bg-white hover:text-[#18A2BB] hover:border-[#18A2BB] transition duration-300">
              075002 25225
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#18A2BB] shadow-md">
          <ul className="flex flex-col items-center space-y-2 p-4">
            <li>
              <Link href="/about" className="text-white font-semibold text-lg hover:text-[#18A2BB]">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white font-semibold text-lg hover:text-[#18A2BB]">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
