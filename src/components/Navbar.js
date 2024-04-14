import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import React, { useState } from 'react';
import{FaBars,FaTimes}from"react-icons/fa";

function Navbar() {
    const [click,setClick]=useState(false);
    const [color,setColor]=useState(false)
    const handelClick=()=>{
setClick(!click);
    }
    const handelChangeColor=()=>{
        if(window.scrollY>=100)
        {setColor(true);}
        else{setColor(false)}
    }
    window.addEventListener("scroll",handelChangeColor)
  return (
    <div className={color?"Header Header-bg":"Header"}>
        <Link to={"/"}>
            <h1>Portfolio</h1>
        </Link>
<ul className={click?"nav-menu active":"nav-menu"}>
    <li><Link to={"/"}>Home</Link></li>
    <li><Link to={"/project"}>Project</Link></li>
    <li><Link to={"/about"}>About</Link></li>
    <li><Link to={"/contact"}>Contact</Link></li>

    {/* <li ><NavLink to={"/"}>Home</NavLink></li>
    <li ><NavLink to={"/project"}>Project</NavLink></li>
    <li ><NavLink to={"/about"}>About</NavLink></li>
    <li ><NavLink to={"contact"}>Contact</NavLink></li> */}
    
</ul>
<div className="nav-icon" onClick={handelClick}> 
{click?<FaTimes  size={20} style={{color:"#fff"}}/>:<FaBars  size={20} style={{color:"#fff"}}/>}


</div>
        
        </div>
  )
}

export default Navbar