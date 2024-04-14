import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectImage from '../components/ProjectImage';
import Form from '../components/form';

function Contact() {
  return (
    <div>

    <Navbar/>
    <ProjectImage title="Contact" content=" to contect with me"/>
    <Form/>
    <Footer/>
    
        </div>
  )
}

export default Contact;