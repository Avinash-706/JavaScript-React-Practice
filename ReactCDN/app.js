

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading); // returns an object
console.log(heading.type); // returns the type of the element, in this case "

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child"}, "Child H1"),
    "Parent"
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);