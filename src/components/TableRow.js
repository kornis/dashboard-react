import React from 'react';

function TableRow(props) {
    return (
            <tr>
                <td>{props.values.name}</td>
                <td>{props.values.description}</td>
                <td>{props.values.price}</td>
                <td>{props.values.categories}</td>
                <td>{props.values.colors}</td>
                <td>{props.values.stock}</td>
            </tr>
    );
}

export default TableRow;