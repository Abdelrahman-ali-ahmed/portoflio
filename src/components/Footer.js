import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import"./footer.css"
import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="footer">
        <div className="footer-contanier">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div> <p>Cairo,Egypt</p></div>
                </div>
                <div className="Phone">
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div> <p>0115 753 8463 --- 0122 435 8826</p></div>
                </div>
                <div className="e-mail">
                    <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div> <p>abdelrahman.ali.m21@gmail.com</p></div>
                </div>
                
            </div>
            <div className="right">
                <h4> About me</h4>

                <p>I'm student in faculty of computer science,Fayoum University,
                    and I search for internship opportunity to improve my knowledge </p>
                    <div className="social"> 
                    
                  <Link to={"https://www.facebook.com/abdelrahman.ali.12720100?mibextid=ZbWKwL"}><FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link>  
                  
            
                   <Link to={"https://www.linkedin.com/in/abdelrahman-ali-abdelmoniem-5556b2216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></Link> 
                
                    
                    
                    
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer