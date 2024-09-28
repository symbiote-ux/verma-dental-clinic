'use client';

import Image from 'next/image';

export const ProductPhotoCollage = ({ images }) => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-y-auto py-6">
      {/* Photo Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden flex-shrink-0"
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
    </div>
  );
};
