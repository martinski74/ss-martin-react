
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <h2>Hotel AQUA</h2>
        Addres: Briz Str.22
        <br /> 8888, Kiten, Bulgaria
        <br /> Phone (+359) 888 206 621; (+359) 887 262 107
        <br /> e-mail: info@hotelaqua.com
        <br />
        <a href="https://www.google.bg/maps/place/" target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker" aria-hidden="true"></i> Location map</a>
      </div>
      <div className="socials">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">facebook</a>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">twitter</a>
      </div>
      <hr />
      <div className="copyright">
        &copy; {new Date().getFullYear()} Hotel complex Aqua. All rights reserved. Martin Design.
      </div>
    </footer>
  );
};

export default Footer;
