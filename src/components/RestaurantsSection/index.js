import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RiArrowDropLeftLine, RiArrowDropRightLine} from 'react-icons/ri'

import RestaurantHeader from '../RestaurantHeader'
import RestaurantDetailsCard from '../RestaurantDetailsCard'

import './index.css'

const sortByOptions = [
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class RestaurantsSection extends Component {
  state = {
    restaurantDetailsList: [],
    isLoading: false,
    sortByValue: sortByOptions[1].value,
    activePage: 1,
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {sortByValue, activePage} = this.state
    const LIMIT = 9
    const offset = (activePage - 1) * LIMIT
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}&sort_by_rating=${sortByValue}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)

      const updatedData = data.restaurants.map(eachRestaurant => ({
        costForTwo: eachRestaurant.cost_for_two,
        cuisine: eachRestaurant.cuisine,
        groupByTime: eachRestaurant.group_by_time,
        hasOnlineDelivery: eachRestaurant.has_online_delivery,
        hasTableBooking: eachRestaurant.has_table_booking,
        id: eachRestaurant.id,
        imgUrl: eachRestaurant.image_url,
        isDeliveringNow: eachRestaurant.is_delivering_now,
        location: eachRestaurant.location,
        menuType: eachRestaurant.menu_type,
        name: eachRestaurant.name,
        opensAt: eachRestaurant.opens_at,
        userRating: eachRestaurant.user_rating,
      }))
      this.setState({
        restaurantDetailsList: updatedData,
        isLoading: false,
      })
    }
  }

  updateSortByValue = sortByValue => {
    this.setState({sortByValue}, this.getRestaurantDetails)
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurantDetails,
      )
    }
  }

  onClickRightArrow = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurantDetails,
      )
    }
  }

  renderRestaurants = () => {
    const {restaurantDetailsList, sortByValue, activePage} = this.state

    return (
      <>
        <RestaurantHeader
          sortByValue={sortByValue}
          sortByOptions={sortByOptions}
          updateSortByValue={this.updateSortByValue}
        />
        <hr className="line" />
        <div className="cards-container">
          <ul className="restaurants-list">
            {restaurantDetailsList.map(eachRestaurant => (
              <RestaurantDetailsCard
                restaurantData={eachRestaurant}
                key={eachRestaurant.id}
              />
            ))}
          </ul>
        </div>
        <div className="pagination-container">
          <button
            testid="pagination-left-button"
            className="button"
            type="button"
            onClick={this.onClickLeftArrow}
          >
            <RiArrowDropLeftLine className="arrow" />
          </button>
          <h1 testid="active-page-number" className="page-number">
            {activePage} of 4
          </h1>
          <button
            testid="pagination-right-button"
            className="button"
            type="button"
            onClick={this.onClickRightArrow}
          >
            <RiArrowDropRightLine className="arrow" />
          </button>
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div testid="restaurants-list-loader" className="restaurants-list-loader">
      <Loader type="TailSpin" color="#F7931E" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderRestaurants()
  }
}

export default RestaurantsSection
