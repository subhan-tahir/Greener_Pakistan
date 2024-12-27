import React from 'react'
import Header from '../Navbar/Header'
import Hero from '../Herosection/hero'
import AboutHero from '../aboutPagsComts/AboutHero'
import AboutGreener from '../AboutGreener'
import AboutCards from '../aboutPagsComts/AboutCards'
import Counter from '../counterGreener/Counter'
import Customer from '../aboutPagsComts/Customer'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'
import OurWork from '../aboutPagsComts/OurWork'

const About = () => {
  return (
    <>
    <Header />
    <AboutHero title="About Us"/>
    <AboutGreener />
    <AboutCards />
    <OurWork />
    <Counter />
    <Customer />
    <AutoSlider />
    <Footer />
    </>
  )
}

export default About