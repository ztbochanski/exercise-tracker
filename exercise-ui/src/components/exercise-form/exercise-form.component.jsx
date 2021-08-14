import React, { useState } from 'react';

import './exercise-form.styles.css'
      
const ExerciseForm = ({ stores, placeholder }) => {
    const [zip, setZip] = useState("");

    const zipCodes = []
    stores.map((element) => (
        zipCodes.push(element.zipCode)
    ));

    const handleChange = (event) => setZip(event.target.value);
    
    const handleClick = (event) => {
        setZip(event.target.value);
        alert(`You entered ${zip}`);
        event.preventDefault();
    }

    return(
        <form>
            <label>Enter 5 Digit Zip:</label>
            <input 
                placeholder={placeholder}
                type="search" 
                value={zip}
                onChange={handleChange} 
            />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
};

export default ExerciseForm;

