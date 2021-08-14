import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ExerciseTable from '../../components/exercise-table/exercise-table.component';
import "./homepage.styles.css";

const HomePage = ({ setExerciseToEdit }) => {

    const [exercises, setExercises] = useState([]);
    const [headers, setHeaders] = useState([]);
    const history = useHistory();

    /**
     * OnEdit to edit an exercise
     * @param {*} exercise 
     */
    const onEdit = exercise => {
        setExerciseToEdit(exercise)
        history.push("/edit-exercise-page");
    }

    /**
     * onDelete to delete exercise by id
     * @param {*} _id 
     */
    const onDelete = async _id => {
        const res = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (res.status === 204) {
            setExercises(exercises.filter(m => m._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${res.status}`);
        }
    };

    /** 
     * Async function to hit exercises endpoint and fetch data
     **/
    const fetchExercises = async () => {
        const res = await fetch('/exercises');
        const data = await res.json();
        const keys = Object.keys(data[0]);
        keys.shift();
        keys.pop();
        keys.push('edit');
        keys.push('delete');
        setExercises(data);
        setHeaders(keys);
    }

    /**
     * Get all the exercises when dom updates
     * empty array passed as second arg [] to only call once
     * */
    useEffect(() => {
        fetchExercises();
    }, []);
    
    return(
        <div className="homepage">
            <h1>Exercise Tracker</h1>
            <ExerciseTable exercises={exercises} onDelete={onDelete} onEdit={onEdit} headers={headers}></ExerciseTable>
            <Link to="/create-exercise-page">New Exercise</Link>
        </div>
    );
  };

export default HomePage;