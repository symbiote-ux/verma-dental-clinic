'use client';
import Image from 'next/image';
import Link from 'next/link';
// Import necessary icons from a library (you can choose a different library if preferred)

export default function Footer() {
  return (
    <footer className="bg-[#18A2BB] text-white py-10 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {/* Logo and Navigation */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-3">
              <Image
                src="/images/smileschangeslives-logo.png"
                alt="smiles changes lives logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <h1 className="text-xl md:text-2xl font-bold leading-tight">
                Dr. Verma’s Dental Surgery & Braces Centre
              </h1>
            </div>

            {/* Navigation Links */}
            <ul className="mt-6 space-y-3 text-center sm:text-left">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0f4e5f] font-medium text-base md:text-lg transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-medium hover:text-[#0f4e5f] text-base md:text-lg transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href={`tel:07500225225`}>
                  <button className="mt-4 w-full md:w-auto px-5 py-3 text-lg text-[#18A2BB] font-semibold bg-white rounded-md border-2 border-transparent hover:bg-gradient-to-r from-[#18A2BB] to-[#0f4e5f] hover:text-white hover:border-white transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white">
                    075002 25225
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Our Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.867436453103!2d78.0379616!3d30.3163489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929941f3d6f47%3A0x15bf8e5afb610078!2sDr.%20Verma%E2%80%99s%20Dental%20Surgery%20%26%20Braces%20Centre!5e0!3m2!1sen!2sin!4v1725954218022!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex="0"
                className="border-none"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Us</h3>

            {/* Address Section */}
            <div className="flex justify-center sm:justify-start items-center mb-3 space-x-2">
              <p className="text-sm md:text-base">
                Dr. Ram Parkash Verma Memorial Centre,
                58/12, Gandhi Rd, Prince Chowk, Dhamawala Mohalla, Paltan Bazaar, Dehradun, Uttarakhand 248001
              </p>
            </div>

            {/* Phone Section (Icon for Mobile) */}
            <div className="flex justify-center sm:justify-start items-center mb-3 space-x-2">
              <a href="tel:07500225225" className="text-sm md:text-base font-semibold hover:text-[#0f4e5f] transition">
                075002 25225
              </a>
            </div>

            {/* Email Section (Icon for Mobile) */}
            <div className="flex justify-center sm:justify-start items-center mb-3 space-x-2">
              <a href="mailto:sudhanshuverma19842022@yahoo.com" className="text-sm md:text-base font-semibold hover:text-[#0f4e5f] transition">
                sudhanshuverma19842022@yahoo.com
              </a>
            </div>

            {/* Working Hours */}
            <p className="mt-6 font-semibold text-base">Working Hours:</p>
            <ul className="mt-2 space-y-1 text-sm md:text-base">
              <li>Mon - Fri: 10:30 AM - 02:00 PM, 05:00 PM - 08:00 PM</li>
              <li>Sat: 10:30 AM - 02:00 PM, 05:00 PM - 07:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm md:text-base">
          © {new Date().getFullYear()} Dr. Verma’s Dental Surgery & Braces Centre. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
