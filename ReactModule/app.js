import React from "react";
import ReactDOM from "react-dom/client";
import './app.css';

// React Element
const heading  = (
    <h1 className="head" tabIndex={5}>
        React Element 
    </h1>
);


// Functional React Component
const HeadingComponent = () => {
    return <h1 className="heading"> React Functional Component </h1>;
}

const a = 1000000;
// both the function does the same thing just the change in brackets and return keyword 
const HeadingComponent2 = () => (
    <div id = "container">
        {a}
        <h2>{100 + 200}</h2>
        {console.log("asdssasd")}
        {heading}               {/* react Element inside JSX */}
        <HeadingComponent/>    {/* Component : Compositions : call one function inside other */}
        <h1 className="heading"> React Functional Component 2 </h1>;
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
     <HeadingComponent2/>
    </div>
);
