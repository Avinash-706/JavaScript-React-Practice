

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading); // returns an object
console.log(heading.type); // returns the type of the element, in this case "

const parent = React.createElement("div", { id: "parent" },
    [       
        React.createElement("div", { id: "child"},
            [
            React.createElement("div", { id: "child"}, "Child H1 - CHILD"),
            React.createElement("h1", { id: "child"}, "Child H2 - CHILD"),
            ],
            "Child H1 - PARENT"
        ),
        React.createElement("div", { id: "child"}, "Child H2"),
        React.createElement("div", { id: "child"}, "Child H3")
    ],
    "PARENT DIV"
);
    
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);