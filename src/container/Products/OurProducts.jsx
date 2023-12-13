import { useRef } from 'react';
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { images } from '../../constants';
import './OurProducts.css';

const OurProducts = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const {current} = scrollRef;
        if(current){
            const scrollWidth = current.scrollWidth
            const maxScrollLeft = scrollWidth - current.clientWidth;
            if(direction === 'left'){
                current.scrollLeft -= 500;
              }else {
                current.scrollLeft = Math.min(current.scrollLeft + 500, maxScrollLeft);
              }
        }

    }
  return (
    <section id='products' className='about__section'>
        <div className='products__container'>
            <div className='products__section-content' ref={scrollRef}>
                <div className='products__section-content__product'>
                    <img src={images.coffee} alt='coffee'/>
                    <h2>Americano</h2>
                    <p>Pariatur consectetur reprehenderit ea tempor Lorem fugiat nostrud officia.</p>
                </div>
                <div className='products__section-content__product'>
                    <img src={images.mocca} alt='mocaccino'/>
                    <h2>Mocaccino</h2>
                    <p>Pariatur consectetur reprehenderit ea tempor Lorem fugiat nostrud officia.</p>
                </div>
                <div className='products__section-content__product'>
                    <img src={images.frapp} alt='frappuccino'/>
                    <h2>Frappuccino</h2>
                    <p>Pariatur consectetur reprehenderit ea tempor Lorem fugiat nostrud officia.</p>
                </div>
                <div className='products__section-content__product'>
                    <img src={images.latte} alt='latte'/>
                    <h2>Cafe Latte</h2>
                    <p>Pariatur consectetur reprehenderit ea tempor Lorem fugiat nostrud officia.</p>
                </div>
            </div>
            <div className='products__section-content_arrows'>
                    <BsArrowLeftShort className='products__arrow-icon' onClick={() => scroll('left')}/>
                    <BsArrowRightShort className='products__arrow-icon' onClick={() => scroll('right')}/>
            </div>
        </div>
    </section>
  )
}

export default OurProducts