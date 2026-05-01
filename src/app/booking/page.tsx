"use client";

import React, { useState } from 'react';
import BookingModal from '@/components/BookingModal';
import { useLanguage } from '@/i18n/LanguageContext';

type RoomType = 'single' | 'double' | 'triple' | 'suite';

interface BookingResult {
  name: string;
  roomType: string;
  nights: number;
  totalPrice: number;
}

export default function BookingPage() {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState<RoomType>('double');
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
  const { t } = useLanguage();

  const resetForm = () => {
    setName('');
    setRoomType('double');
    setArrivalDate('');
    setDepartureDate('');
    setAdults(2);
  };

  const roomPrices: Record<RoomType, Record<string, number>> = {
    single: { early: 40, mid: 45, peak: 55, late: 45, autumn: 40 },
    double: { early: 70, mid: 85, peak: 70, late: 55, autumn: 60 },
    triple: { early: 90, mid: 100, peak: 90, late: 80, autumn: 95 },
    suite: { early: 110, mid: 130, peak: 110, late: 100, autumn: 120 },
  };

  const roomCapacity: Record<RoomType, number> = {
    single: 1,
    double: 2,
    triple: 3,
    suite: 4,
  };

  const getSeasonKey = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if ((month === 5 && day >= 20) || (month === 6 && day <= 30)) {
      return 'early';
    }
    if (month === 7 && day >= 1 && day <= 15) {
      return 'mid';
    }
    if ((month === 7 && day >= 16) || (month === 8 && day <= 19)) {
      return 'peak';
    }
    if (month === 8 && day >= 20 && day <= 31) {
      return 'late';
    }
    if (month === 9 && day >= 1 && day <= 20) {
      return 'autumn';
    }
    return 'early';
  };

  const getPriceForDate = (date: Date, room: RoomType): number => {
    const seasonKey = getSeasonKey(date);
    return roomPrices[room][seasonKey];
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
    const capacity = roomCapacity[roomType];
    const adultSurcharge = adults > capacity ? (adults - capacity) * 20 : 0;

    for (let i = 0; i < nights; i++) {
      const currentNight = new Date(start);
      currentNight.setDate(start.getDate() + i);
      const roomPrice = getPriceForDate(currentNight, roomType);
      totalPrice += roomPrice + adultSurcharge;
    }

    const roomLabel = t.booking.rooms[roomType];
    setBookingResult({ name, roomType: roomLabel, nights, totalPrice });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setBookingResult(null);
    resetForm();
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
    border: '2px solid #9ca3af',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#ffffff',
    color: '#111827',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.08)',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 700,
    color: '#111827',
  };

  return (
    <>
      <main>
        <div className="containt booking" style={{ padding: '2rem' }}>
          <h3>{t.booking.title}</h3>
          <p className="text-center mb-4">{t.booking.note}</p>
          <div className="flex">
            <form style={formStyle} className="booking-form">
              <div className="form-group">
                <label htmlFor="names" style={labelStyle}>{t.booking.name}</label>
                <input
                  type="text"
                  id="names"
                  placeholder={t.booking.namePlaceholder}
                  className="form-control"
                  style={inputStyle}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)';
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="roomType" style={labelStyle}>{t.booking.roomType}</label>
                <select
                  id="roomType"
                  className="form-control"
                  style={inputStyle}
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value as RoomType)}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <option value="single">{t.booking.rooms.single}</option>
                  <option value="double">{t.booking.rooms.double}</option>
                  <option value="triple">{t.booking.rooms.triple}</option>
                  <option value="suite">{t.booking.rooms.suite}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="arival" style={labelStyle}>{t.booking.arrival}</label>
                <input
                  type="date"
                  id="arival"
                  className="form-control"
                  style={inputStyle}
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)';
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="departure" style={labelStyle}>{t.booking.departure}</label>
                <input
                  type="date"
                  id="departure"
                  className="form-control"
                  style={inputStyle}
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)';
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="adults" style={labelStyle}>{t.booking.adults}</label>
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
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#2563eb';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#9ca3af';
                    e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.08)';
                  }}
                />
              </div>
              <div>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleCalculate}>
                  {t.booking.calculate}
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