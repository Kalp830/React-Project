import React, { useState } from "react";

const UseState = () => {
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <h2>Use State Examples</h2>
      <h3>Ex:1 Handling Input Fields</h3>
      <div className="input-box">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h2>{text}</h2>
      </div>

      <h3>Ex:2 Toggle Between Two States</h3>
      <div>
        <p>{isOn ? "On" : "Off"}</p>
        <button onClick={handleClick}>Click Here</button>
      </div>
    </>
  );
};

export default UseState;
