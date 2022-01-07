import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FiMenu} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

class NavbarSection extends Component {
  state = {}

  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    const {activeTab} = this.props
    const activeHome = activeTab === 'HOME' ? 'active' : ''
    return (
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
          </ul>
          <div className="nav-menu-small-device">
            <button type="button" onClick={this.onClickLogout}>
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
    )
  }
}

export default withRouter(NavbarSection)
