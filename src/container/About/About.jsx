import React from 'react'
import { images } from '../../constants';
import './About.css';
const About = () => {
  return (
    <section id='about' >
      <div className='section__container about__container'>
      <div className='about__content'>
      <div className='about__content-description'>
          <h1>Que nos hace especial?</h1>
          <p>Id ipsum esse pariatur qui reprehenderit veniam. Sunt velit veniam mollit exercitation cillum laboris amet qui irure do culpa amet. Eu id elit adipisicing amet sint mollit enim. Exercitation elit in ad ut sunt esse ex dolor incididunt veniam consequat ex id.</p>
        </div>
        <div className='about__image'>
          <img src={images.bean} alt='grain'/>
        </div>
        <div className='about__content-history'>
          <h1>Nuestra  Historia</h1>
          <p>Id ipsum esse pariatur qui reprehenderit veniam. Sunt velit veniam mollit exercitation cillum laboris amet qui irure do culpa amet. Eu id elit adipisicing amet sint mollit enim. Exercitation elit in ad ut sunt esse ex dolor incididunt veniam consequat ex id.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About