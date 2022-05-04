import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const UserLoader = () => {

    const [noLoader, setLoader] = useState("");


const loaderHandler = (event) => {
    setLoader(<Loader />);
    
}

useEffect(() => {
    setTimeout(() => {
      setLoader("I MADE IT");
    }, 4000);
  }, []);


    return (
        <>
        <div>{noLoader}</div>
    <button onClick={loaderHandler}>loader</button>
    <h1></h1>
        </>
    );
}

export default UserLoader;