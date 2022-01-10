import React from 'react'

const CartItemsContext = React.createContext({
  cartItemList: [],
  addCartItem: () => {},
  removeCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartItemsContext
