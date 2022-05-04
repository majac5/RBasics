import React from "react";

const Reduce = () => {

    const Numbers = [1, 2, 4, 6, 7, 8];

    const Total = Numbers.reduce (
            (prevValue, currentValue) => prevValue + currentValue,
            0
        )
    console.log(Total);

}

export default Reduce;