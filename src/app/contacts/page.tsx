"use client";
import Image from 'next/image';
import { useState } from 'react';
import ContactConfirmationModal from '@/components/ContactConfirmationModal';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ContactsPage() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmationModal(true);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <main>
      <div className="containt contacts" style={{ padding: '2rem' }}>
        <div className="left-content">
          <h2>{t.contacts.title}</h2>
          <div><strong>{t.contacts.hotelName}</strong></div>
          <div><strong>{t.contacts.address}:</strong> &quot;Briz&quot; Str.2, 8888, Kiten Bulgaria</div>
          <div><strong>{t.contacts.gps}:</strong> N 42.235887 E 27.777469</div>
          <div><strong>{t.contacts.phoneFax}:</strong> (+359) 123 456</div>
          <div><strong>{t.contacts.email}:</strong> info@aqua.com</div>
          <div style={{ marginTop: '2rem' }}>
            <Image className="map" src="/images/map.png" alt="map" width={600} height={450} />
          </div>
        </div>
        <div className="right-content">
          <h2>{t.contacts.contactForm}</h2>
          <form className="contact-form" name="myForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupName">{t.contacts.name}*</label>
              <input type="text" className="form-control" name="name" id="formGroupName" placeholder={t.contacts.namePlaceholder} required />
              <p className="name-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupEmail">{t.contacts.email}*</label>
              <input type="text" className="form-control" name="email" id="formGroupEmail" placeholder={t.contacts.emailPlaceholder} required />
              <p className="email-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupPhone">{t.contacts.phone}*</label>
              <input type="text" className="form-control" name="phone" id="formGroupPhone" placeholder={t.contacts.phonePlaceholder} required />
              <p className="phone-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupSubject">{t.contacts.subject}</label>
              <input type="text" className="form-control" id="formGroupSubject" placeholder={t.contacts.subjectPlaceholder} />
            </div>
            <div className="form-group">
              <textarea name="text" id="message" cols={45} rows={4} placeholder={t.contacts.messagePlaceholder + "*"} required></textarea>
              <p className="text-message"></p>
            </div>
            <button type="submit" className="btn btn-primary">{t.contacts.send}</button>
          </form>
        </div>
      </div>
      <ContactConfirmationModal isVisible={showConfirmationModal} onClose={handleCloseModal} />
    </main>
  );
}