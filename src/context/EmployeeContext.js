import React, { createContext } from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = props => {
  return (
  <EmployeeContext.Provider value={{employees:[]}}>
    {props.children} 
  </EmployeeContext.Provider>);
}
