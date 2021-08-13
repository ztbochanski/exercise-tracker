import React from 'react';

const TableHead = ({headers}) => (
    <thead>
        <tr>
        {headers.map(header => (
            <th key={header}>{header}</th>
        ))}
        </tr>
    </thead>
);

export default TableHead;