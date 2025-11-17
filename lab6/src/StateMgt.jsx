import React, { useState, useEffect } from 'react';
const Statemgt = () => {
    const [number, setNumber] = useState(0);
    // Reset number after 10 seconds (10000 ms)
    useEffect(() => {
        setTimeout(() => {
            setNumber(0);
        }, 10000);
    }, []);
    const increment = () => setNumber(number + 1);
    const decrement = () => {

        if (number > 0) setNumber(number - 1);
    };

    const reset = () => setNumber(0);
    const double = () => setNumber(number * 2);
    return (
        <div>
            <h3>Number: {number}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={double}>Double</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};
export default Statemgt;