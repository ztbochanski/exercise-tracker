import React from 'react';
import Counter from '../counter/counter.component';

const Row = ({ element }) => (
    <tr>
        {Object.keys(element).filter(key =>
            key !== 'id').map(key => 
            <td key={ key }>{ element[key] }</td>
        )}
        {(element.hasOwnProperty('name') ? <Counter /> : null )}
    </tr>
);

export default Row;