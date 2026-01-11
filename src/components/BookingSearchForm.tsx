import { useState } from 'react';
import { Calendar, Users, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '../contexts/LanguageContext';
import { format } from 'date-fns';

export default function BookingSearchForm() {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [stayType, setStayType] = useState('room');

  const handleSearch = () => {
    const message = `Hi! I'd like to check availability for ${stayType === 'room' ? 'a room' : 'the entire cabin'} from ${
      checkIn ? format(checkIn, 'MMM dd, yyyy') : 'TBD'
    } to ${checkOut ? format(checkOut, 'MMM dd, yyyy') : 'TBD'} for ${guests} guest${guests > 1 ? 's' : ''}.`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking-search" className="relative -mt-24 z-20 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Check-in Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground font-label">{t('booking.checkin')}</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-background text-foreground border-border hover:bg-muted hover:text-foreground"
                  >
                    <Calendar className="mr-2 h-5 w-5" strokeWidth={1.5} />
                    {checkIn ? format(checkIn, 'MMM dd, yyyy') : t('booking.selectDate')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground font-label">{t('booking.checkout')}</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-background text-foreground border-border hover:bg-muted hover:text-foreground"
                  >
                    <Calendar className="mr-2 h-5 w-5" strokeWidth={1.5} />
                    {checkOut ? format(checkOut, 'MMM dd, yyyy') : t('booking.selectDate')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-popover" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    initialFocus
                    disabled={(date) => checkIn ? date < checkIn : false}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground font-label">{t('booking.guests')}</label>
              <div className="flex items-center gap-2 bg-background border border-border rounded-md px-3 py-2">
                <Users className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="h-8 w-8 p-0 bg-transparent text-foreground hover:bg-muted hover:text-foreground"
                >
                  -
                </Button>
                <span className="text-base font-normal text-foreground min-w-[2rem] text-center">{guests}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="h-8 w-8 p-0 bg-transparent text-foreground hover:bg-muted hover:text-foreground"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Stay Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground font-label">{t('booking.stayType')}</label>
              <Select value={stayType} onValueChange={setStayType}>
                <SelectTrigger className="w-full bg-background text-foreground border-border">
                  <Home className="mr-2 h-5 w-5" strokeWidth={1.5} />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="room">{t('booking.room')}</SelectItem>
                  <SelectItem value="cabin">{t('booking.cabin')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleSearch}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-normal text-base transition-all duration-200"
          >
            {t('booking.search')}
          </Button>
        </div>
      </div>
    </section>
  );
}
