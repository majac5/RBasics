import React from "react";
import "./App.css";
import TableAddUser from "./components/TableAddUser";
import ButtonWisdom from "./components/ButtonWisdom";
import Parent from './components/Parent';
import DeComponentHaha from "./components/DeComponentHaha";
import Harry from './components/Harry';
import Array from "./components/Array";
import Reduce from "./components/Reduce";
import UserLoader from './components/UserLoader';
import Counter from "./components/Counter";
import EffectExample from "./components/EffectExample";
import Storage from "./components/Storage";
import SwitchReducer from "./components/SwitchReducer";
import ContextOne from "./components/ContextOne";

function App() {
  // const initialState = { count: 0 };
  // const [globalData, setGlobalData] = useState("Globani!!!");
  // const UserContext = createContext();

  // const history = useHistory();

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "increment":
  //       return { count: state.count + 1 };
  //     case "decrement":
  //       return { count: state.count - 1 };
  //     case "multiple":
  //       return { count: state.count * 2 };
  //     default:
  //       throw new Error();
  //   }
  // }

  // function Counter() {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   return (
  //     <>
  //       <h1>UseReducer example</h1>
  //       Count: {state.count}
  //       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
  //       <button onClick={() => dispatch({ type: "increment" })}>+</button>
  //       <button onClick={() => dispatch({ type: "multiple" })}>*</button>
  //       <button onClick={() => CounterFunction(state.count)}>
  //         Ispiši counter
  //       </button>
  //     </>
  //   );
  // }

  // function CounterFunction(counter) {
  //   if (counter == 2) {
  //     console.log("Counter je 2");
  //   }
  //   if (counter == 4) {
  //     console.log("Counter je 4");
  //   }
  //   if (counter == 6) {
  //     console.log("Counter je 6");
  //   }
  // }

//   function Home() {
//     return <h2>Home</h2>;
//   }

//   function About() {
//     return <h2>About</h2>;
//   }

//   function Users() {
//     return <h2>Users</h2>;
//   }

//   return <div>App</div>;
// }

return (
  <div className="App">

      <ButtonWisdom />
      <Parent />
      <DeComponentHaha />
      <Harry />
      <Array />
      <Reduce />
      <UserLoader />
      <Counter />
      <TableAddUser />
      <EffectExample />
      <Storage />
      {/* <SwitchReducer /> */}
      {/* <ContextOne /> */}
    </div>
);

}

export default App;
