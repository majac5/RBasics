import React, { useRef } from "react";

import './PopUp.css'

const PopUp = (props) => {

    const enteredInputRef = useRef();

    const enteredInput = (event) => {
        event.preventDefault();
       const inputRef = enteredInputRef.current.value;
       props.onAddUser(inputRef);
    }
    

    
    
    return (
        <div className="popup">
           <div className="popup__box">this is my moment
           <button className="popup__close" onClick={props.handleClose}>CLOSE</button>
            <div>
                <input type="text" placeholder="add name" ref={enteredInputRef}/> 
                <button onClick={enteredInput}>add name for real</button>
            </div>
           {props.content}
           </div>
            </div>
    );
}

export default PopUp;