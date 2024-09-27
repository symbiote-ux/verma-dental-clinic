export default function ContactUs() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Map Section */}
        <div className="w-full">
          <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.4272649624236!2d78.04308177594457!3d30.319500781774097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c60f50d81f%3A0x6957645d671564cb!2sDr.%20Ram%20Parkash%20Verma%20Memorial%20Centre!5e0!3m2!1sen!2sin!4v1695761532761!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
        {/* Contact Information */}
        <div className="space-y-6">
          <ul className="space-y-4">
            <li className="text-sm md:text-base lg:text-lg">
              <strong>Address:</strong> <br /> Dr. Ram Parkash Verma Memorial
              Centre, 58/12, Gandhi Rd, Prince Chowk, Dhamawala Mohalla, Paltan
              Bazaar, Dehradun, Uttarakhand 248001
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
