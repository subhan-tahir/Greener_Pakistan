import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Services from './components/pages/Services'
import EnergyLoad from './components/pages/EnergyLoad'
import Products from './components/pages/Products'
import Contact from './components/pages/Contact'
const Routing = () => {
  return (
    <>
    
    <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/energycalculator" element={<EnergyLoad />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

    </Routes>
    
    </>
  )
}

export default Routing