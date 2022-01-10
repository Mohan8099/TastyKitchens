import {Link} from 'react-router-dom'

import {FaRupeeSign} from 'react-icons/fa'

import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

const OrderTotalSection = () => (
  <CartItemsContext.Consumer>
    {value => {
      const {cartItemList} = value
      let totalCost = 0
      cartItemList.forEach(eachCartItem => {
        totalCost += eachCartItem.cost * eachCartItem.quantity
      })

      return (
        <>
          <hr className="hr-line" />
          <div className="cart-summary-container">
            <h1 className="order-total-value">Order Total:</h1>
            <div className="total-container">
              <p testid="total-price" className="total">
                <FaRupeeSign /> {totalCost}
              </p>
              <Link to="/payment">
                <button type="button" className="order-button">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </>
      )
    }}
  </CartItemsContext.Consumer>
)

export default OrderTotalSection
