import Header from '../NavbarSection'
import CartItemSection from '../CartItemSection'
import OrderTotalSection from '../OrderTotalSection'
import ZeroCartItemsView from '../ZeroCartItemsView'
import Footer from '../Footer'

import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

const CartRoute = () => (
  <CartItemsContext.Consumer>
    {value => {
      const {cartItemList} = value
      const noOrdersView = cartItemList.length === 0
      return (
        <>
          <Header activeTab="CART" />
          <div className="cart-container">
            {noOrdersView ? (
              <ZeroCartItemsView />
            ) : (
              <div className="cart-container">
                <div className="cart-headings-container">
                  <p className="item">Item</p>
                  <p className="quantity">Quantity</p>
                  <p className="price">Price</p>
                </div>
                <CartItemSection />
                <OrderTotalSection />
              </div>
            )}
          </div>
          <Footer />
        </>
      )
    }}
  </CartItemsContext.Consumer>
)

export default CartRoute
