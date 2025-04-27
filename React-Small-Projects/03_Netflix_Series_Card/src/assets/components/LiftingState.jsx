import { useState } from "react";

// For updating state of childern from parent you use concept called Lifting the sate up.
// Here you will lift the state from child to parent then pass that state down uisng props.
const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};
export const InputComponent = ({ inputValue, setInputValue }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export const DisplayComponent = ({ inputValue }) => {
  return (
    <>
      <p>The current input value is : {inputValue}</p>
    </>
  );
};

export default LiftingState;
