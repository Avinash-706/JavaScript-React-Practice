import React from "react";

const Child2 = () => {
    function handleClick(fruit) {
        alert(`----- ${fruit} -----`);
        console.log('----',fruit);
    }
    return (
        <div>
            <h1>Child Component 2</h1>
            <button onClick={() => handleClick("Apple")}>Apple</button>
            <button onClick={() => handleClick("Banana")}>Banana</button>
            <button onClick={() => handleClick("Cherry")}>Cherry</button>
        </div>
    );
}
export default Child2;