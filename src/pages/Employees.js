//Based on example in React docs: https://reactjs.org/docs/faq-ajax.html
//simple API Call and display of Data
import React, { useState, useEffect } from "react";
import Employee from "../components/Employee";
import styled from "styled-components";

const StyledEmployees = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: left;
  grid-gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function Employees() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [employees, setEmployees] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setEmployees(result.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <StyledEmployees>
        {employees.map((employee) => (
          //mapping each employee returned from the API into an Employee Component and displaying
          <Employee key={employee.id} employee={employee}></Employee>
        ))}
      </StyledEmployees>
    );
  }
}

export default Employees;
