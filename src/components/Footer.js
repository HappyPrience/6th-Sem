import "../css/Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-section">
          <h2 className="footer-logo">Mane Made</h2>
          <p>
            Fresh • Local • Homemade products delivered directly to your doorstep.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h3>Customer Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>

          <h3 className="payment-title">We Accept</h3>
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <SiGooglepay />
            <FaCcPaypal />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Mane Made | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;