import "../styles/contact.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact">
        <h2>Get in Touch</h2>
        <p>
          For more info or inquiry about our services and pricing please feel
          free to het in touch with us
        </p>
        <form action="">
          <div className="input-item">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Name" id="name" />
          </div>
          <div className="input-item">
            <label htmlFor="email"></label>
            <input type="text" placeholder="Email" id="email" />
          </div>
          <div className="input-item">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button type="submit" className="button">
            Submit Now
          </button>
        </form>
        <div className="info">
          <div className="info-item">
            <strong>Address:</strong>
            <p>123 Elm Street, Springfield, MA 01103 </p>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <p>contact@mail.com</p>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <p>(01) 1234-5678</p>
          </div>
          <div className="info-item">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <div className="map"></div>
    </section>
  );
}
