import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));


const jsxHeading = <h1 id ="heading" className="hi"> This is a JSX syntaxx </h1> 
//Browser does not recognise this code
//Browser only understand pure javascript code 


root.render(jsxHeading);


//JSX - is not HTML | HTML-Like or XML-Like syntaxx 