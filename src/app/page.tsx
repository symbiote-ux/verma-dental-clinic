import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import ProductPhotoCollage from '../components/ProductPhotoCollage';

export default function Home() {
  return (
    <main>
      <LandingPage />
      <Services />
      <ProductPhotoCollage />
      <Reviews />
      <AboutUs />
    </main>
  );
}
