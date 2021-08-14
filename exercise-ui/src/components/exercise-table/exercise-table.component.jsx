import React from 'react';

import TableHead from '../table-head/table-head.component'
import Exercise from '../exercise/exercise.component';


const ExerciseTable = ({ exercises, onDelete, onEdit, headers }) => {

    return(
        <div>
            <table>
                <TableHead headers={ headers }></TableHead>
                <tbody>
                    {exercises.map((exercise, i) => <Exercise exercise={exercise}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        key={i} />)}
                </tbody>
            </table>
        </div>
)};

export default ExerciseTable;