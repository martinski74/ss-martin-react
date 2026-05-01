"use client";
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main>
      <div className="containt about" style={{ padding: '2rem' }}>
        <h2>{t.about.title}</h2>
        <p>{t.about.content1}</p>
        <Image className="left-pic" src="/images/kiten1.jpg" alt="Kiten" width={400} height={300} />
        <p>{t.about.content2}</p>
        <Image className="right-pic" src="/images/kiten2.jpg" alt="Kiten" width={400} height={300} />
        <p>{t.about.content3}</p>
        <p>{t.about.content4}</p>
      </div>
    </main>
  );
}
