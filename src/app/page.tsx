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
    '/treatmentGallery/11.jpeg',
    '/treatmentGallery/12.jpeg',
    '/treatmentGallery/13.jpeg',
  ];
  return (
    <main>
      <LandingPage />
      <Services />
      <ProductPhotoCollage images={images} />
      <ReviewOverview />
      <ProductPhotoCollage link="/results" images={results} />
      <AboutDoctorOverview />
    </main>
  );
}
