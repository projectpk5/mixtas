import React from 'react'
import Navbar from '../components/commoncomponents/Navbar'
import Footer from '../components/commoncomponents/Footer'
import TopBanner from '../components/homecomponents/TopBanner'
import NewArrivals from '../components/homecomponents/NewArrivals'
import Discounts from '../components/homecomponents/Discounts'
import Blog from '../components/homecomponents/Blog'
import HeroContent from '../components/homecomponents/HeroContent'

const Home = () => {
  return (
    <>
      <TopBanner />
      <Navbar />
      <HeroContent />
      <NewArrivals />
      <Discounts />
      <Blog />
      <Footer />
    </>
  )
}

export default Home