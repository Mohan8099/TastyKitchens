import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-logo-container">
      <img
        className="footer-logo"
        src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641572573/MKay/Vector_yopzcd.png"
        alt="website-footer-logo"
      />
      <h1 className="footer-heading">Tasty Kitchens </h1>
    </div>
    <p className="footer-description">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="contact-us-container">
      <FaPinterestSquare
        testid="pintrest-social-icon"
        className="pintrest-social-icon"
      />
      <FaInstagram
        testid="instagram-social-icon"
        className="instagram-social-icon"
      />
      <FaTwitter testid="twitter-social-icon" className="twitter-social-icon" />
      <FaFacebookSquare
        testid="facebook-social-icon"
        className="facebook-social-icon"
      />
    </div>
  </div>
)

export default Footer
