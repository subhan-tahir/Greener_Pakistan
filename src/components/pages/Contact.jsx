import React from 'react'
import Header from '../Navbar/Header'
import AboutHero from '../aboutPagsComts/AboutHero'
import ContactForm from '../contactPagsCompt/ContactForm'
import Map from '../contactPagsCompt/Map'
import ContactOptions from '../contactPagsCompt/ContactOptions'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'
const Contact = () => {
  return (
    <>
    <Header />
    <AboutHero title={'Contact Us'} />
    <ContactForm />
    <Map />
    <ContactOptions />
    <AutoSlider />
    <Footer />
    </>
  )
}

export default Contact