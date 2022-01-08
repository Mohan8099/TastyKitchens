import {Link} from 'react-router-dom'

import {ImStarFull} from 'react-icons/im'

import './index.css'

const RestaurantDetailsCard = props => {
  const {restaurantData} = props
  const {id, name, imgUrl, cuisine, userRating} = restaurantData

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link-item">
      <li testid="restaurant-item" className="restaurant-item">
        <img src={imgUrl} alt="restaurant" className="restaurant-img" />
        <div className="restaurant-details-container">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-cuisine">{cuisine}</p>
          <div className="rating-container">
            <ImStarFull className="star" />
            <p className="restaurant-rating">{userRating.rating}</p>
            <p className="restaurant-total-reviews">
              ({userRating.total_reviews} ratings)
            </p>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default RestaurantDetailsCard
