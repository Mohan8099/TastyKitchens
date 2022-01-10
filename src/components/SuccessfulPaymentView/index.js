import {Link} from 'react-router-dom'
import NavbarSection from '../NavbarSection'
import './index.css'

const SuccessfulPaymentView = () => (
  <>
    <NavbarSection activeTab="CART" />
    <div className="payment-container">
      <img
        src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641786579/MKay/Vector_1_m1fztc.png"
        alt="success"
        className="success-img"
      />
      <h1 className="payment-heading">Payment Successful</h1>
      <p className="payment-description">
        Thank you for ordering Your payment is successfully completed.
      </p>

      <Link to="/">
        <button className="go-to-home-btn" type="button">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default SuccessfulPaymentView
