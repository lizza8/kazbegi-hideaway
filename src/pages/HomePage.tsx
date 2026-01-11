import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroVideoSection from '../components/HeroVideoSection';
import BookingSearchForm from '../components/BookingSearchForm';
import RoomsSection from '../components/RoomsSection';
import GallerySection from '../components/GallerySection';
import ExperienceSection from '../components/ExperienceSection';
import MapSection from '../components/MapSection';
import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection';
import StickyWhatsAppButton from '../components/StickyWhatsAppButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroVideoSection />
        <BookingSearchForm />
        <RoomsSection />
        <GallerySection />
        <ExperienceSection />
        <MapSection />
        <AboutSection />
        <FooterSection />
      </main>
      <StickyWhatsAppButton />
    </div>
  );
}
