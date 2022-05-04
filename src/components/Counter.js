import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => {
    setCounter((count) => count + 1);
  };

  if (counter === 5) {
    return setCounter(
      <a
        href="https://youtu.be/dQw4w9WgXcQ"
        target="_blank"
        rel="noreferrer noopener"
      >
        important message
      </a>
    );
  }

  return (
    <>
      <div>{counter}</div>
      <button onClick={counterHandler}>DODAJ BROJ</button>
    </>
  );
};

export default Counter;
