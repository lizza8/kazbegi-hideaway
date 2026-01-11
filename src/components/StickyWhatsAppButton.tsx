import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import gsap from 'gsap';

export default function StickyWhatsAppButton() {
  const { t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const pulse = () => {
      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          opacity: 0.7,
          duration: 0.5,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: 1,
        });
      }
    };

    const interval = setInterval(pulse, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    const message = t('whatsapp.message');
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg font-normal text-base px-6 py-6 transition-all duration-200"
    >
      <MessageCircle className="mr-2 h-6 w-6" strokeWidth={1.5} />
      <span className="hidden sm:inline">{t('whatsapp.button')}</span>
      <span className="sm:hidden">{t('whatsapp.buttonShort')}</span>
    </Button>
  );
}
