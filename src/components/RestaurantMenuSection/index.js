import {Component} from 'react'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'

import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

class RestaurantMenuSection extends Component {
  state = {quantity: 0}

  render() {
    return (
      <CartItemsContext.Consumer>
        {value => {
          const {addCartItem, increaseQuantity, decreaseQuantity} = value
          const {quantity} = this.state
          const {foodItemDetails} = this.props
          const {id, imageUrl, name, cost, rating} = foodItemDetails

          const onClickAddToCart = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addCartItem({...foodItemDetails, quantity: 1}),
            )
          }

          const onIncreaseQuantity = () => {
            this.setState(prevState => ({
              quantity: prevState.quantity + 1,
            }))
            increaseQuantity(id)
          }

          const onDecreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decreaseQuantity(id)
          }

          return (
            <li testid="foodItem" className="food-item">
              <img src={imageUrl} alt="food-item" className="food-item-image" />
              <div>
                <h1 className="food-name">{name}</h1>
                <div className="cost-container">
                  <FaRupeeSign />
                  <p className="food-cost">{cost}</p>
                </div>
                <div className="rating-container">
                  <ImStarFull className="star" />
                  <p className="rating">{rating}</p>
                </div>

                {quantity === 0 ? (
                  <button
                    onClick={onClickAddToCart}
                    className="add-button"
                    type="button"
                  >
                    Add
                  </button>
                ) : (
                  <div className="cart-quantity-container">
                    <button
                      testid="decrement-count"
                      onClick={onDecreaseQuantity}
                      type="button"
                      className="quantity-controller-button"
                    >
                      <BsDashSquare
                        className="quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                    <p testid="active-count" className="cart-quantity">
                      {quantity}
                    </p>
                    <button
                      testid="increment-count"
                      onClick={onIncreaseQuantity}
                      type="button"
                      className="quantity-controller-button"
                    >
                      <BsPlusSquare
                        className="quantity-controller-icon"
                        color="#52606D"
                        size={12}
                      />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </CartItemsContext.Consumer>
    )
  }
}
export default RestaurantMenuSection
