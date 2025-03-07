import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState(0);
  useEffect(() => {
    console.alert("called with name");
  }, []);
  const chnageName = () => {
    setName(name + 5);
  };
  return (
    <>
      <h2>This my name : {name}</h2>
      <button onClick={chnageName}>Click</button>
    </>
  );
}

export default App;
