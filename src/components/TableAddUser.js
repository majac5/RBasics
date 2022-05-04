import React, {useRef, useState} from "react";
import './TableAddUser.css';
import TableUsersList from "./TableUsersList";

const TableAddUser = () => {

  const enteredName = useRef();
  const enteredAge = useRef();
  const enteredInterest = useRef();

  const enteredInput = (event) => {
    event.preventDefault();
   const enteredNameRef = enteredName.current.value;
   props.onAddUser(enteredNameRef);
}

    return (
        <>
        <form >
          <label htmlFor="username">Username</label>
          <input
            id="name"
            type="text"
            ref={enteredName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={enteredAge}
          ></input>
          <label htmlFor="age">Interest</label>
          <input
            id="interest"
            type="text"
            ref={enteredInterest}
          ></input>
          <button type="submit" onClick={enteredInput}>Add User</button>
        </form>
        <TableUsersList />
        </>
    );
}

export default TableAddUser;