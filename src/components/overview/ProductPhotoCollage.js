'use client';

import Image from 'next/image';

export const ProductPhotoCollage = () => {
  const images = [
    '/images/photo-front-view.jpg',
    '/images/photo-waiting-area-1.jpg',
    '/images/photo-dental-chair-4.jpg',
    '/images/photo-rct.jpg',
    '/images/photo-vaccum-pump.jpg',
    '/images/photo-vaccum-pump-2.jpg',
    '/images/photo1.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg',
    '/images/photo7.jpg',
    '/images/photo8.jpg',
    '/images/photo9.jpg',
    '/images/photo18.jpg',
    '/images/photo19.jpg',
    '/images/photo20.jpg',
    '/images/photo21.jpg',
    '/images/photo22.jpg',
    '/images/photo-last.jpg',
  ];

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-y-auto bg-gray-100 py-6">
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
