import React from 'react';
import TableHead from '../table-head/table-head.component'
import TableBody from '../table-body/table-body.component';


const Table = ({ headers, rows }) => (
  <div>
    <table>
      <TableHead headers={ headers }></TableHead>
      <TableBody rows={ rows }></TableBody>
    </table>
  </div>
)

export default Table;