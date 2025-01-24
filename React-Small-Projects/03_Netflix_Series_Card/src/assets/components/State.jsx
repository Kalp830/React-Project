import { useState } from "react";
import styled from "styled-components";

const State = () => {
  const [count, setCount] = useState(5);
  const [color, setColor] = useState("gray");
  const handleButtonClick = () => {
    setCount(() => count + 1);
  };
  const handleColor = () => {
    setColor("red");
  };

  const BtnColor = styled.div`
    background: transparent;
    border: 2px solid red;
    width: 100px;
    height: auto;
    cursor: pointer;
    background: green;
    color: white;
    font-size: 14px;
    padding: 5px;
  `;

  return (
    <>
      <h1>Value {count}</h1>
      <div
        style={{ backgroundColor: color, width: "100px", height: "100px" }}
      ></div>
      <BtnColor onClick={() => handleColor()}>Change Color</BtnColor>
      <button onClick={handleButtonClick}>Increment Count</button>
    </>
  );
};

export default State;
