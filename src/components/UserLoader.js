import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const UserLoader = () => {
  const [noLoader, setLoader] = useState("");
  const [maja, setMaja] = useState("Zapitana");

  useEffect(() => {
    console.log("Zovem useEffect");
    console.log(maja);
  }, [maja]);

  const loaderHandler = (event) => {
    setLoader(<Loader />);
    startTimeout();
  };

  // Pametnije samo sa funkcijom rjesit
  const startTimeout = () => {
    setTimeout(() => {
      setLoader("I MADE IT");
    }, 4000);
  };

  return (
    <>
      <div>{noLoader}</div>
      <button onClick={loaderHandler}>loader</button>
      <h1></h1>
      <h1>Primjer sa useEffect dependency</h1>
      <button
        onClick={() => {
          setMaja("sretna");
        }}
      >
        Pozovi Maju
      </button>
    </>
  );
};

export default UserLoader;
