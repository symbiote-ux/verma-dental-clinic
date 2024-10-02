'use client';
import Link from 'next/link';

export const ReviewOverview = () => {
  return (
    <div className="mb-12 mt-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Are Saying
      </h2>

      <div className="gap-6 pb-6">
        <div className="flex gap-4">
          {/* Example Reviews */}
          <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col gap-4 min-w-[300px] md:min-w-[400px]">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-[#18A2BB]">
                S
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">Susan John</h3>
              <p className="text-sm md:text-base">
                "The doctor was very understanding and helped to provide the
                best treatment plan for my condition at the best price."
              </p>
            </div>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col gap-4 min-w-[300px] md:min-w-[400px]">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-[#18A2BB]">
                A
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold mb-1">Aslam Khan</h3>
              <p className="text-sm md:text-base">
                "It's a great experience getting my teeth fixed. Dr. Sudhanshu
                explains everything in detail."
              </p>
            </div>
          </div>

          {/* Button to Read More Reviews */}
          <div className="bg-white p-4 shadow-lg rounded-lg flex flex-col justify-center gap-4 min-w-[300px] md:min-w-[400px]">
            <Link
              href="/reviews"
              className="bg-[#18A2BB] text-white py-2 px-6 rounded-lg text-center text-sm md:text-base hover:bg-[#0f4e5f] transition duration-300"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
