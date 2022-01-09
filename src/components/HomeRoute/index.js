import NavbarSection from '../NavbarSection'
import CarouselSection from '../CarouselSection'
import RestaurantsSection from '../RestaurantsSection'
import Footer from '../Footer'

import './index.css'

const HomeRoute = () => (
  <>
    <NavbarSection activeTab="HOME" />
    <CarouselSection />
    <RestaurantsSection />
    <Footer />
  </>
)

export default HomeRoute
