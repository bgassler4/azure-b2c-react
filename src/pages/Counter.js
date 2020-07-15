import React, { useState, useEffect } from "react";

//based off example from React Hooks FAQ: https://reactjs.org/docs/hooks-faq.html

const Counter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
