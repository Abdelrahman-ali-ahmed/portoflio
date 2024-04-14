import "./WorkCard.css";
import React from 'react';
import quize_app from "../assets/Screenshot (12).png";
import  calculator_app  from"../assets/Screenshot (16).png";
import  todo_app  from"../assets/Screenshot (17).png";
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="projectcard" >
        <img src={props.imgUrl}/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
        <p>{props.description} </p>
        <div className="pro-btns">
            <NavLink to={props.source} className="btn">source</NavLink>
        </div>

        </div>
        </div>

        

        
        
  )
}

export default WorkCard;