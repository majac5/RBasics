import React, { useEffect, useRef, useState } from "react";
import "./TableAddUser.css";
import TableUsersList from "./TableUsersList";

const TableAddUser = () => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {}, [users]);

  const enteredName = useRef();
  const enteredAge = useRef();
  const enteredInterest = useRef();
  // const enteredInput = (event) => {
  //   event.preventDefault();
  //   const enteredNameRef = enteredName.current.value;
  //   props.onAddUser(enteredNameRef);

  return (
    <>
      {/* <form onSubmit={enteredInput}>
        <label htmlFor="username">Username</label>
        <input id="name" type="text" ref={enteredName}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={enteredAge}></input>
        <label htmlFor="age">Interest</label>
        <input id="interest" type="text" ref={enteredInterest}></input>
        <button type="submit" onClick={enteredInput}>
          Add User
        </button>
      </form> */}
      <form
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("submit!");
          setUsers([
            ...users,
            {
              name: enteredName.current.value,
              age: enteredAge.current.value,
              interest: enteredInterest.current.value,
            },
          ]);
        }}
      >
        <label htmlFor="username">Username</label>
        <input id="name" type="text" ref={enteredName}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={enteredAge}></input>
        <label htmlFor="age">Interest</label>
        <input id="interest" type="text" ref={enteredInterest}></input>
        <button type="submit">Add User</button>
      </form>
      <TableUsersList users={users} />
    </>
  );
};

export default TableAddUser;
