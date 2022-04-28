import React, { useState } from "react";
import Child from "./Child";
import './Parent.css';

const Parent = () => {

    const [darth, setDarth] = useState("Luke, I am your text.");

    function handleChange(newDarth) {
        setDarth(newDarth);
    }

    return (
        <>
        <div className="darth">{darth}</div>
        <Child darth={darth} onChange={handleChange} />
        </>
    );
}

export default Parent;