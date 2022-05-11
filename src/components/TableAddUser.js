import React, { useRef, useState } from "react";
import "./TableAddUser.css";
import TableUsersList from "./TableUsersList";

const TableAddUser = () => {
  const [users, setUsers] = useState([]);
  const [hide, setHide] = useState(false);

  const showHandler = () => {
    setHide(true)
  }

  // useEffect(() => {}, [users]);

  const enteredName = useRef();
  const enteredAge = useRef();
  const enteredInterest = useRef();
  const enteredIndex = useRef();
  // const enteredInput = (event) => {
  //   event.preventDefault();
  //   const enteredNameRef = enteredName.current.value;
  //   props.onAddUser(enteredNameRef);


  // const array = [...users]; 
  // const newArray = array.splice(enteredIndex, 3);
  

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
        <button type="submit" onClick={showHandler}>Add User</button>
        {/* <label htmlFor="delete">Remove row</label>
        <input id="delete" type="number" ref={enteredIndex}></input> */}
        <button></button>
      </form>
      {users.length !== 0 ? <TableUsersList users={users} /> : null}
      {/* <div>{newArray}</div> */}
    </>
  );
};

export default TableAddUser;
