'use client';

import Link from 'next/link';

export default function Reviews() {
  const reviews = [
    {
      name: 'Susan John [Visited Dr. Sudhanshu Verma (Orthodontist) For Aesthetic Dentistry RCT - Root Canal Treatment]',
      review:
        'Happy with: Doctor friendliness, Value for money, Treatment satisfaction Wait time. The doctor was very understanding and helped to provide the best treatment plan for my condition at the best price. Both Dr. Sudhanshu and Dr. Simika are very friendly. They are able to give appointments as per our convenience and very competent in their work. They are understanding and prompt to address our issues. The staff at the clinic are also very friendly. Clinic is well set up with a variety of treatment options available for orthodontic and endodontic problems. They even offer invisalign braces.',
    },
    {
      name: 'Aslam Khan [Visited Dr. Sudhanshu Verma (Orthodontist) For Straightening Teeth (Conventional Braces)]',
      review:
        "Happy with: Doctor friendliness, Explanation of the health issue, Treatment satisfaction. It's a great experience getting my teeth fixed. Dr, Sudhanshu explains everything in detail, deals very politely with his patients. Gives sufficient time to patients, listen to them in patience and provides best solution in reasonable rates. I would definitely recommend him and give him A++++++ rating. Thanks Sudhanshu!!",
    },
    {
      name: 'Karan Chandna',
      review:
        "The meticulous attention to detail and personalized approach at Verma's Dental Surgery & Braces centre truly set it apart. Dr. Sudhanshu Verma's expertise in orthodontics made my son’s braces journey smooth, and the results exceeded my expectations. The cleanliness and state-of-the-art equipment showcased their commitment to high standards. From the friendly reception to the skilled dental hygienists, every aspect of my visit was exceptional. Verma's Dental Surgery earns my highest recommendation for comprehensive and quality dental care.",
    },
    {
      name: 'Ankita samson  [Visited Dr. Sudhanshu Verma (Orthodontist) For Dental Braces Fixing]',
      review:
        'Happy with: Doctor friendliness, Explanation of the health issue, Treatment satisfaction, Value for money, Wait time. Dr. Sudhansu has fixed braces and the service is amazing, moreover is friendly with patients which helps to accurately define the problem. All member of dental service staff is co operative and helping. Overall experience is excellent, woul look for future treatment and reference. Happy with the service',
    },
    {
      name: 'Rajni [Visited Dr. Sudhanshu Verma (Orthodontist) For Dental FillingsBraces adjustmentsDental Surgery]',
      review:
        'Happy with: Doctor friendliness, Explanation of the health issue, Treatment satisfaction, Value for money. I would like to thanks all the staff members of Verma Dental Clinic. The friendly and cooperative nature of Doctor will always attract you to recommend others for dental related issues. I am always satisfied with their work. Thankyou for making us smile by putting your all total efforts in your work.',
    },
  ];

  return (
    <div id="reviews" className="max-w-7xl mx-auto mt-8 px-4">
      {/* Page Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Tell About Us
      </h1>

      {/* Grid Layout for Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg flex flex-col gap-4"
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
      <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="https://www.practo.com/dehradun/clinic/dr-vermas-dental-surgery-braces-centre-dehradun/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#18A2BB] sm:w-1/2 text-white py-2 px-6 rounded-lg text-center text-sm md:text-base hover:bg-[#0f4e5f] transition duration-300"
        >
          Read More on Practo
        </Link>
        <Link
          href="https://www.google.com/maps/place/Dr.+Verma%E2%80%99s+Dental+Surgery+%26+Braces+Centre/@30.317539,78.0394402,14.61z/data=!4m8!3m7!1s0x390929941f3d6f47:0x15bf8e5afb610078!8m2!3d30.3163489!4d78.0379616!9m1!1b1!16s%2Fg%2F1ygbbbj8y?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4285F4] sm:w-1/2 text-white py-2 px-6 rounded-lg text-center text-sm md:text-base hover:bg-[#357ae8] transition duration-300"
        >
          Read More on Google
        </Link>
      </div>
    </div>
  );
}
