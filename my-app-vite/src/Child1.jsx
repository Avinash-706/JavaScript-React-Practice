import React from "react";
import "./Child1.css"; // Assuming you have a CSS file for styling

const Child1 = () => {
  let name = "Avinash";
  let designation = "Software Engineer";
  let skills = ["JavaScript", "React", "Node.js"];
  return (
    <div className = "intro">
      <h1>Introduction</h1>
      <div>
        <span>Name: </span>  {name}
      </div>
      <div>
        <span>Designation: </span> {designation}
      </div>
      <div>
        <span>Skills: </span> {skills.join(", ")}
      </div>
      <p>This is a child component.</p>
    </div>
  );
}
export default Child1;