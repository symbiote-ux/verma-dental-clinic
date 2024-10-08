'use client';
import Link from 'next/link';
import { MobileDropdownMenu } from './utils/drop-down';
import { menuItems } from './utils/menu-items';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#18A2BB] text-white py-10 md:py-12 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10">
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-lg md:text-xl">Quick Links</h2>
            <ul className="mt-6 w-full">
              <ul className="flex flex-col items-start">
                {menuItems.map((item) =>
                  item.subGroup ? (
                    <MobileDropdownMenu key={item.route} item={item} setMenuOpen={() => { }} />
                  ) : (
                    <li key={item.route} className="w-full">
                      <Link
                        href={item.route}
                        className="block w-full text-white font-semibold text-lg px-4 py-2 hover:bg-[#FFF7F0] hover:text-[#1D1D1D] transition duration-300"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-lg md:text-xl">
              Contact Information
            </h2>
            <ul className="mt-6 space-y-3">
              <li className="text-sm md:text-base lg:text-lg">
                <strong>Address:</strong> Dr. Ram Parkash Verma Memorial Centre,
                58/12, Gandhi Rd, Prince Chowk, Dhamawala Mohalla, Paltan
                Bazaar, Dehradun, Uttarakhand 248001
              </li>
              <li className="text-sm md:text-base lg:text-lg">
                <strong>Phone:</strong>{' '}
                <a href="tel:8165876444" className="hover:text-[#0f4e5f]">
                  {' '}
                  075002 25225
                </a>
              </li>
              <li className="text-sm md:text-base lg:text-lg">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:info@dentalclinic.com"
                  className="hover:text-[#0f4e5f]"
                >
                  sudhanshuverma19842022@yahoo.com
                </a>
              </li>
              <li className="text-sm md:text-base lg:text-lg lg:hidden">
                <strong>Hours: </strong>Mon - Fri: 10:30 AM - 02:00 PM, 05:00 PM
                - 08:00 PM
                <br /> Sat: 10:30 AM - 02:00 PM, 05:00 PM - 07:00 PM <br />
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm md:text-base">
          © {new Date().getFullYear()} Dr. Verma’s Dental Surgery & Braces
          Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
