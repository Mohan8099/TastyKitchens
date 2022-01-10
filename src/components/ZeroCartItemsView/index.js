import {Link} from 'react-router-dom'

import './index.css'

const ZeroCartItemsView = () => (
  <div className="empty-cart-container">
    <img
      src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641778353/MKay/cooking_1_ykw3vm.png"
      className="empty-cart-img"
      alt="empty cart"
    />
    <h1 className="empty-cart-heading">No Order Yet!</h1>
    <p className="empty-cart-description">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default ZeroCartItemsView
