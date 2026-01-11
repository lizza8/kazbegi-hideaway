import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ka';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.title': 'Kazbegi Hideaway',

    // Hero Section
    'hero.title': 'Kazbegi Hideaway – Your Private Escape in the Caucasus',
    'hero.subtitle': 'Experience tranquility and authentic Georgian hospitality in our boutique mountain retreat. Book directly with us for the best rates.',
    'hero.cta': 'Check Availability',

    // Booking Form
    'booking.checkin': 'Check-in',
    'booking.checkout': 'Check-out',
    'booking.guests': 'Guests',
    'booking.stayType': 'Type of Stay',
    'booking.room': 'Room',
    'booking.cabin': 'Entire Cabin',
    'booking.search': 'Search Availability',
    'booking.selectDate': 'Select date',

    // Rooms Section
    'rooms.title': 'Our Accommodations',
    'rooms.subtitle': 'Choose from our carefully designed rooms or book the entire cabin for your group',
    'rooms.mountainView.name': 'Mountain View Suite',
    'rooms.mountainView.desc': 'Spacious suite with panoramic mountain views, king bed, and private balcony.',
    'rooms.fireside.name': 'Cozy Fireside Room',
    'rooms.fireside.desc': 'Intimate room featuring a traditional fireplace and rustic alpine decor.',
    'rooms.cabin.name': 'Entire Cabin',
    'rooms.cabin.desc': 'Book the entire hideaway for your group. Sleeps up to 8 guests comfortably.',
    'rooms.perNight': '/ night',
    'rooms.checkAvailability': 'Check Availability',

    // Gallery Section
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Explore the beauty and comfort of Kazbegi Hideaway',

    // Experience Section
    'experience.title': 'The Experience',
    'experience.subtitle': 'Discover what makes Kazbegi Hideaway special',
    'experience.fireplace.title': 'Fireplace Evenings',
    'experience.fireplace.desc': 'Cozy up by the traditional stone fireplace with a glass of Georgian wine. Perfect for intimate conversations and relaxation after a day in the mountains.',
    'experience.breakfast.title': 'Mountain View Breakfast',
    'experience.breakfast.desc': 'Wake up to breathtaking panoramic views of the Caucasus peaks. Enjoy a hearty Georgian breakfast on your private balcony as the sun illuminates the snow-capped mountains.',
    'experience.ski.title': 'Ski-in Hideaway',
    'experience.ski.desc': 'Located minutes from Gudauri ski lifts, our hideaway is the perfect base for winter sports enthusiasts. Return to warmth and comfort after an exhilarating day on the slopes.',

    // Map Section
    'map.title': 'Location',
    'map.subtitle': 'Located minutes from Gudauri ski lifts and Stepantsminda center',
    'map.loading': 'Loading map...',

    // About Section
    'about.title': 'About Kazbegi Hideaway',
    'about.p1': 'Nestled in the heart of the Caucasus Mountains, Kazbegi Hideaway is a family-owned boutique retreat that celebrates Georgian hospitality and sustainable mountain living.',
    'about.p2': 'Our cabin was built using traditional local architecture and materials, respecting the natural beauty of the surrounding landscape. We believe in preserving the authentic character of the region while providing modern comfort to our guests.',
    'about.p3': 'As local hosts, we\'re passionate about sharing the magic of Kazbegi with travelers seeking an authentic mountain experience. From recommending hidden hiking trails to preparing traditional Georgian dishes, we\'re here to make your stay unforgettable.',

    // Footer Section
    'footer.getInTouch': 'Get in Touch',
    'footer.sendInquiry': 'Send Inquiry',
    'footer.name': 'Your Name',
    'footer.email': 'Your Email',
    'footer.message': 'Your Message',
    'footer.sendMessage': 'Send Message',
    'footer.weather': 'Current Weather: Kazbegi',
    'footer.partlyCloudy': 'Partly Cloudy',
    'footer.copyright': '© 2024 Kazbegi Hideaway. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // WhatsApp Button
    'whatsapp.button': 'Check Availability on WhatsApp',
    'whatsapp.buttonShort': 'WhatsApp',
    'whatsapp.message': 'Hi! I\'d like to check availability at Kazbegi Hideaway.',
    'whatsapp.roomMessage': 'Hi! I\'m interested in the {room}. Can you check availability?',
    'whatsapp.bookingMessage': 'Hi! I\'d like to check availability for {type} from {checkin} to {checkout} for {guests} guest(s).',
  },
  ka: {
    // Navbar
    'nav.home': 'მთავარი',
    'nav.rooms': 'ოთახები',
    'nav.gallery': 'გალერეა',
    'nav.about': 'ჩვენს შესახებ',
    'nav.contact': 'კონტაქტი',
    'nav.title': 'ყაზბეგის თავშესაფარი',

    // Hero Section
    'hero.title': 'ყაზბეგის თავშესაფარი – თქვენი პირადი თავშესაფარი კავკასიონში',
    'hero.subtitle': 'გამოსცადეთ სიმშვიდე და ავთენტური ქართული სტუმართმოყვარეობა ჩვენს ბუტიკ მთის თავშესაფარში. დაჯავშნეთ პირდაპირ ჩვენთან საუკეთესო ფასებით.',
    'hero.cta': 'ხელმისაწვდომობის შემოწმება',

    // Booking Form
    'booking.checkin': 'დაბინავება',
    'booking.checkout': 'გასვლა',
    'booking.guests': 'სტუმრები',
    'booking.stayType': 'ყოფნის ტიპი',
    'booking.room': 'ოთახი',
    'booking.cabin': 'მთელი კოტეჯი',
    'booking.search': 'ხელმისაწვდომობის ძიება',
    'booking.selectDate': 'აირჩიეთ თარიღი',

    // Rooms Section
    'rooms.title': 'ჩვენი განთავსება',
    'rooms.subtitle': 'აირჩიეთ ჩვენი ფრთხილად დიზაინირებული ოთახებიდან ან დაჯავშნეთ მთელი კოტეჯი თქვენი ჯგუფისთვის',
    'rooms.mountainView.name': 'მთის ხედით ნომერი',
    'rooms.mountainView.desc': 'ფართო ნომერი პანორამული მთის ხედებით, დიდი საწოლით და პირადი აივნით.',
    'rooms.fireside.name': 'კომფორტული ბუხრიანი ოთახი',
    'rooms.fireside.desc': 'ინტიმური ოთახი ტრადიციული ბუხრით და რუსტიკული ალპური დეკორით.',
    'rooms.cabin.name': 'მთელი კოტეჯი',
    'rooms.cabin.desc': 'დაჯავშნეთ მთელი თავშესაფარი თქვენი ჯგუფისთვის. კომფორტულად ათავსებს 8 სტუმარს.',
    'rooms.perNight': '/ ღამე',
    'rooms.checkAvailability': 'ხელმისაწვდომობის შემოწმება',

    // Gallery Section
    'gallery.title': 'გალერეა',
    'gallery.subtitle': 'გამოიკვლიეთ ყაზბეგის თავშესაფრის სილამაზე და კომფორტი',

    // Experience Section
    'experience.title': 'გამოცდილება',
    'experience.subtitle': 'აღმოაჩინეთ რა ხდის ყაზბეგის თავშესაფარს განსაკუთრებულს',
    'experience.fireplace.title': 'საღამოები ბუხართან',
    'experience.fireplace.desc': 'დაისვენეთ ტრადიციულ ქვის ბუხართან ქართული ღვინის ჭიქით. იდეალურია ინტიმური საუბრებისთვის და დასვენებისთვის მთებში დღის შემდეგ.',
    'experience.breakfast.title': 'საუზმე მთის ხედით',
    'experience.breakfast.desc': 'გაიღვიძეთ კავკასიონის მწვერვალების თვალწარმტაცი პანორამული ხედებით. ისიამოვნეთ გულიანი ქართული საუზმით თქვენს პირად აივანზე, როდესაც მზე ანათებს თოვლიან მთებს.',
    'experience.ski.title': 'სათხილამურო თავშესაფარი',
    'experience.ski.desc': 'მდებარეობს წუთებში გუდაურის სათხილამურო ლიფტებიდან, ჩვენი თავშესაფარი არის იდეალური ბაზა ზამთრის სპორტის მოყვარულებისთვის. დაბრუნდით სითბოსა და კომფორტში აღმაფრთოვანებელი დღის შემდეგ ფერდობებზე.',

    // Map Section
    'map.title': 'მდებარეობა',
    'map.subtitle': 'მდებარეობს წუთებში გუდაურის სათხილამურო ლიფტებიდან და სტეფანწმინდის ცენტრიდან',
    'map.loading': 'რუკა იტვირთება...',

    // About Section
    'about.title': 'ყაზბეგის თავშესაფრის შესახებ',
    'about.p1': 'კავკასიონის მთების გულში მოთავსებული, ყაზბეგის თავშესაფარი არის ოჯახური ბუტიკ თავშესაფარი, რომელიც აღნიშნავს ქართულ სტუმართმოყვარეობას და მდგრად მთის ცხოვრებას.',
    'about.p2': 'ჩვენი კოტეჯი აშენდა ტრადიციული ადგილობრივი არქიტექტურისა და მასალების გამოყენებით, პატივს სცემს გარემომცველი პეიზაჟის ბუნებრივ სილამაზეს. ჩვენ გვჯერა რეგიონის ავთენტური ხასიათის შენარჩუნებისა, ხოლო ჩვენს სტუმრებს ვთავაზობთ თანამედროვე კომფორტს.',
    'about.p3': 'როგორც ადგილობრივი მასპინძლები, ჩვენ გვიხარია ყაზბეგის ჯადოქრობის გაზიარება მოგზაურებთან, რომლებიც ეძებენ ავთენტურ მთის გამოცდილებას. დამალული ლაშქრობის ბილიკების რეკომენდაციიდან ტრადიციული ქართული კერძების მომზადებამდე, ჩვენ აქ ვართ, რომ თქვენი ყოფნა დაუვიწყარი გავხადოთ.',

    // Footer Section
    'footer.getInTouch': 'დაგვიკავშირდით',
    'footer.sendInquiry': 'გამოგზავნეთ შეკითხვა',
    'footer.name': 'თქვენი სახელი',
    'footer.email': 'თქვენი ელფოსტა',
    'footer.message': 'თქვენი შეტყობინება',
    'footer.sendMessage': 'შეტყობინების გაგზავნა',
    'footer.weather': 'ამინდი ყაზბეგში',
    'footer.partlyCloudy': 'ნაწილობრივ მოღრუბლული',
    'footer.copyright': '© 2024 ყაზბეგის თავშესაფარი. ყველა უფლება დაცულია.',
    'footer.privacy': 'კონფიდენციალურობის პოლიტიკა',
    'footer.terms': 'მომსახურების პირობები',

    // WhatsApp Button
    'whatsapp.button': 'ხელმისაწვდომობის შემოწმება WhatsApp-ზე',
    'whatsapp.buttonShort': 'WhatsApp',
    'whatsapp.message': 'გამარჯობა! მინდა შევამოწმო ხელმისაწვდომობა ყაზბეგის თავშესაფარში.',
    'whatsapp.roomMessage': 'გამარჯობა! დაინტერესებული ვარ {room}-ით. შეგიძლიათ შეამოწმოთ ხელმისაწვდომობა?',
    'whatsapp.bookingMessage': 'გამარჯობა! მინდა შევამოწმო ხელმისაწვდომობა {type}-სთვის {checkin}-დან {checkout}-მდე {guests} სტუმრისთვის.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
