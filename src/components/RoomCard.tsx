import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface Room {
  id: number;
  name: string;
  description: string;
  rate: number;
  image: string;
  imageAlt: string;
}

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckAvailability = () => {
    const message = `Hi! I'm interested in the ${room.name}. Can you check availability?`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card
      className="overflow-hidden bg-card border-border transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={room.image}
            alt={room.imageAlt}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            loading="lazy"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-card-foreground mb-2">{room.name}</h3>
        <p className="text-muted-foreground mb-4">{room.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-bold text-card-foreground">${room.rate}</span>
          <span className="text-muted-foreground">{t('rooms.perNight')}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleCheckAvailability}
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-normal text-base transition-all duration-200"
        >
          {t('rooms.checkAvailability')}
        </Button>
      </CardFooter>
    </Card>
  );
}
