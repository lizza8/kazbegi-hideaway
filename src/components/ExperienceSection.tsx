import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const blocks = sectionRef.current.querySelectorAll('.experience-block');
      
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
            },
          }
        );
      });
    }
  }, []);

  const experiences = [
    {
      id: 1,
      title: t('experience.fireplace.title'),
      description: t('experience.fireplace.desc'),
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop',
      imageAlt: 'Cozy mountain cabin interior',
      reverse: false,
    },
    {
      id: 2,
      title: t('experience.breakfast.title'),
      description: t('experience.breakfast.desc'),
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop',
      imageAlt: 'Mountain view from cabin',
      reverse: true,
    },
    {
      id: 3,
      title: t('experience.ski.title'),
      description: t('experience.ski.desc'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      imageAlt: 'Snow-capped mountains',
      reverse: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-neutral">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-foreground mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-24">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className={`experience-block grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                experience.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${experience.reverse ? 'lg:order-2' : ''}`}>
                <img
                  src={experience.image}
                  alt={experience.imageAlt}
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
              <div className={`${experience.reverse ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-foreground mb-4">
                  {experience.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
