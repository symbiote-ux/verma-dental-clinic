import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-[#FFF7F0]">
      <div className="flex flex-col md:flex-row items-center justify-center h-screen max-w-7xl  mx-auto px-4 space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl text-[#18A2BB] md:text-2xl text-left font-bold mb-4">
            Relaxed office. Experienced team. Exceptional care.
          </h2>
          <h1 className="text-5xl font-bold text-left  md:text-6xl mb-4">
            Trusted Dehradun City Dentist
          </h1>
          <h2 className="text-xl text-[#18A2BB] text-left md:text-2xl font-bold mb-4">
            Serving the Dehradun – Haridwar, Rishikesh Area.
          </h2>
          <Link href={`tel:${'075002 25225'}`}>
            <button className="flex items-center justify-center text-white bg-[#18A2BB] p-2 px-4 font-semibold  md:mt-6 rounded-3xl border-2 border-transparent hover:bg-white text-lg hover:text-[#18A2BB] hover:border-[#18A2BB] transition-all duration-300">
              075002 25225
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/images/front-view.jpg"
            alt="Dental Clinic reception image"
            width={650}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
