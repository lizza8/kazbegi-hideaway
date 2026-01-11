import { useEffect, useRef } from 'react';
import RoomCard from './RoomCard';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RoomsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  const rooms = [
    {
      id: 1,
      name: t('rooms.mountainView.name'),
      description: t('rooms.mountainView.desc'),
      rate: 120,
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop',
      imageAlt: 'Mountain hotel room with view',
    },
    {
      id: 2,
      name: t('rooms.fireside.name'),
      description: t('rooms.fireside.desc'),
      rate: 95,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
      imageAlt: 'Cozy mountain cabin interior',
    },
    {
      id: 3,
      name: t('rooms.cabin.name'),
      description: t('rooms.cabin.desc'),
      rate: 350,
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Mountain cabin in snow',
    },
  ];

  return (
    <section id="rooms" ref={sectionRef} className="py-24 bg-neutral">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-foreground mb-4">
            {t('rooms.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
