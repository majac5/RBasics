import React, { useState } from "react";
import './App.css';
import ButtonWisdom from "./components/ButtonWisdom";
import Parent from './components/Parent';
import DeComponentHaha from "./components/DeComponentHaha";
import Harry from './components/Harry';

function App() {
  return (
    <div className="App">

      <ButtonWisdom />
      <Parent />
      <DeComponentHaha />
      <Harry />
    </div>
  );
}

export default App;
