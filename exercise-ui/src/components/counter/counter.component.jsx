import React, { useState } from 'react';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';

import './counter.styles.css'

const MAX_ITEMS = 10

const Counter = () => {
    const [count, setCount] = useState(0);

    const removeItem = () => {
        if (count === 0) 
            setCount(0);
        else
            setCount(count - 1 );
    };

    const addItem = () => {
        if (count === MAX_ITEMS) 
            setCount(MAX_ITEMS);
        else
            setCount(count + 1 );
    };

    return(
        <td>
            <HiMinusSm className="icon" onClick={removeItem}></HiMinusSm> 
                {count} 
            <HiPlusSm className="icon" onClick={addItem}></HiPlusSm>
        </td>
    );
};

export default Counter;