import React from 'react'
import { images } from '../../constants'
import './NavBar.css';
const NavBar = () => {
  return (
    <nav>
        <div className='nav__logo'>
            <img src={images.logo} alt='logo'/>
            <span>Art Coffee</span>
        </div>
        <ul className='nav__links'>
            <li className='links'><a href='#'>Home</a></li>
            <li className='links'><a href='#'>Gallery</a></li>
            <li className='links'><a href='#'>About</a></li>
            <li className='links'><a href='#'>Contact</a></li>
            <li className='links'><a href='#'>Footer</a></li>

        </ul>
    </nav>
  )
}

export default NavBar