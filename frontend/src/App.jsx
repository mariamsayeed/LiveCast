import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
 import Hero from './components/Hero';
 import Features from './components/Features';
 import Feature2 from './components/Feature2';
import Testimonials from './components/Testimonials';
import  Footer from './components/Footer';
const App = () => {
  return(
    <Router>
      <Navbar />
      <Hero />
      <Features />
      <Feature2 />
      <Features />
      <Feature2 />
      <Testimonials />
      <Footer />

    </Router>
     
  )
      
    
}

export default App