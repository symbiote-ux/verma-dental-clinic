'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#FFF7F0] z-50 text-[#1D1D1D]">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/smileschangeslives-logo.png"
            alt="smiles changes lives logo"
            width={50}
            height={50}
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
            {menuOpen ? (
              '✖'
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
        <nav className="hidden lg:flex space-x-4 items-center">
          <Link href="/about" className="hover:text-[#18A2BB] font-semibold">
            About
          </Link>
          <Link href="/services" className="font-semibold hover:text-[#18A2BB]">
            Services
          </Link>
          <Link href={`tel:${'075002 25225'}`}>
            <button className="flex items-center text-lg justify-center text-white  font-semibold bg-[#18A2BB] rounded-3xl border-2 border-transparent p-2 px-4 hover:bg-white hover:text-[#18A2BB] hover:border-[#18A2BB] transition-all duration-300">
              075002 25225
            </button>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-[#18A2BB] shadow-md">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/about" className=" text-white font-semibold px-2">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-white font-semibold p-2">
                Services
              </Link>
            </li>
            <li>
              <Link href={`tel:${'075002 25225'}`}>
                <button className="flex items-center justify-start text-[#18A2BB] bg-white  font-semibold p-2 border-2 w-full border-transparent hover:bg-[#18A2BB] text-lg hover:text-white transition-all duration-300">
                  075002 25225
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
