import React from "react";
import styled from "styled-components";

const StyledEmployee = styled.div`
  border: 1px solid black;
`;

const Employee = ({ employee = {} }) => {
  //passing in Employee as props
  return (
    <StyledEmployee>
      <p>Name: {employee.employee_name}</p>
      <p>Age: {employee.employee_age}</p>
      <p>Salary: {employee.employee_salary}</p>
    </StyledEmployee>
  );
};

export default Employee;
