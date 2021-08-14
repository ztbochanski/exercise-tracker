import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Exercise = ({ exercise, onDelete, onEdit }) => (
    
    <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.unit}</td>
        <td>{exercise.date}</td>
        <td><MdEdit onClick={() => onEdit(exercise)} /></td>
        <td><MdDelete onClick={() => onDelete(exercise._id)} /></td>
    </tr>
    
);

export default Exercise;