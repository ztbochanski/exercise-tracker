import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const CreateExercisePage = () => {
    
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert("Added exercise successfully");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        };
        history.push("/");
    };

    return(
        <div className="createExercisePage">
            <h1>Create Exercise</h1>
            <form>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="number"
                    placeholder="Enter reps"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <input
                    type="number"
                    placeholder="Enter weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <input
                    type="text"
                    placeholder="Enter unit"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
                <input
                    type="text"
                    placeholder="Enter date"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
                <button
                    onClick={createExercise}
                >Add</button>
            </form>
            <Link to="/"> Back home </Link>
        </div>
    );
};

export default CreateExercisePage;