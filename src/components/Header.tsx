"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

const Header = () => {
  const [visits, setVisits] = useState<number | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const updateVisits = async () => {
      try {
        const res = await fetch('/api/visits', { method: 'POST' });
        const data = await res.json();
        setVisits(data.count);
      } catch {
        setVisits(0);
      }
    };
    updateVisits();
  }, []);

  return (
    <header className="flex items-center justify-between p-2 bg-white text-gray-800">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Image src="/images/logo.png" alt="logo" width={80} height={80} className="h-20 w-20" />
        <div className="flex flex-col">
          <span className="text-4xl text-orange-500 font-serif">{t.home.title}</span>
          <div className="text-yellow-500">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {visits !== null && (
          <span className="visits-counter">
            <i className="fa fa-eye" aria-hidden="true"></i>
            {visits}
          </span>
        )}
        <Image src="/images/bg-old.png" alt="bg" width={25} height={25} className="cursor-pointer" onClick={() => setLanguage('bg')} />
        <p className={`cursor-pointer ${language === 'bg' ? 'underline' : ''}`} onClick={() => setLanguage('bg')}>BG</p>
        <Image src="/images/flag-gb.png" alt="gb" width={25} height={25} className="cursor-pointer" onClick={() => setLanguage('en')} />
        <p className={`cursor-pointer ${language === 'en' ? 'underline' : ''}`} onClick={() => setLanguage('en')}>EN</p>
      </div>
    </header>
  );
};

export default Header;
