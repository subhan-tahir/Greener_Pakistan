import React from 'react'
import Header from '../Navbar/Header'
import AboutHero from '../aboutPagsComts/AboutHero'
import ServiceCards from '../servicePagsComts/ServiceCards'
import OurWork from '../aboutPagsComts/OurWork'
import Packages from '../packages/Packages'
import Counter from '../counterGreener/Counter'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'
import { serviceCardsData1 } from '../servicePagsComts/script'

const Products = () => {
  return (
    <>
    <Header />
    <AboutHero title={"Products"}/>
    <ServiceCards cardsData={serviceCardsData1}/>
    <OurWork />
    <Packages />
    <div className='mb-24'>
    <Counter />
    </div>
    <AutoSlider />
    <Footer />
    
    </>
  )
}

export default Products
