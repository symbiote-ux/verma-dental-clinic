import { ProductPhotoCollage } from '@/components/overview/ProductPhotoCollage';

export default function Results() {
  const images = [
    '/treatmentGallery/00.jpeg',
    '/treatmentGallery/01.jpeg',
    '/treatmentGallery/1.png',
    '/treatmentGallery/2.png',
    '/treatmentGallery/3.png',
    '/treatmentGallery/4.jpeg',
    '/treatmentGallery/5.jpeg',
    '/treatmentGallery/6.png',
    '/treatmentGallery/7.png',
    '/treatmentGallery/8.png',
    '/treatmentGallery/9.png',
    '/treatmentGallery/10.png',
    '/treatmentGallery/11.png',
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 mt-4">
      <h1 className="text-4xl font-bold flex justify-center">
        Treatment Gallery
      </h1>
      <ProductPhotoCollage images={images} />
    </div>
  );
}
