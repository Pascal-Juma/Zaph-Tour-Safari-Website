import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Handle from "../../components/Handle/Handle/Handle";
import Button from "../../components/Button/Button";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="contact-upper-section">
        <div className="contact-form-inputs">
          <div className="form-title">
            <h1 className="form-heading">Leave a Reply</h1>
          </div>
          <div className="form-container">
            <form className="form-content">
              <input
                type="text"
                className="contact-user"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                className="contact-email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                className="contact-message"
                placeholder="Write Your Message Here"
                required
              />
              <div className="form-send">
                <Button btn={"Send A Message"} />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-company">
          <div className="contact-company-email">
            <p className="company-email-title">Drop A Line</p>
            <h1 className="company-email-heading">Mail Us</h1>
            <div className="official-email">
            <Handle
              icon={<MdOutlineMailOutline />}
              text={"zaphtours@safari.com"}
            />
            </div>
          </div>
          <div className="contact-company-landline">
            <p className="landline-phone">Service 24/7</p>
            <h1 className="landline-heading">Call Us on</h1>
            <div className="official-landline">
              <Handle icon={<FaPhone />} text="(254) 7485 95104" />
            </div>
          </div>
          <div className="contact-company-location">
            <p className="company-physical">Location</p>
            <h1 className="physical-heading">Find Us on</h1>
          <div className="official-location">
            <Handle
                icon={<IoLocationOutline />}
                text={"386 Majestic Blvd, Along Mystic - New Orleans Road"}
              />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
