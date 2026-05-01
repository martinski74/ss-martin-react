"use client";
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

export default function OurHotelPage() {
  const { t } = useLanguage();

  const rooms = [
    { type: t.ourHotel.roomTypes.single, desc: t.ourHotel.roomTypes.singleDesc, icon: 'fa-user' },
    { type: t.ourHotel.roomTypes.double, desc: t.ourHotel.roomTypes.doubleDesc, icon: 'fa-users' },
    { type: t.ourHotel.roomTypes.triple, desc: t.ourHotel.roomTypes.tripleDesc, icon: 'fa-users' },
    { type: t.ourHotel.roomTypes.suite, desc: t.ourHotel.roomTypes.suiteDesc, icon: 'fa-bed' },
  ];

  const services = [
    { name: t.ourHotel.services.parking, price: '8 BGN/night', icon: 'fa-car', free: false },
    { name: t.ourHotel.services.wifi, price: t.prices.free, icon: 'fa-wifi', free: true },
    { name: t.ourHotel.services.safe, price: t.prices.free, icon: 'fa-lock', free: true },
    { name: t.ourHotel.services.cot, price: '5 BGN/night', icon: 'fa-baby', free: false },
    { name: t.ourHotel.services.laundry, price: 'Available', icon: 'fa-tshirt', free: false },
    { name: t.ourHotel.services.business, price: 'Copy/Print/Fax', icon: 'fa-briefcase', free: false },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hotel/BIG_hotel.jpg"
          alt="Hotel Aqua"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-serif mb-4">{t.ourHotel.title}</h1>
          <p className="text-xl opacity-90">{t.ourHotel.subtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="text-center mb-20">
          <span className="font-semibold tracking-wider uppercase text-sm">{t.ourHotel.aboutUs}</span>
          <h2 className="text-4xl font-serif text-gray-800 mt-2 mb-8">{t.ourHotel.welcome}</h2>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed text-lg">
              {t.ourHotel.description1}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              {t.ourHotel.description2}
            </p>
          </div>
        </section>

        {/* Room Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="font-semibold tracking-wider uppercase text-sm">{t.ourHotel.accommodations}</span>
            <h2 className="text-4xl font-serif text-gray-800 mt-2">{t.ourHotel.ourRooms}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room) => (
              <div
                key={room.type}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className={`fa ${room.icon} text-white text-2xl`} aria-hidden="true"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{room.type}</h3>
                <p className="text-gray-500 text-center text-sm">{room.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <div className="text-center mb-12">
            <span className="font-semibold tracking-wider uppercase text-sm">{t.ourHotel.extras}</span>
            <h2 className="text-4xl font-serif text-gray-800 mt-2">{t.ourHotel.ourServices}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${service.free ? 'bg-green-100' : 'bg-orange-100'}`}>
                  <i className={`fa ${service.icon} ${service.free ? 'text-green-600' : 'text-orange-500'} text-xl`} aria-hidden="true"></i>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{service.name}</h4>
                  <p className={`text-sm ${service.free ? 'text-green-600 font-medium' : 'text-gray-500'}`}>
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}