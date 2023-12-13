import React from 'react'
import { images } from '../../constants';
import './Header.css';
const Header = () => {
  return (
    <header id='home'>
      <div className='section__container header__container'>
        <div className='header__content'>
          <h1>Cual es tu parte preferida del dia?</h1>
          <h2>Elije el cafe que mas va contigo</h2>
          <button className="btn">Explorar</button>
        </div>
        <div className='header__image'>
          <img src={images.espresso} alt='espresso'/>
        </div>
      </div>
    </header>
  )
}

export default Header