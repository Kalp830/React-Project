import { useState } from "react";
import "./App.css";
import EventProps from "./assets/components/EventProps";
import LiftingState from "./assets/components/LiftingState";
import NetflixSeries from "./assets/components/NetflixSeries";
import Profile from "./assets/components/Profile";
import State from "./assets/components/State";
import Todo from "./assets/components/Todo/Todo";
import ToggleSwitch from "./assets/components/toggle-switch/ToggleSwitch";
import Card from "./assets/components/props/Card";
import Button from "./assets/components/props/Button";
import ConditionalRendering from "./assets/components/ConditionalRendering";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <NetflixSeries/>
      <Profile />
      <EventProps />
      <State/>
      <LiftingState /> */}
      {/* <ToggleSwitch /> */}
      {/* <Todo /> */}
      {/* <Card name="Love Coding">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          architecto!
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
      </Card> */}
      <h1>{count}</h1>
      <Button handleClick={handleClick} text="Click Me"></Button>
      <ConditionalRendering />
    </>
  );
}

export default App;
