export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Contact Us
      </h1>
      <div className="sm:w-[50%] mx-auto mb-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Subject Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-[#0f4e5f] hover:bg-opacity-90 rounded-md"
            >
              <a
                href="mailto:sudhanshuverma19842022@yahoo.com"
                className="hover:text-[#0f4e5f]"
              >
                {' '}
                Send Message
              </a>
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="w-full">
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13776.867436453103!2d78.0379616!3d30.3163489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929941f3d6f47%3A0x15bf8e5afb610078!2sDr.%20Verma%E2%80%99s%20Dental%20Surgery%20%26%20Braces%20Centre!5e0!3m2!1sen!2sin!4v1727514285672!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="text-sm md:text-base lg:text-lg">
              <strong>Address:</strong> <br /> Dr. Ram Parkash Verma Memorial
              Centre, <br />
              58/12, Gandhi Rd, Prince Chowk,
              <br /> Dhamawala Mohalla, Paltan Bazaar,
              <br /> Dehradun, Uttarakhand 248001
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              <strong>Phone:</strong>{' '}
              <a href="tel:07500225225" className="hover:text-[#0f4e5f]">
                075002 25225
              </a>
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:sudhanshuverma19842022@yahoo.com"
                className="hover:text-[#0f4e5f]"
              >
                sudhanshuverma19842022@yahoo.com
              </a>
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              <strong>Hours:</strong>
              <br />
              Mon - Fri: 10:30 AM - 02:00 PM, 05:00 PM - 08:00 PM
              <br />
              Sat: 10:30 AM - 02:00 PM, 05:00 PM - 07:00 PM
              <br />
              Sun: Closed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
