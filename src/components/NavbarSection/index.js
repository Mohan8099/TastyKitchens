import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FiMenu} from 'react-icons/fi'
import {AiFillCloseSquare} from 'react-icons/ai'

import CartItemsContext from '../../context/CartItemsContext'

import './index.css'

class NavbarSection extends Component {
  state = {
    isMenuIconClicked: false,
  }

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  onClickMenu = () => {
    this.setState(prev => ({isMenuIconClicked: !prev.isMenuIconClicked}))
  }

  onClickClose = () => {
    this.setState(prev => ({isMenuIconClicked: !prev.isMenuIconClicked}))
  }

  renderCartItemsCount = () => (
    <CartItemsContext.Consumer>
      {value => {
        const {cartItemList} = value
        const cartCount = cartItemList.length
        return (
          <>
            {cartCount > 0 ? (
              <span className="cart-count">{cartCount}</span>
            ) : null}
          </>
        )
      }}
    </CartItemsContext.Consumer>
  )

  render() {
    const {activeTab} = this.props
    const {isMenuIconClicked} = this.state
    const activeHome = activeTab === 'HOME' ? 'active' : ''
    const activeCart = activeTab === 'CART' ? 'active' : ''
    return (
      <>
        <nav className="nav-header">
          <div className="nav-content">
            <div className="logo-name">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641566976/MKay/Frame_274_zuxxwi.png"
                  alt="website logo"
                />
              </Link>
              <Link to="/" className="heading-link">
                <h1 className="heading">Tasty Kitchens</h1>
              </Link>
            </div>
            <ul className="nav-menu">
              <Link to="/" className={`nav-link ${activeHome}`}>
                <li>Home</li>
              </Link>
              <Link to="/cart" className={`nav-link ${activeCart}`}>
                <li>
                  Cart{' '}
                  <span className="active">{this.renderCartItemsCount()}</span>
                </li>
              </Link>
            </ul>
            <div className="nav-menu-small-device">
              <button type="button" onClick={this.onClickMenu}>
                <FiMenu className="nav-menu-small-device" />
              </button>
            </div>
            <button
              type="button"
              className="logout-desktop-btn"
              onClick={this.onClickLogout}
            >
              Logout
            </button>
          </div>
        </nav>
        {isMenuIconClicked && (
          <div className="nav-mobile-menu">
            <div className="nav-menu-mobile">
              <div className="nav-menu-container">
                <ul className="nav-menu-list-mobile">
                  <li className="nav-menu-item-mobile">
                    <Link to="/" className={`nav-link ${activeHome}`}>
                      Home
                    </Link>
                    <Link to="/cart" className={`nav-link ${activeCart}`}>
                      <li>
                        Cart{' '}
                        <span className="active">
                          {this.renderCartItemsCount()}
                        </span>
                      </li>
                    </Link>
                  </li>
                </ul>
                <button
                  type="button"
                  className="logout-mobile-btn"
                  onClick={this.onClickLogout}
                >
                  Logout
                </button>
              </div>
              <button type="button" onClick={this.onClickClose}>
                <AiFillCloseSquare className="nav-menu-small-device" />
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(NavbarSection)
