import React from 'react';
import { images } from '../../constants';
import './Gallery.css';
const Gallery = () => {
  return (
    <section id='gallery'>
      <div className='section__container gallery__container'>
        <h2 className='gallery__title'>Galeria de Fotos</h2>
        <div className='photos__grid'>
          <div className='flex__center photos__card'>
            <img src={images.gallery01} alt='gallery1'/>
          </div>
          <div className='flex__center photos__card'>
            <img src={images.gallery02} alt='gallery2'/>
          </div>
          <div className='flex__center photos__card'>
            <img src={images.gallery03} alt='gallery3'/>
          </div>
          <div className='flex__center photos__card'>
            <img src={images.gallery04} alt='gallery4'/>
          </div>
          <div className='flex__center photos__card'>
            <img src={images.gallery05} alt='gallery5'/>
          </div>
          <div className='flex__center photos__card'>
            <img src={images.gallery06} alt='gallery6'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery