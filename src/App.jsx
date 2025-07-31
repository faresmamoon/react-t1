import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About'
import Navbar from './components/navbar/navbar'
import Portfolio from './components/Portfolio/Portfolio'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'

function App() {

  return <> 
  <Navbar/>
  <Portfolio/>
  <About/>
  <ContactMe/>
  <Footer/>
    </>
  
}

export default App
