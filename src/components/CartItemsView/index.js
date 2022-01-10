import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'

import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

const CartItemsView = props => (
  <CartItemsContext.Consumer>
    {value => {
      const {removeCartItem, increaseQuantity, decreaseQuantity} = value
      const {cartItems} = props
      const {id, name, quantity, cost, imageUrl} = cartItems

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      const onIncreaseQuantity = () => {
        increaseQuantity(id)
      }

      const onDecreaseQuantity = () => {
        decreaseQuantity(id)
      }

      return (
        <li className="cart-items">
          <div testid="cartItem">
            <div className="cart-item-name-container">
              <img className="cart-product-image" src={imageUrl} alt={name} />
              <h1 className="cart-name">{name}</h1>
            </div>
            <div className="cart-quantity-container">
              <button
                testid="decrement-quantity"
                onClick={onDecreaseQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsDashSquare color="#52606D" size={10} />
              </button>
              <p testid="item-quantity" className="cart-quantity">
                {quantity}
              </p>
              <button
                testid="increment-quantity"
                onClick={onIncreaseQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsPlusSquare color="#52606D" size={10} />
              </button>
            </div>
            <div className="total-price-delete-container">
              <p className="cart-total-price">
                <FaRupeeSign /> {cost * quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>

            <button
              className="delete-button"
              type="button"
              onClick={onRemoveCartItem}
            >
              <AiFillCloseCircle color="#616E7C" size={20} />
            </button>
          </div>
        </li>
      )
    }}
  </CartItemsContext.Consumer>
)

export default CartItemsView
