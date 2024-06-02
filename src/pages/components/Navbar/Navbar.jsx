import React from 'react'
import Biccas from './Biccas.png'
import { NavLink, useNavigate } from 'react-router-dom'
import './nav.css';
const Navbar = () => {
  const navigate = useNavigate();
  return (
   <>
    <div className=" d-flex justify-content-between container vw-75 mt-5">
      <img src={Biccas} className="logo_nav" alt='logo'/>
   
      <div className="d-flex justify-content-between m-2 center_nav">
      <NavLink to="/" className="activeClass"> Home </NavLink>
      <NavLink to="/product" className="activeClass"> Product </NavLink>
      <NavLink to="/faq " className="activeClass"> FAQ </NavLink>
      <NavLink to="/blog " className="activeClass"> Blog </NavLink>
      <NavLink to="/about " className="activeClass"> About Us </NavLink>
      </div>
      <div className=' last_nav '>
      <NavLink to="/login" className="activeClass"> Login </NavLink>
      <button className='ms-3'onClick={()=>{(navigate('/signup'))}}>Sign Up</button>
      </div>
    </div>
 
   </>
  )
}

export default Navbar