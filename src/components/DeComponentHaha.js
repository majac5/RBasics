import { useState } from "react";
import "./DeComponentHaha.css";

const DeComponentHaha = () => {
  const [fellowship, setFellowship] = useState([
    "Frodo ",
    "Sam ",
    "Aragorn ",
    "Legolas",
  ]);

  const mapFellowship = fellowship.map((element, indx) => {
    return <li key={indx}>{element}</li>;
  });

  const addFellowship = (fellowship) => {
    setFellowship([...fellowship, " Laura"]);
  };

  const filterFellowship = fellowship.filter((element) => {
    return element.includes("L");
  });

  return (
    <>
      <h2>Fellowship</h2>
      <div>{mapFellowship}</div>
      <button onClick={() => addFellowship(fellowship)}>Dodaj</button>
      <div>{filterFellowship}</div>
    </>
  );
};

export default DeComponentHaha;
