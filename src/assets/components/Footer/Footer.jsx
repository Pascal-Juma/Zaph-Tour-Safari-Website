import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./Footer.css";
import Logo from "../Logo/Logo";
import Handle from "../Handle/Handle/Handle";
import Links from '../Links/Links'

function Footer() {
  return (
    <>
      <div className="footer-section">
        <div className="footer-company">
          <div className="company-logo">
            <Logo />
          </div>
          <div className="company-branding">
            <p className="branding-details">
              Fly your dreams to reality. Subscribe for updates and discover
              refined, opulent travel
            </p>
          </div>
        </div>
        <div className="footer-links">
          <div className="links-container">
            <p className="links-title">Quick links</p>
          </div>
          <div className="links-list">
            <ol>
              <Links to={"/contact"} label="Contact Us" />
              <Links to={"/blog"} label="Blog" />
              <Links to={"/safari"} label="Safari" />
              <Links to={"/destination"} label="Destination" />
              <Links to={"/blog"} label="About Us" />
              <Links to={"/"} label="Home" />
            </ol>
          </div>
        </div>
        <div className="contact-container">
          <div className="contact-title">
            <p className="contact-heading">Contact Info</p>
          </div>
          <div className="contact-info">
            <Handle icon={<FaPhone />} text="+(254) 7485 95104" />
            <Handle
              icon={<MdOutlineMailOutline />}
              text="zaphtours@safari.com"
            />
            <Handle
              icon={<IoLocationOutline />}
              text="386 Majestic Blvd, Along Mystic -New Orleans Road"
            />
          </div>
        </div>
        <div className="footer-socials">
          <FaFacebookF /> <FaXTwitter /> <CiLinkedin /> <FaInstagram />
          <p className="footer-rights">
            &copy; 2025. All Rights Reserved. Powered by Creative <span className="rights-branding">Vortex.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
