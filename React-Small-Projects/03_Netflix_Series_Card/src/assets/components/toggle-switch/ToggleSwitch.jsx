import React, { useState } from "react";
import "./ToggleSwitch.css";
import DarkLightModeSwitch from "./DarkLightModeSwitch";

// React Mini Project🔥Toggle Switch Button Component

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };
  const checkIsOn = isOn ? "on" : "off";
  const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "" };
  const switchToggle = `switch ${isOn ? "on" : "off"}`;
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div
          className="toggle-switch"
          style={toggleBgColor}
          onClick={handleToggleSwitch}
        >
          <div className={switchToggle}>
            <span className="switch-state">{checkIsOn}</span>
          </div>
        </div>
        <DarkLightModeSwitch />
      </div>
    </>
  );
};

export default ToggleSwitch;
