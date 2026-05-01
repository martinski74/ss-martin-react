"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from './translations/en.json';
import bg from './translations/bg.json';

type Language = 'en' | 'bg';

interface Translations {
  nav: {
    home: string;
    about: string;
    ourHotel: string;
    prices: string;
    gallery: string;
    contacts: string;
    bookNow: string;
  };
  header: {
    visits: string;
  };
  home: {
    title: string;
    description: string;
    opened: string;
    staff: string;
    everyRoomHas: string;
    amenities: {
      bathroom: string;
      cableTv: string;
      refrigerator: string;
      airConditioner: string;
      safe: string;
      balconySeaView: string;
    };
    topOffers: string;
    rooms: string;
    restaurant: string;
    resort: string;
  };
  about: {
    title: string;
    content1: string;
    content2: string;
    content3: string;
    content4: string;
  };
  ourHotel: {
    title: string;
    subtitle: string;
    aboutUs: string;
    welcome: string;
    description1: string;
    description2: string;
    accommodations: string;
    ourRooms: string;
    extras: string;
    ourServices: string;
    roomTypes: {
      single: string;
      singleDesc: string;
      double: string;
      doubleDesc: string;
      triple: string;
      tripleDesc: string;
      suite: string;
      suiteDesc: string;
    };
    services: {
      parking: string;
      wifi: string;
      safe: string;
      cot: string;
      laundry: string;
      business: string;
    };
  };
  prices: {
    title: string;
    subtitle: string;
    note: string;
    regularSeason: string;
    peakSeason: string;
    dailyPrices: string;
    packagePrices: string;
    roomType: string;
    importantInfo: string;
    priceIncludes: string;
    roomCapacity: string;
    additionalBed: string;
    childrenFree: string;
    perNight: string;
    free: string;
  };
  gallery: {
    title: string;
    categories: {
      all: string;
      hotel: string;
      rooms: string;
      restaurant: string;
      kiten: string;
    };
    titles: {
      all: string;
      hotel: string;
      rooms: string;
      restaurant: string;
      kiten: string;
    };
  };
  contacts: {
    title: string;
    hotelName: string;
    address: string;
    gps: string;
    phoneFax: string;
    email: string;
    contactForm: string;
    name: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
  };
  booking: {
    title: string;
    note: string;
    name: string;
    namePlaceholder: string;
    roomType: string;
    arrival: string;
    departure: string;
    adults: string;
    calculate: string;
    rooms: {
      single: string;
      double: string;
      triple: string;
      suite: string;
    };
  };
  footer: {
    address: string;
    street: string;
    city: string;
    phone: string;
    email: string;
    locationMap: string;
    facebook: string;
    twitter: string;
    copyright: string;
  };
}

const translations: Record<Language, Translations> = { en, bg };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'bg')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}