'use client';

import { useState } from 'react';
import Image from 'next/image';
import { doctors } from '@/components/utils/doctors';

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already active
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="about" className="max-w-7xl mx-auto p-4">
      {/* About Clinic Section */}
      <section className="mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
          About Us
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
          At{' '}
          <span className="font-semibold text-[#18A2BB]">
            Dr. Verma&apos;s Dental Surgery Center
          </span>
          , we are committed to providing the{' '}
          <span className="font-semibold text-[#18A2BB]">
            BEST dental clinic services
          </span>{' '}
          in Dehradun. From Scaling, Root Canals, and Teeth Whitening to Braces
          & Implants, we offer solutions for all your dental needs with the help
          of our{' '}
          <span className="font-semibold text-[#18A2BB]">
            outstanding super-specialty faculty
          </span>{' '}
          of qualified and friendly dentists.
          <br />
          <br />
          Dr. Verma has dedicated years to perfecting his skills and integrating
          the latest advancements in dentistry. Combined with our welcoming
          office, precise care, and a premier team, we&apos;re honored to be
          Dehradun City&apos;s top-rated choice for enhancing your smile.
          There&apos;s a reason why patients choose us as their preferred
          dentist.
        </p>
      </section>

      {/* Doctors Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Meet Our Doctors
        </h2>

        <div className="space-y-6">
          {doctors.map((doctor, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                id={`doctor-${doctor.name}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden min-h-[350px] md:min-h-[400px]"
              >
                <div
                  className={`flex flex-col md:min-h-[400px] ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Profile Picture */}
                  <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={doctor.imageSrc}
                      alt={doctor.name}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6 flex flex-col w-full md:w-1/2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        {doctor.name}
                      </h3>
                      <h4 className="text-sm md:text-md font-semibold text-gray-600">
                        {doctor.role}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {doctor.yearsOfExperience} years of experience
                      </p>
                    </div>

                    {/* Doctor Details */}
                    <div
                      id={`doctor-details-${index}`}
                      className={`mt-4 text-sm text-gray-700 ${activeIndex === index ? 'block' : 'hidden'
                        } md:block`}
                      role="region"
                      aria-labelledby={`doctor-${index}-header`}
                    >
                      {doctor.details}
                    </div>

                    {/* Accordion Toggle Button (Visible Only on Mobile) */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="mt-4 flex items-center text-[#18A2BB] hover:text-[#0F6B8B] focus:outline-none md:hidden"
                      aria-expanded={activeIndex === index}
                      aria-controls={`doctor-details-${index}`}
                    >
                      {activeIndex === index ? 'Hide Details' : 'Know More'}
                      <svg
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
