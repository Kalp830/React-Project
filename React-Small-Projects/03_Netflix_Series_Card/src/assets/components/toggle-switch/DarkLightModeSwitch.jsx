import { useState } from "react";
import "./DarkLightModeSwitch.css";

const DarkLightModeSwitch = () => {
  const [isMode, setIsMode] = useState(false);

  const handleColorMode = () => {
    setIsMode(!isMode);
  };

  return (
    <>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isMode ? "#1a1d1a" : "#f3e8e7" }}
        onClick={handleColorMode}
      >
        <div className={`switch ${isMode ? "dark" : "light"}`}>
          <span className="switch-state">{isMode ? "dark" : "light"}</span>
        </div>
      </div>
    </>
  );
};

export default DarkLightModeSwitch;
