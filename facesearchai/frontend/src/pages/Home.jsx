import React from 'react'
import Hero from '../components/Hero'
import About from '../pages/About'
import Testimonials from '../pages/Testimonials'
import Contact from '../pages/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Testimonials/>
      <Contact/>
      
    </div>
  )
}

export default Home
