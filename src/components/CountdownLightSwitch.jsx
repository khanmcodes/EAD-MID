import React, { useEffect, useState } from "react";
import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {
  const [mode, setMode] = useState("light");
  const [timer, setTimer] = useState("false");
  const [progress, setProgress] = useState(0);

  const startTimer = () => {
    if (timer) {
      const timeOut = setTimeout(() => {
        console.log("30s passed");

        setTimer("false");
        toggleMode();
      }, 3000); //keeping 3000 for testing
    }
  };

  const toggleMode = () => {
    if (mode == "dark") setMode("light");
    else setMode("dark");

    console.log(mode);
  };

  const onStart = () => {
    document.getElementById("resetButton").style.display = "block";
    setTimer("true");
    startTimer();
  };

  const onReset = () => {
    setTimer("true");
    startTimer();
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Countdown & Light Switch</h1>
          <div className="toggle-container">
            <label className="toggle-switch">
              <input type="checkbox" id="themeToggle" onChange={toggleMode} />
              <span className="slider"></span>
            </label>
            <span>Light Mode</span>
          </div>
        </div>

        <div className="timer-section">
          <div className="progress-bar">
            <div className="progress" id="progress"></div>
          </div>
          <div className="timer" id="timerDisplay">
            30s
          </div>
          <div className="btn-group">
            <button id="startButton" onClick={onStart}>
              Start Timer
            </button>
            <button
              id="resetButton"
              onClick={onReset}
              style={{ display: "none" }}
            >
              Reset Timer
            </button>
          </div>
          <div className="message" id="messageArea"></div>
        </div>
      </div>
    </>
  );
}

export default CountdownLightSwitch;
