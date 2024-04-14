import"./imag.css";
import React from 'react'
import selfimage from"../assets/boody.jpg";
import { Link } from "react-router-dom";
function Imag() {
  return (
    <div className="boody">
        <div className="mask"><img className="into-img" src={selfimage} alt="selfimage"/></div>
        <div className="content">
         <p> HI, I'm Abdelrahman Ali  Ahmed</p>
         <h1>Frontend Developer</h1>
         <div>
          <Link to={"/project"} className="btn">Projects</Link>
          <Link to={"/contact"} className="btn">Contact</Link>
         </div>

        </div>

        </div>

  )
}

export default Imag;