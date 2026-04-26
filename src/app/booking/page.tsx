"use client";

import React, { useState } from 'react';
import BookingModal from '@/components/BookingModal';

// Define the result type for clarity
interface BookingResult {
  name: string;
  nights: number;
  totalPrice: number;
}

export default function BookingPage() {
  // Form state
  const [name, setName] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(2); // Default to 2 adults

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);

  // Pricing logic based on the prices page
  const getPriceForDate = (date: Date): number => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-indexed

    // Note: Prices from the page seemed to have typos.
    // Using a more logical progression for this implementation.
    if ((month === 5 && day >= 20) || (month === 6 && day <= 30)) {
      return 70; // 20.05 - 30.06
    }
    if (month === 7 && day >= 1 && day <= 15) {
      return 85; // 01.07 - 15.07
    }
    if ((month === 7 && day >= 16) || (month === 8 && day <= 19)) {
      return 95; // 16.07 - 19.08 (Assumed peak price)
    }
    if (month === 8 && day >= 20 && day <= 31) {
      return 85; // 20.08 - 31.08 (Assumed post-peak price)
    }
    if (month === 9 && day >= 1 && day <= 20) {
      return 60; // 01.09 - 20.09
    }
    return 60; // Default/off-season price
  };

  const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!arrivalDate || !departureDate || !name || adults <= 0) {
      alert('Please fill in all fields and select at least 1 adult.');
      return;
    }

    const start = new Date(arrivalDate);
    const end = new Date(departureDate);
    const timeDiff = end.getTime() - start.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (nights <= 0) {
      alert('Departure date must be after the arrival date.');
      return;
    }

    let totalPrice = 0;
    const adultSurcharge = adults > 2 ? (adults - 2) * 20 : 0;

    for (let i = 0; i < nights; i++) {
      const currentNight = new Date(start);
      currentNight.setDate(start.getDate() + i);
      const roomPrice = getPriceForDate(currentNight);
      totalPrice += roomPrice + adultSurcharge;
    }

    setBookingResult({ name, nights, totalPrice });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBookingResult(null);
  };
  
  const formStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem' as const,
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyle: React.CSSProperties = {
    padding: '0.75rem 1rem',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 600,
    color: '#333',
  };

  return (
    <>
      <main>
        <div className="containt booking" style={{ padding: '2rem' }}>
          <h3>Calculate your stay in our hotel</h3>
          <p className="text-center mb-4">
            Note: Calculation is for a Double Room. For each adult over 2, a 20lv surcharge per night is added.
          </p>
          <div className="flex">
            <form style={formStyle} className="booking-form">
              <div className="form-group">
                <label htmlFor="names" style={labelStyle}>Name</label>
                <input
                  type="text"
                  id="names"
                  placeholder="Your Name..."
                  className="form-control"
                  style={inputStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="arival" style={labelStyle}>Arrival</label>
                <input
                  type="date"
                  id="arival"
                  className="form-control"
                  style={inputStyle}
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="departure" style={labelStyle}>Departure</label>
                <input
                  type="date"
                  id="departure"
                  className="form-control"
                  style={inputStyle}
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="adults" style={labelStyle}>Adults</label>
                <input
                  type="number"
                  min="1"
                  max="9"
                  id="adults"
                  placeholder="2"
                  className="form-control"
                  style={inputStyle}
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value, 10))}
                />
              </div>
              <div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleCalculate}>
                  Calculate
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      {isModalOpen && <BookingModal result={bookingResult} onClose={closeModal} />}
    </>
  );
}
