import React from "react";
import './TableUsersList.css';

const TableUsersList = (props) => {

    return (
        <div>
            <table className="table__main">
                <tr className="table__row">
                <th className="table__head">name</th>
                <th className="table__head">age</th>
                <th className="table__head">interest</th>
                </tr>

                <tr className="table__row">
                <td className="table__data">{props.name}</td>
                <td className="table__data">{props.age}</td>
                <td className="table__data">{props.interest}</td>
                </tr>

            </table>

        </div>
    );
}

export default TableUsersList;