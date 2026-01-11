import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';

export default function HeroVideoSection() {
  const { t } = useLanguage();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap.timeline({ delay: 0.3 });

    timeline
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      )
      .fromTo(
        subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.4'
      );
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-search');
    if (bookingSection) {
      const offset = 100;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          alt="Kazbegi mountain peaks"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 max-w-4xl mx-auto"
          >
            {t('hero.title')}
          </h1>
          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto"
          >
            {t('hero.subtitle')}
          </p>
          <div ref={ctaRef}>
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-normal text-base px-8 py-6 transition-all duration-200"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
