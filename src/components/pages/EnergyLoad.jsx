import React from 'react'
import Header from '../Navbar/Header'
import AboutHero from '../aboutPagsComts/AboutHero'
import EnergyCalculator from '../Energy/EnergyCalculator'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'
const EnergyLoad = () => {
  return (
<>
<Header />
<AboutHero title={"Energy Load Calculator"}/>
<EnergyCalculator />
<AutoSlider />
<Footer />
</>
  )
}

export default EnergyLoad
