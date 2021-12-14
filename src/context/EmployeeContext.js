import React, { createContext, useState, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialstate = {
  employees: [],
};

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  // const [employees,setEmployees]=useState([])

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee,
    });
  }

  return (
    <EmployeeContext.Provider
      value={{ employees: state.employees, addEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

// export const EmployeeProvider = props => {
//   const[employees,setEmployees]=useState([])
//   return (
//   <EmployeeContext.Provider value={[employees, setEmployees]}>
//     {props.children}
//   </EmployeeContext.Provider>);
// }
