import './index.css'

import {Link} from 'react-router-dom'

const NotFoundRoute = () => (
  <>
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/digwhjt1m/image/upload/v1641568349/MKay/erroring_1_ya4kl9.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found.
      </p>
      <p className="not-found-description">Please go back to the homepage</p>
      <Link to="/">
        <button className="home-page-btn" type="button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFoundRoute
