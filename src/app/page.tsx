import LandingPage from '../components/pages/LandingPage';
import Services from '../components/pages/Services';
import Reviews from '../components/pages/Reviews';
import { ProductPhotoCollage } from '../components/overview/ProductPhotoCollage';
import { AboutDoctorOverview } from '../components/overview/about-doctor-overview'

export default function Home() {
  return (
    <main>
      <LandingPage />
      <Services />
      <ProductPhotoCollage />
      <Reviews />
      <AboutDoctorOverview />
    </main>
  );
}
