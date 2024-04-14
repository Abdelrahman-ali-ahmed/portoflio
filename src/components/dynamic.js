import "./WorkCard.css";
import React from 'react';
import quize_app from "../assets/Screenshot (12).png";
import  calculator_app  from"../assets/Screenshot (16).png";
import  todo_app  from"../assets/Screenshot (17).png";
import { NavLink } from "react-router-dom";
import { projectCardData } from "./dynamic data";
import WorkCard from "./WorkCard";

function Dynamic() {
  return (
    <div className="work-container">

        <h1 className="projects-Heading"> Projects</h1>
        <div className="project-container">
        {/* <div className="projectcard">
        <img src={quize_app}/>
        <h2 className="project-title"> Quize app</h2>
        <div className="pro-details">
        <p>this is text </p>
        <div className="pro-btns">

            <NavLink to="https://github.com/Abdelrahman-ali-ahmed/projects/tree/1cb204768334f6deb7d9b0a327955395b6aea986/project-2" className="btn">source</NavLink>
        </div>

        </div>
        </div>

        <div className="projectcard">
        <img src={calculator_app}/>
        <h2 className="project-title"> Calculator app</h2>
        <div className="pro-details">
        <p>this is text </p>
        <div className="pro-btns">

            <NavLink to="https://github.com/Abdelrahman-ali-ahmed/projects/tree/1cb204768334f6deb7d9b0a327955395b6aea986/project3" className="btn">source</NavLink>
        </div>


        </div>
       
    </div>
    <div className="projectcard">
        <img src={todo_app}/>
        <h2 className="project-title"> Todo app</h2>
        <div className="pro-details">
        <p>this is text </p>
        <div className="pro-btns">

            <NavLink to="https://github.com/Abdelrahman-ali-ahmed/projects/tree/1cb204768334f6deb7d9b0a327955395b6aea986/project-4" className="btn">source</NavLink>
        </div>


        </div>

        </div> */}
     {projectCardData.map((item)=>{return(<WorkCard  imgUrl={item.imgUrl} title={item.title} description={item.desciption} source={item.source}/>)})}




        </div>

        

        </div>

        
        
  )
}

export default Dynamic;