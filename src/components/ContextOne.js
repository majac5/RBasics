import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import ContextTwo from './ContextTwo';


const UserContext = createContext();

function ContextOne() {

    const [name, setName] = useState("BULLDOG");
  
    return (
      <UserContext.Provider value={name}>
        <h1>{`Hello ${name}!`}</h1>
        <ContextTwo name={name} />
      </UserContext.Provider>
    );
  }

  export default ContextOne;