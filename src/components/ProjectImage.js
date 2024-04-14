import"./projectImag.css";
import React from 'react'

function ProjectImage(props) {
  return (
    <div className="ProjectImage">

<div className="heading">

    <h1> {props.title}</h1>
    <p>{props.content }</p>
</div>

    </div>
  )
}

export default ProjectImage