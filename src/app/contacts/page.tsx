
"use client"
import Image from 'next/image';
import { useState } from 'react';
import ContactConfirmationModal from '@/components/ContactConfirmationModal';

export default function ContactsPage() {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server.
    // For this example, we'll just show the confirmation modal.
    setShowConfirmationModal(true);
    // Optionally clear the form fields here
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
          <h2>Contacts</h2>
          <div><strong>Hotel AQUA - Kiten</strong></div>
          <div><strong>Address:</strong> "Briz" Str.2, 8888, Kiten Bulgaria</div>
          <div><strong>GPS coordinates:</strong> N 42.235887 E 27.777469</div>
          <div><strong>Phone/Fax:</strong> (+359) 123 456</div>
          <div><strong>E-mail:</strong> info@aqua.com</div>
          <div style={{ marginTop: '2rem' }}>
            <Image className="map" src="/images/map.png" alt="map" width={600} height={450} />
          </div>
        </div>
        <div className="right-content">
          <h2>Contact form</h2>
          <form className="contact-form" name="myForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="formGroupName">Name*</label>
              <input type="text" className="form-control" name="name" id="formGroupName" placeholder="Your name" required />
              <p className="name-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupEmail">E-mail*</label>
              <input type="text" className="form-control" name="email" id="formGroupEmail" placeholder="E-mail" required />
              <p className="email-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupPhone">Phone*</label>
              <input type="text" className="form-control" name="phone" id="formGroupPhone" placeholder="Phone" required />
              <p className="phone-message"></p>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupSubject">Subject</label>
              <input type="text" className="form-control" id="formGroupSubject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="text" id="message" cols={45} rows={4} placeholder="Message*" required></textarea>
              <p className="text-message"></p>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <ContactConfirmationModal isVisible={showConfirmationModal} onClose={handleCloseModal} />
    </main>
  );
}
