import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="h-[55px] bg-blue-500 border border-orange-500">
      <ul className="flex items-center justify-around w-full h-full list-none">
        <li>
          <Link href="/" className="text-white uppercase font-bold hover:text-orange-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="text-white uppercase font-bold hover:text-orange-400">About Kiten</Link>
        </li>
        <li>
          <Link href="/our_hotel" className="text-white uppercase font-bold hover:text-orange-400">Our Hotel</Link>
        </li>
        <li>
          <Link href="/prices" className="text-white uppercase font-bold hover:text-orange-400">Prices</Link>
        </li>
        <li>
          <Link href="/gallery" className="text-white uppercase font-bold hover:text-orange-400">Gallery</Link>
        </li>
        <li>
          <Link href="/booking" className="book-link px-4 py-2 rounded-md bg-yellow-400 text-blue-700 font-extrabold uppercase hover:bg-yellow-300">Book now</Link>
        </li>
        <li>
          <Link href="/contacts" className="text-white uppercase font-bold hover:text-orange-400">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
