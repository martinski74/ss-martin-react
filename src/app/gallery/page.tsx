import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    // Hotel
    '/images/hotel/BIG_hotel.jpg',
    '/images/hotel/BIG_hotel6.jpg',
    '/images/hotel/BIG_hotel7.jpg',
    '/images/hotel/BIG_hotel8.jpg',
    '/images/hotel/BIG_hotel9.jpg',
    // Rooms
    '/images/rooms/room1.jpg',
    '/images/rooms/room2.jpg',
    '/images/rooms/room3.jpg',
    '/images/rooms/room4.jpg',
    '/images/rooms/room5.jpg',
    '/images/rooms/room6.jpg',
    '/images/rooms/room7.jpg',
    '/images/rooms/room8.jpg',
    '/images/rooms/room9.jpg',
    '/images/rooms/room10.jpg',
    // Restaurant (with typo in path)
    '/images/resataurant/BIG_hotel1.jpg',
    '/images/resataurant/BIG_hotel2.jpg',
    '/images/resataurant/BIG_hotel3.jpg',
    '/images/resataurant/BIG_hotel4.jpg',
    '/images/resataurant/BIG_hotel5.jpg',
    // Kiten
    '/images/kiten/kiten-beach.jpg',
    '/images/kiten/kiten.jpg',
    '/images/kiten/kiten1.jpg',
    '/images/kiten/kiten2.jpg',
    '/images/kiten/sea.jpg',
    '/images/kiten/sea1.jpg',
  ];

  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
    padding: '2rem',
  };

  return (
    <main>
      <div className="containt" style={{ padding: '2rem' }}>
        <h2>Gallery</h2>
        <div style={galleryStyle}>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`Gallery image ${index + 1}`} width={400} height={300} style={{ objectFit: 'cover' }} />
          ))}
        </div>
      </div>
    </main>
  );
}
