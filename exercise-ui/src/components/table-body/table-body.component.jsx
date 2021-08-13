import React from 'react';
import Row from '../row/row.component' 


const TableBody = ({ rows }) => (
    <tbody>
        {rows.map(element => (
            <Row key={element.id} element={element}></Row>
        ))}
    </tbody>
);

export default TableBody;