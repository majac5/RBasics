import {useEffect, useState} from 'react';

const EffectExample = () => {

    const [optionOne, setOptionOne] = useState("Promijeni ovu opciju");
    const [optionTwo, setOptionTwo] = useState(1);
    const [optionThree, setOptionThree] = useState("");

    const counterHandler = () => {
        setOptionTwo((count) => count + 1);
      };
    
    useEffect(() => {
        return (console.log("promjena"));
    }, [optionOne, optionTwo, optionThree]);

    const clickHandler = () => {
        setOptionOne("opcija jedan");
    }

    const thirdHandler = () => {
        setOptionThree(console.log("treca opcija"));
    }

    
    return (
        <>
        <div>{optionOne}</div>
        <button onClick={clickHandler}>click</button>
        <div>{optionTwo}</div>
        <div>{counterHandler}</div>
        <button onClick={counterHandler}>click</button>
        <button onClick={thirdHandler}>treci dio</button>
        </>
    );
}

export default EffectExample;