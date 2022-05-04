import React, { useState } from "react";
import "./Array.css";
import PopUp from "./PopUp";

const Array = () => {
  const [array, setArray] = useState([
    "Sweater",
    "Cola ",
    "Potato Chips ",
    "Pudddddding ",
  ]);

  const addArray = (newUser) => {
    setArray([...array, newUser]);
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
    let person = prompt("Please enter your name", "Harry Potter");
    addArray(" " + person + " ");
  };

  array.sort();

  return (
    <>
      <h1>{array}</h1>
      <div></div>

      <button onClick={togglePopUp}> click to open popup</button>

      {/* <button onClick={() => addArray(array)}>CLICK MEEE TOO AADDDDDD</button> */}

      {isOpen && (
        <PopUp
          handleClose={togglePopUp}
          content={
            <div>
              {" "}
              <div>choose wisely</div>{" "}
            </div>
          }
          onAddUser={addArray}
        ></PopUp>
      )}
    </>
  );
};

export default Array;
