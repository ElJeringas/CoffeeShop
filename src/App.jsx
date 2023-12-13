import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './container/Header/Header';
import Gallery from './container/Gallery/Gallery';
import About from './container/About/About';
import FindUs from './container/FindUs/FindUs';
import Footer from './components/Footer/Footer';
import OurProducts from './container/Products/OurProducts';
import MenuCard from './container/MenuCard/MenuCard';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <OurProducts/>
      <MenuCard/>
      <Gallery/>
      <FindUs/>
      <Footer/>

    </div>
  )
}

export default App