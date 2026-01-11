import { useLanguage } from '../contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-24 bg-neutral">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2070&auto=format&fit=crop"
                alt="Mountain cabin in winter"
                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-foreground mb-6">
                {t('about.title')}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  {t('about.p1')}
                </p>
                <p>
                  {t('about.p2')}
                </p>
                <p>
                  {t('about.p3')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
