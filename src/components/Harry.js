import { useState, useRef } from "react";

const Harry = () => {
    const inputRef = useRef();
    const ref = useRef("");
  
    const House = [ "Griffindor ", "Slytherin ", "Hufflepuff ", "Ravenclaw ", "Laura ", "Maja"];

  const getHouse = () => {
      if (House.length < 7 )
      return <h1>{ House }</h1>;
      return <h2>No home</h2>;
  }

  const [text, setText] = useState ("After all this time?");

  return (
        <>
        <div>{getHouse()}</div>
        <input type="text" ref={inputRef} placeholder="klikni focus i focusiraj"></input>
        <button onClick={() => {inputRef.current.focus();}}>focus</button>
        <h2>{text}</h2>
        <input ref={ref} value={ref.current.value} placeholder="write correct answer"></input>
        <button onClick={() => setText(ref.current.value)}>Submit answer</button>
        <button onClick={() => window.open("https://upload.wikimedia.org/wikipedia/sh/thumb/8/8c/AlanRickmanSeverusSnape.jpg/220px-AlanRickmanSeverusSnape.jpg")}>hint</button>
        </>
  );
  };

export default Harry;
