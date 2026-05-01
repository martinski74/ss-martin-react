"use client";
import Image from 'next/image';
import Link from 'next/link';
import SimpleSlider from '../components/Slider';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SimpleSlider />

      <div className="info">
        <div>
          <h2>{t.home.title}</h2>
          <p>{t.home.description}</p>
          <p>{t.home.opened}</p>
          <p>{t.home.staff}</p>
        </div>
        <div className="room-info">
          <h2>{t.home.everyRoomHas}</h2>
          <ul>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.bathroom}</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.cableTv}</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.refrigerator}</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.airConditioner}</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.safe}</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>{t.home.amenities.balconySeaView}</li>
          </ul>
        </div>
        <div className="offers">
          <h2><Link href="/promo">{t.home.topOffers}</Link></h2>
        </div>
      </div>

      <div className="category-content">
        <div>
          <Image src="/images/rooms/room3.jpg" alt="room" width={400} height={300} />
          <p><Link href="/gallery?category=rooms">{t.home.rooms}</Link></p>
        </div>
        <div>
          <Image src="/images/resataurant/BIG_hotel1.jpg" alt="Restaurant" width={400} height={300} />
          <p><Link href="/gallery?category=restaurant">{t.home.restaurant}</Link></p>
        </div>
        <div>
          <Image src="/images/kiten/kiten.jpg" alt="sea" width={400} height={300} />
          <p><Link href="/gallery?category=kiten">{t.home.resort}</Link></p>
        </div>
      </div>
    </>
  );
}
