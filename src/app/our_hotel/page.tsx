import Image from 'next/image';

const rooms = [
  { type: 'Single Room', desc: 'Cozy single occupancy with all essentials', icon: 'fa-user' },
  { type: 'Double Room', desc: 'Comfortable double bed for couples', icon: 'fa-users' },
  { type: 'Triple Room', desc: 'Spacious room with three beds', icon: 'fa-users' },
  { type: 'Suite', desc: 'Premium suite with sea view terrace', icon: 'fa-bed' },
];

const services = [
  { name: 'Parking Lot', price: '8 BGN/night', icon: 'fa-car', free: false },
  { name: 'Wireless Internet', price: 'Free', icon: 'fa-wifi', free: true },
  { name: 'Safe', price: 'Free', icon: 'fa-lock', free: true },
  { name: 'Child Cot', price: '5 BGN/night', icon: 'fa-baby', free: false },
  { name: 'Laundry', price: 'Available', icon: 'fa-tshirt', free: false },
  { name: 'Business Services', price: 'Copy/Print/Fax', icon: 'fa-briefcase', free: false },
];

export default function OurHotelPage() {
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
          <h1 className="text-5xl font-serif mb-4">Hotel Aqua</h1>
          <p className="text-xl opacity-90">Your perfect holiday in Kiten, Bulgaria</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="text-center mb-20">
          <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">About Us</span>
          <h2 className="text-4xl font-serif text-gray-800 mt-2 mb-8">Welcome to Hotel Aqua</h2>
          <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 leading-relaxed text-lg">
              Located in the heart of Kiten, just <span className="text-orange-500 font-semibold">50 meters</span> from the south beach.
              Since 2006, we have been providing quality services for an unforgettable holiday. Our hotel offers{' '}
              <span className="font-semibold">2 single, 14 double, 6 triple rooms</span> and <span className="font-semibold">3 suites</span>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mt-4">
              All rooms feature bathroom, cable TV, refrigerator, air conditioning, safe, and private terrace with sea views.
              Our restaurant seats 30 indoors and 60 on the summer terrace, serving traditional Bulgarian cuisine, pizzas, fish, and sea delicacies.
            </p>
          </div>
        </section>

        {/* Room Types */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Accommodations</span>
            <h2 className="text-4xl font-serif text-gray-800 mt-2">Our Rooms</h2>
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
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm">Extras</span>
            <h2 className="text-4xl font-serif text-gray-800 mt-2">Our Services</h2>
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
