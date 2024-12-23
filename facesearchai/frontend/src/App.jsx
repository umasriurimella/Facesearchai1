import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Guest from './Guest'
import Login from './pages/Login'
import SubscriptionCard from './pages/SubscriptionCard'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} /> 
         <Route path='/guest' element={<Guest />} />  
        <Route path='/login' element={<Login />} />
        <Route path='/subscriptioncard'element={<SubscriptionCard/>}/>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
