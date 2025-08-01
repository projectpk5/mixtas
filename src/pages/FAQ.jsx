import React from 'react'
import Navbar from '../components/commoncomponents/Navbar'
import Footer from '../components/commoncomponents/Footer'
import FAQ_Accordion from '../components/faqcomponents/FAQ_Accordion'
const FAQ = () => {
  return (
      <>
        <Navbar />
        <FAQ_Accordion />
        <Footer />
      </>
  )
}

export default FAQ