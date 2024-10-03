'use client';

import Image from 'next/image';
import Link from 'next/link';

export const ProductPhotoCollage = ({ images, link = '' }) => {
  return (
    <div className="relative max-w-7xl flex flex-col justify-center items-center overflow-y-auto mx-auto p-6">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Collage Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {link && (
        <Link
          href={link}
          className="mt-4 px-4 py-2 bg-[#18A2BB] text-white rounded-lg hover:bg-white hover:text-[#18A2BB]  border-2 hover:border-[#18A2BB] transition duration-200"
        >
          Show More
        </Link>
      )}
    </div>
  );
};
