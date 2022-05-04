import React from "react";
import './App.css';
import ButtonWisdom from "./components/ButtonWisdom";
import Parent from './components/Parent';
import DeComponentHaha from "./components/DeComponentHaha";
import Harry from './components/Harry';
import Array from "./components/Array";
import Reduce from "./components/Reduce";
import UserLoader from './components/UserLoader';
import Counter from "./components/Counter";
import TableAddUser from "./components/TableAddUser";
import TableUsersList from "./components/TableUsersList";

function App() {
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
    </div>
  );
}

export default App;
