'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#18A2BB] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
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
            {/* Navigation Links */}
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#18A2BB] font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="font-semibold hover:text-[#18A2BB]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href={`tel:${'075002 25225'}`}>
                  <button className="flex items-center text-lg justify-center text-[#18A2BB]  font-semibold bg-white rounded-md border-2 border-transparent p-2 px-4 hover:bg-[#18A2BB] hover:text-white hover:border-white transition-all duration-300">
                    075002 25225
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-bold">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.867436453103!2d78.0379616!3d30.3163489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929941f3d6f47%3A0x15bf8e5afb610078!2sDr.%20Verma%E2%80%99s%20Dental%20Surgery%20%26%20Braces%20Centre!5e0!3m2!1sen!2sin!4v1725954218022!5m2!1sen!2sin"
              width="100%"
              height="230"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="mt-4"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-4">
              Address: Dr. Ram Parkash Verma Memorial Centre, 58/12, Gandhi Rd,
              Prince Chowk, Dhamawala Mohalla, Paltan Bazaar, Dehradun,
              Uttarakhand 248001
            </p>
            <p>Phone: 075002 25225</p>
            <p>Email: sudhanshuverma19842022@yahoo.com</p>
            <p className="mt-4">Working Hours:</p>
            <ul>
              <li>Mon - Fri: 10:30 AM - 02:00 PM 05:00 PM - 08:00 PM </li>
              <li>Sat: 10:30 AM - 02:00 PM 05:00 PM - 07:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
