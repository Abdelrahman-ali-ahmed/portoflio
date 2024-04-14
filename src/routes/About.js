import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectImage from '../components/ProjectImage';
import About_content from '../components/About_content';

function About() {
  return (
    <div>

    <Navbar/>
    <ProjectImage title="About me" content=""/>
    <About_content/>

    <Footer/>
    
        </div>
  )
}

export default About;