import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Slider from 'react-slick'

import './index.css'

class CarouselSection extends Component {
  state = {
    carouselItems: [],
    isLoading: [],
  }

  componentDidMount() {
    this.getCarouselDetails()
  }

  getCarouselDetails = async () => {
    this.setState({
      isLoading: true,
    })
    const carouselUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(carouselUrl, options)
    const data = await response.json()
    const updatedData = data.offers.map(eachItem => ({
      id: eachItem.id,
      imgUrl: eachItem.image_url,
    }))
    this.setState({
      carouselItems: updatedData,
      isLoading: false,
    })
  }

  renderSliderView = () => {
    const {carouselItems} = this.state
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    }

    return (
      <ul className="bg-container">
        <Slider {...settings}>
          {carouselItems.map(eachImage => (
            <li key={eachImage.id}>
              <img src={eachImage.imgUrl} alt="offer" className="offer-img" />
            </li>
          ))}
        </Slider>
      </ul>
    )
  }

  renderLoading = () => (
    <div className="carousel-container">
      <div testid="restaurants-offers-loader" className="carousel-loader">
        <Loader type="ThreeDots" color="#F7931E" height={50} width={50} />
      </div>
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoading() : this.renderSliderView()
  }
}

export default CarouselSection
