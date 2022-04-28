import React, { useState } from "react";
import './Child.css';

const Child = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <>
        <input darth={props.darth} onChange={handleChange} />
        </>
    );
}

export default Child;