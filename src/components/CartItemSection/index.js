import CartItemsView from '../CartItemsView'
import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

const CartItemSection = () => (
  <CartItemsContext.Consumer>
    {value => {
      const stringifiedCartDetails = localStorage.getItem('cartDetails')
      const parsedCartDetails = JSON.parse(stringifiedCartDetails)
      return (
        <ul className="cart-list">
          {parsedCartDetails.map(eachItem => (
            <CartItemsView
              key={eachItem.id}
              cartItems={eachItem}
              value={value}
            />
          ))}
        </ul>
      )
    }}
  </CartItemsContext.Consumer>
)

export default CartItemSection
