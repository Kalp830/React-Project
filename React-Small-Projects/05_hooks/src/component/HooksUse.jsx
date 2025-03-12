import React from "react";
import { useEffect, useState } from "react";
const HooksUse = () => {
  const [name, setName] = useState(0);
  useEffect(() => {
    console.alert("called with name");
  }, []);
  const chnageName = () => {
    setName(name + 5);
  };
  return (
    <div>
      {" "}
      <h2>This my name : {name}</h2>
      <button onClick={chnageName}>Click</button>
    </div>
  );
};

export default HooksUse;
