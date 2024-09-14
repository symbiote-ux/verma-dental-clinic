import LandingPage from '../components/LandingPage';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Reviews from '../components/Reviews';
import PhotoCollage from '../components/PhotoCollage';

export default function Home() {
  return (
    <main>
      <LandingPage />
      <Services />
      <PhotoCollage />
      <Reviews />
      <AboutUs />
    </main>
  );
}
