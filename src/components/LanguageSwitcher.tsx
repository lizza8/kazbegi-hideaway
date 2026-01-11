import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ka' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-transparent text-secondary-foreground hover:bg-secondary/10"
    >
      <Globe className="h-5 w-5" strokeWidth={1.5} />
      <span className="font-medium">{language === 'en' ? 'ქარ' : 'ENG'}</span>
    </Button>
  );
}
