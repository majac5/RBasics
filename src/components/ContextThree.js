import { useContext } from "react";
import UserContext from '../App';

function ContextThree() {
    const {name} = useContext(UserContext);

    console.log(name);
    return (
      <>
        <h1>Third 
            Component
        </h1>
        <h2>{`Hello ${name} again!`}</h2>
      </>
    );
  }

  export default ContextThree;