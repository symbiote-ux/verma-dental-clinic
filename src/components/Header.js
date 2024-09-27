'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Services', route: '/services' },
  {
    title: 'Braces',
    route: '/braces',
  },
  { title: 'Reviews', route: '/reviews' },
  { title: 'Contact', route: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-[#FFF7F0] z-50 text-[#1D1D1D] shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start items-center p-4">
        <div className="flex justify-start items-center w-full mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/logo/smileschangeslives-logo.png"
              alt="Smiles Changes Lives logo"
              width={50}
              height={50}
            />
          </Link>
          {/* Hide heading on small screens and show it on medium and larger screens */}
          <h1 className="hidden md:block text-xl font-bold text-[#1D1D1D] ml-4">
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
        <nav className="hidden md:flex space-x-6 items-center text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.route}
              className="text-[#1D1D1D] hover:text-[#18A2BB] font-semibold transition duration-300"
              href={item.route}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#18A2BB] shadow-md">
          <ul className="flex flex-col items-start space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.route} className="w-full">
                <Link
                  href={item.route}
                  className="block w-full text-white font-semibold text-lg px-4 py-2 hover:bg-[#FFF7F0] hover:text-[#1D1D1D] transition duration-300"
                  onClick={() => setMenuOpen(false)} // Close the menu after clicking a link
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
