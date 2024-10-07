import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { removeEmployee } from "../../redux/employe/slice";
import { formatCamelCase } from "../../ts/formatCamelCase";

import sprite from "../../img/symbol-defs.svg";
import scss from "./EmployeeTable.module.scss";
import Avatar from "../Avatar/Avatar";

const EmployeeTable: React.FC = () => {
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveEmployee = (id: number) => {
    dispatch(removeEmployee(id));
  };

  return (
    <table className={scss.table}>
      <thead>
        <tr className={scss["table-header"]}>
          <th className={scss["table-cell"]}>Name</th>
          <th className={scss["table-cell"]}>Email</th>
          <th className={scss["table-cell"]}>Status</th>
          <th className={scss["table-cell"]}>Role</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id} className={scss["table-row"]}>
            <td className={scss["table-cell"]}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar name={employee.name} />
                {employee.name}
              </div>
            </td>
            <td className={scss["table-cell"]}>{employee.email}</td>
            <td className={scss["table-cell"]}>
              {formatCamelCase(employee.status)}
            </td>
            <td className={scss["table-cell"]}>
              {formatCamelCase(employee.status)}
            </td>
            <td className={scss["table-cell"]}>
              <div className={scss["button-container"]}>
                <button className={scss["table-button"]}>
                  <svg className={scss["table-icon"]} width="16" height="16">
                    <use xlinkHref={`${sprite}#icon-edit`} />
                  </svg>
                </button>
                <button
                  className={scss["table-button"]}
                  onClick={() => handleRemoveEmployee(employee.id)}
                >
                  <svg className={scss["table-icon"]} width="16" height="16">
                    <use xlinkHref={`${sprite}#icon-delete`} />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
