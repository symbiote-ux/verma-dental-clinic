import LandingPage from '../components/pages/LandingPage';
import Services from '../components/pages/Services';
import { ProductPhotoCollage } from '../components/overview/ProductPhotoCollage';
import { AboutDoctorOverview } from '../components/overview/about-doctor-overview';
import { ReviewOverview } from '../components/overview/review-overview';

export default function Home() {
  const images = [
    '/images/photo-front-view.jpg',
    '/images/photo-waiting-area-1.jpg',
    '/images/photo-dental-chair-4.jpg',
    '/images/photo-rct.jpg',
    '/images/photo-vaccum-pump.jpg',
    '/images/photo-vaccum-pump-2.jpg',
  ];
  const results = [
    '/treatmentGallery/00.jpeg',
    '/treatmentGallery/01.jpeg',
    '/treatmentGallery/1.png',
    '/treatmentGallery/2.png',
    '/treatmentGallery/3.png',
    '/treatmentGallery/5.jpeg',
  ];
  return (
    <main>
      <LandingPage />
      <Services />
      <ProductPhotoCollage images={images} />
      <ReviewOverview />
      <ProductPhotoCollage images={results} />
      <AboutDoctorOverview />
    </main>
  );
}
