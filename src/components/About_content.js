import { Link } from "react-router-dom";
import"./About_content.css";
import React from 'react'

function About_content() {
  return (
    <div className="about"> 
    <div className="contant"> 
    <h1>Who Am I?</h1>
    <p>I'm a frontend  developer use react and know wordpress ,jquery,redux,little knowledge in figma ,Bootstrab</p>
    <Link to={"/contact"} className="btn">Contact</Link>
    </div>
    </div>
  )
}

export default About_content