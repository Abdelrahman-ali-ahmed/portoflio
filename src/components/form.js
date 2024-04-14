import "./form.css";
import React from 'react'

function Form() {
  return (
    <div className="form">

        <form>
            <label>Your Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email"/>
            <label>Subject</label>
            <input type="text"/>
            <label>Your Name</label>
            <textarea rows={"6"} placeholder="write your message"/>
            <button className="btn">submit</button>
        </form>
    </div>
  )
}

export default Form;