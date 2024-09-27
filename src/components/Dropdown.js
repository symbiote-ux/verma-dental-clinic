import React, { useState } from 'react';
import Link from 'next/link';

export default function Dropdown({ item, mobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = item?.children || [];

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="relative w-full">
        {/* Button to open/close dropdown */}
        <button
          className={`text-[#2a1f16] w-full hover:text-[#1a130c] font-semibold transition duration-300 ${
            mobile
              ? 'block text-lg px-4 py-2 bg-[#18A2BB]'
              : 'text-[#1D1D1D] hover:text-[#18A2BB]'
          }`}
          onClick={toggle}
        >
          {item.title}
        </button>

        {/* Dropdown content for mobile view */}
        <div
          className={`w-full ${
            mobile ? 'bg-[#18A2BB]' : 'bg-[#FFF7F0]'
          } shadow-md py-2 ${
            isOpen ? 'block' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          {menuItems.map((menuItem) => (
            <Link
              key={menuItem.route}
              href={menuItem.route}
              onClick={() => {
                toggle();
                if (mobile) setIsOpen(false);
              }} // Close dropdown on click
              className={`block w-full px-4 py-2 ${
                mobile ? 'text-white' : 'text-[#1D1D1D]'
              } hover:bg-[#FFF7F0] hover:text-[#18A2BB] font-semibold transition duration-300`}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-20"
          onClick={toggle}
        ></div>
      )}
    </>
  );
}
