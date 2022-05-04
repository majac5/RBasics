import React, { useContext } from "react";
import "./TableUsersList.css";
import UserContext from "../App";

const TableUsersList = (props) => {
  const { users } = props;

  const globalData = useContext(UserContext);

  return (
    <div>
      <table className="table__main">
        <tbody>
          <tr className="table__row">
            <th className="table__head">name</th>
            <th className="table__head">age</th>
            <th className="table__head">interest</th>
          </tr>
          {users?.map((el, indx) => {
            return (
              <tr className="table__row" key={indx}>
                <td className="table__data">{el?.name}</td>
                <td className="table__data">{el?.age}</td>
                <td className="table__data">{el?.interest}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div style={{ backgroundColor: "red" }}>{globalData}</div>
    </div>
  );
};

export default TableUsersList;
