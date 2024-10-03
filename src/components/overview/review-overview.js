'use client';
import Link from 'next/link';

export const ReviewOverview = () => {
  return (
    <div className="mb-12 mt-8 max-w-7xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Are Saying
      </h2>

      <div className="gap-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                &quot;The doctor was very understanding and helped to provide
                the best treatment plan for my condition at the best
                price.&quot;
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
                &quot;It&apos;s a great experience getting my teeth fixed. Dr.
                Sudhanshu explains everything in detail.&quot;
              </p>
            </div>
          </div>
        </div>
        {/* Button to Read More Reviews */}
        <div className="bg-white p-4 mt-6 rounded-lg flex flex-col justify-center gap-4 max-w-64">
          <Link
            href="/reviews"
            className="bg-[#18A2BB] text-white py-2 px-6 rounded-lg text-center text-sm md:text-base hover:text-[#18A2BB] hover:bg-white hover:border-[#18A2BB] border-2 transition duration-300"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};
