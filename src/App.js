import {Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import RestaurantsRoute from './components/RestaurantsRoute'
import CartRoute from './components/CartRoute'
import SuccessfulPaymentView from './components/SuccessfulPaymentView'
import ProtectedRoute from './components/ProtectedRoute'
import NotFoundRoute from './components/NotFoundRoute'

import CartItemsContext from './context/CartItemsContext'

import './App.css'

const getCartItemListFromLocalStorage = () => {
  const stringifiedCartItemList = localStorage.getItem('cartDetails')
  const parsedCartItemList = JSON.parse(stringifiedCartItemList)
  if (parsedCartItemList === null) {
    return []
  }
  return parsedCartItemList
}

class App extends Component {
  state = {
    cartItemList: getCartItemListFromLocalStorage(),
  }

  addCartItem = foodItem => {
    const {cartItemList} = this.state
    const foodObject = cartItemList.find(
      eachCartItem => eachCartItem.id === foodItem.id,
    )
    if (foodObject) {
      this.setState(prevState => ({
        cartItemList: prevState.cartItemList.map(eachCartItem => {
          if (foodObject.id === eachCartItem.id) {
            const updatedQuantity = foodItem.quantity
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      const updatedCartList = [...cartItemList, foodItem]
      this.setState({cartItemList: updatedCartList})
    }
  }

  removeCartItem = id => {
    const {cartItemList} = this.state
    const updatedCartList = cartItemList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartItemList: updatedCartList})
  }

  increaseQuantity = id => {
    this.setState(prevState => ({
      cartItemList: prevState.cartItemList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decreaseQuantity = id => {
    const {cartItemList} = this.state
    const productObject = cartItemList.find(
      eachCartItem => eachCartItem.id === id,
    )
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartItemList: prevState.cartItemList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  render() {
    const {cartItemList} = this.state
    localStorage.setItem('cartDetails', JSON.stringify(cartItemList))
    return (
      <CartItemsContext.Provider
        value={{
          cartItemList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/restaurant/:id"
            component={RestaurantsRoute}
          />
          <ProtectedRoute exact path="/cart" component={CartRoute} />
          <ProtectedRoute
            exact
            path="/payment"
            component={SuccessfulPaymentView}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </CartItemsContext.Provider>
    )
  }
}

export default App
