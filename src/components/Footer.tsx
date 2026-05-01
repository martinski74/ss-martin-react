
"use client";
import { useLanguage } from '@/i18n/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-container">
        <h2>Hotel AQUA</h2>
        {t.footer.address}: {t.footer.street}
        <br /> {t.footer.city}
        <br /> {t.footer.phone} (+359) 888 206 621; (+359) 887 262 107
        <br /> {t.footer.email}: info@hotelaqua.com
        <br />
        <a href="https://www.google.bg/maps/place/" target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker" aria-hidden="true"></i> {t.footer.locationMap}</a>
      </div>
      <div className="socials">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">{t.footer.facebook}</a>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">{t.footer.twitter}</a>
      </div>
      <hr />
      <div className="copyright">
        &copy; {new Date().getFullYear()} {t.footer.copyright} Martin Design.
      </div>
    </footer>
  );
};

export default Footer;
