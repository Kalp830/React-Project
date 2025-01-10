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
        className="mode-toggle-switch"
        style={{ backgroundColor: isMode ? "#1a1d1a" : "#f3e8e7" }}
        onClick={handleColorMode}
      >
        <div className={`mode-switch ${isMode ? "dark" : "light"}`}>
          <div className="switch-state">
            {isMode ? "dark" : "light"}
            <span className={`color: ${isMode ? "#000" : "#fff"}`}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkLightModeSwitch;
