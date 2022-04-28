import React, { useState } from "react";

const ButtonWisdom = () => {

    const [question, setQuestion] = useState('Practice makes perfect');

    return (
        <>
        <h2>{question}</h2>
        <button onClick={() => setQuestion('O does it??')}>Change the wisdom</button>
        </>
    );
}

export default ButtonWisdom;