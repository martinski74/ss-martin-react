import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-2 bg-white text-gray-800">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <Image src="/images/logo.png" alt="logo" width={80} height={80} className="h-20 w-20" />
        <div className="flex flex-col">
          <span className="text-4xl text-orange-500 font-serif">HOTEL AQUA</span>
          <div className="text-yellow-500">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <Image src="/images/bg-old.png" alt="bg" width={25} height={25} className="cursor-pointer" />
        <p className="cursor-pointer">BG</p>
        <Image src="/images/flag-gb.png" alt="gb" width={25} height={25} className="cursor-pointer" />
        <p className="cursor-pointer underline">EN</p>
      </div>
    </header>
  );
};

export default Header;
