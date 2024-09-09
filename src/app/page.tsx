import LandingPage from './landing-page/page';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <LandingPage />
    </div>
  );
}
