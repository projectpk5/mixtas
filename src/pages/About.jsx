import React from 'react'
import ModifiedNavbar from '../components/aboutcomponents/ModifiedNavbar'
import Footer from '../components/commoncomponents/Footer'
import AboutTabs from '../components/aboutcomponents/AboutTabs'
import AboutHero from '../components/aboutcomponents/AboutHero'
import Team from '../components/aboutcomponents/Team'


const About = () => {
  return (
      <>
        <ModifiedNavbar />
        <AboutHero />
        <AboutTabs />
        <Team />
        <Footer />
      </>
      
  )
}

export default About