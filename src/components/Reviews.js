'use client';

import Link from 'next/link';

export default function Reviews() {
  const reviews = [
    {
      name: 'John Doe',
      review:
        'Dr. Verma and his team are truly exceptional! They made my dental experience pleasant and stress-free. Highly recommend!',
    },
    {
      name: 'Jane Smith',
      review:
        'I had a wonderful experience at Dr. Verma’s clinic. The staff is warm, friendly, and professional. My dental issues were resolved with precision and care.',
    },
    {
      name: 'David Brown',
      review:
        'Best dental care I’ve ever received! Dr. Verma took the time to explain the treatment and the results exceeded my expectations.',
    },
    // You can add more reviews here
  ];

  return (
    <div id="reviews" className="max-w-7xl mx-auto p-4">
      {/* Page Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Tell About Us
      </h1>

      {/* Reviews Section */}
      <div className="space-y-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col md:flex-row gap-4"
          >
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-[#18A2BB]">
                {review.name.charAt(0)}{' '}
                {/* Display the first letter of the name */}
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">{review.name}</h3>
              <p className="text-sm md:text-base">{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        <Link
          href="https://www.practo.com/dehradun/clinic/dr-vermas-dental-surgery-braces-centre-dehradun/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#18A2BB] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#0f4e5f] transition duration-300"
        >
          Read More on Practo
        </Link>
        <Link
          href="https://www.google.com/maps/place/Dr.+Verma%E2%80%99s+Dental+Surgery+%26+Braces+Centre/@30.317539,78.0394402,14.61z/data=!4m8!3m7!1s0x390929941f3d6f47:0x15bf8e5afb610078!8m2!3d30.3163489!4d78.0379616!9m1!1b1!16s%2Fg%2F1ygbbbj8y?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4285F4] text-white py-2 px-6 rounded-lg text-sm md:text-base hover:bg-[#357ae8] transition duration-300"
        >
          Read More on Google
        </Link>
      </div>
    </div>
  );
}
