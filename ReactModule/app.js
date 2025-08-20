
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);       // returns an object
console.log(heading.type);  // returns the type of the element, in this case "h1"

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { key: "child1", id: "child" }, 
        [
        React.createElement("div", { key: "child1a", id: "child" }, "Child H1 - CHILD"),
        React.createElement("h1", { key: "child1b", id: "child" }, "Child H2 - CHILD"),
        ],
        "Child H1 - PARENT"
    ),
    React.createElement("div", { key: "child2", id: "child" }, "Child H2"),
    React.createElement("div", { key: "child3", id: "child" }, "Child H3")
    ],
    "PARENT DIV"
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);
