import React from 'react'
import { Link } from 'react-scroll'
import './nav.css'
const Navbar = () => {
  return (
    <div class="navbar">
        <ul>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="products" smooth={true} duration={500}>Product</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </ul>
    </div>
   
  )
}

export default Navbar