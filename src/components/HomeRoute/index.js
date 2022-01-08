import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NavbarSection from '../NavbarSection'
import CarouselSection from '../CarouselSection'
import RestaurantsSection from '../RestaurantsSection'
import Footer from '../Footer'

import './index.css'

const HomeRoute = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <NavbarSection activeTab="HOME" />
      <CarouselSection />
      <RestaurantsSection />
      <Footer />
    </>
  )
}

export default HomeRoute
