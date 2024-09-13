'use client';

import Image from 'next/image';

export default function PhotoCollage() {
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
  ];

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gray-100">
      {/* Photo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden"
          >
            <Image
              src={src}
              alt={`Collage Image ${index + 1}`}
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold bg-[#00000080] p-4 rounded-lg text-center">
          A Place for Transformation
        </h1>
      </div>
    </div>
  );
}
