'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div>
            <h3 className="text-lg font-bold">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509586!2d144.95592831575723!3d-37.817209742021655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f8f04515d7a!2sFederation+Square!5e0!3m2!1sen!2sus!4v1536780224725"
              width="100%"
              height="200"
              frameBorder="0"
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
              Address: 123 Dental Clinic Ave, Suite 200, New York, NY 10001
            </p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@dentalclinic.com</p>
            <p className="mt-4">Working Hours:</p>
            <ul>
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Sat: 9:00 AM - 2:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
