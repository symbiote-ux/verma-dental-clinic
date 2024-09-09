import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen max-w-7xl mx-auto px-4 space-y-6 md:space-y-0 md:space-x-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Relaxed office. Experienced team. Exceptional care.
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-4">
          Trusted Kansas City Dentist <br />
          Serving the Hawthorne – Picture Hills area
        </h2>
        <Link href={`tel:${'+918037296355'}`}>
          <button className="flex items-center justify-center text-white bg-[#18A2BB] p-2 rounded-xl border-2 border-transparent hover:bg-white text-lg hover:text-[#18A2BB] hover:border-[#18A2BB] transition-all duration-300">
            +918037296355
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image
          src="/images/front-view.jpg" // Replace with your image path
          alt="Dental Clinic Team"
          width={650}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
