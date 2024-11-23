import React, {useState,useEffect } from 'react'
import './Navbar.css'
import menu_icon from '../assets/menu-icon.png'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'



const Navbar = () => {
    const backendUrl=import.meta.env.VITE_BACKEND_URL

    const [visible,setVisible] = useState(false);

    const {navigate, token, setToken} = useNavigate(useNavigate);
    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')

    }
    const value={
        backendUrl,navigate,token
    }
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
        

    },[]);
    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      
      <img src={logo} alt="" className='logo' />

      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      
        <li><Link to='/'smooth={true} offset={0} duration={500}>HOME</Link></li>      
       <li><Link to='/about'smooth={true} offset={-260} duration={500}>ABOUT</Link></li>
        <li><Link to='/testimonials'smooth={true} offset={-150} duration={500}>TESTIMONIALS</Link></li>
        <li><Link to='/contact'smooth={true} offset={-260} duration={500}>CONTACT</Link></li>
        <li><Link to='/login'smooth={true} offset={-2160} duration={500}>LOGIN</Link></li>
                 
           
            <li><Link to='/guest' >GUEST</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>   
    </nav>
  )
}

export default Navbar
