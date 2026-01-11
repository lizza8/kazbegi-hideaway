import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '../contexts/LanguageContext';

export default function FooterSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@kazbegihideaway.com?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('footer.getInTouch')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="font-medium">Kazbegi Hideaway</p>
                  <p className="text-secondary-foreground/80">Stepantsminda, Kazbegi Region</p>
                  <p className="text-secondary-foreground/80">Georgia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="tel:+995555123456"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  +995 555 123 456
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:info@kazbegihideaway.com"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors"
                >
                  info@kazbegihideaway.com
                </a>
              </div>
            </div>

            {/* Weather Widget Placeholder */}
            <div className="mt-8 p-4 bg-secondary-foreground/10 rounded-lg">
              <p className="text-sm text-secondary-foreground/80">{t('footer.weather')}</p>
              <p className="text-2xl font-bold mt-2">-2°C</p>
              <p className="text-sm text-secondary-foreground/80">{t('footer.partlyCloudy')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{t('footer.sendInquiry')}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder={t('footer.name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('footer.email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder={t('footer.message')}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-normal text-base transition-all duration-200"
              >
                {t('footer.sendMessage')}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/80">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                {t('footer.privacy')}
              </a>
              <a
                href="#"
                className="text-sm text-secondary-foreground/80 hover:text-accent transition-colors"
              >
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
