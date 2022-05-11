import React, { useState } from "react";
import PopUpTwo from './PopUpTwo';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const counterHandler = () => {
    setCounter((count) => count + 1);

    if (counter === 5) {
      setIsOpen(!isOpen);
    }
    if (counter === 10) {
      setIsOpen(!isOpen);
    }
    
  };

  console.log(counter);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
}


  return (
    <>
      <div>{counter}</div>
      <button onClick={counterHandler}>DODAJ BROJ</button>
{isOpen && <PopUpTwo handleClose={togglePopUp}>
</PopUpTwo>}

    </>
  );
};

export default Counter;
