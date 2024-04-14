import React from 'react'
import Navbar from '../components/Navbar';
import Imag from '../components/Imag';
import Footer from '../components/Footer';
import Dynamic from '../components/dynamic';

function Home() {
  return (
    <div>
        <Navbar/>
        <Imag/>
        <Dynamic/>
        <Footer/>
    </div>
  )
}

export default Home;