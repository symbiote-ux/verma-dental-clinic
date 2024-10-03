import { ProductPhotoCollage } from '@/components/overview/ProductPhotoCollage';

export default function Results() {
  const images = [
    '/treatmentGallery/11.jpeg',
    '/treatmentGallery/12.jpeg',
    '/treatmentGallery/13.jpeg',
    '/treatmentGallery/14.jpeg',
    '/treatmentGallery/15.jpeg',
    '/treatmentGallery/16.jpeg',
    '/treatmentGallery/17.jpeg',
    '/treatmentGallery/18.jpeg',
    '/treatmentGallery/19.jpeg',
    '/treatmentGallery/20.jpeg',
    '/treatmentGallery/21.jpeg',
    '/treatmentGallery/22.jpeg',
    '/treatmentGallery/23.jpeg',
    '/treatmentGallery/24.jpeg',
    '/treatmentGallery/25.jpeg',
    '/treatmentGallery/26.jpeg',
    '/treatmentGallery/27.jpeg',
    '/treatmentGallery/28.jpeg',
    '/treatmentGallery/29.jpeg',
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
