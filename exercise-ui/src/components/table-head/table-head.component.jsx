import React from 'react';

const TableHead = ({headers}) => (
    <thead>
        <tr>
        {headers.map(header => (
            <th key={header}>{header.toUpperCase()}</th>
        ))}
        </tr>
    </thead>
);

export default TableHead;