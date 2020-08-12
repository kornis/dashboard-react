import React from 'react';

function TableRow(props) {
    return (
       <>
            {props.values.map((value, i) => 
            <tr key={value.name+i}>
                <td>{value.name}</td>
                <td>{value.description}</td>
                <td>{value.price}</td>
                <td>{value.categories}</td>
                <td>{value.colors}</td>
                <td>{value.stock}</td>
            </tr>)}
        </>
    );
}

export default TableRow;