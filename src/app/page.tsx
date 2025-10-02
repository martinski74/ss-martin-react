import Image from 'next/image';
import Link from 'next/link';
import SimpleSlider from '../components/Slider';

export default function Home() {
  return (
    <>
      <SimpleSlider />

      <div className="info">
        <div>
          <h2>HOTEL AQUA</h2>
          <p>Hotel Aqua is located in resort Kiten, one of the famous and tempting spots in the southern Black Sea coast.</p>
          <p>The hotel has opened its doors in 2006 and everything in it is consistent with the comfortable stay of guests.</p>
          <p>Highly professional and qualified staff of hotel "Aqua" will make your stay more comfortable and pleasant!</p>
        </div>
        <div className="room-info">
          <h2>EVERY ROOM HAS</h2>
          <ul>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>bathroom</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>cable TV</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>refrigerator</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>air-conditioner</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>safe</li>
            <li><i className="fa fa-check-circle-o" aria-hidden="true"></i>balconi with sea view</li>
          </ul>
        </div>
        <div className="offers">
          <h2><Link href="/promo">Top OFFERS</Link></h2>
        </div>
      </div>

      <div className="category-content">
        <div>
          <Image src="/images/rooms/room3.jpg" alt="room" width={400} height={300} />
          <p><Link href="/rooms">Rooms</Link></p>
        </div>
        <div>
          <Image src="/images/resataurant/BIG_hotel1.jpg" alt="Restaurant" width={400} height={300} />
          <p><Link href="/restaurant">Restaurant</Link></p>
        </div>
        <div>
          <Image src="/images/kiten/kiten.jpg" alt="sea" width={400} height={300} />
          <p><Link href="/kiten">Resort</Link></p>
        </div>
      </div>
    </>
  );
}
