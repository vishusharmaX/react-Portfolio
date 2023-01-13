import React, { useState ,useEffect} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Timeline from './components/Timeline'
import Work from './components/Work';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'
import './styles/app.scss'
import { HeaderPhone } from './components/Header'

const App = () => {
  const [menuOpen ,setMenuOpen] =useState(false);
  const [ratio ,setRatio] =useState(window.innerWidth/window.innerHeight);
  useEffect(() => {
    const resizeRatio =()=>{
      setRatio(window.innerWidth/window.innerHeight);
    };
    window.addEventListener("resize",resizeRatio);
    return () =>{
      window.removeEventListener("resize",resizeRatio);
    } 
  }, [ratio]);
  return ratio <4 ? (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <Work/>
    <Timeline/>
    <Services/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  ) : <em id='customMessage'>Please Change the ratio to View!</em>
}

export default App
