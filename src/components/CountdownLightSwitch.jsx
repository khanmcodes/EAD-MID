import React, { useEffect, useState } from "react";
import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode=='dark')
            setMode('light')
        else
            setMode('dark')

            console.log(mode);
    }

    const lightTheme = () => {
        
    }

  return (
    <>
        <div className="container">
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" id="themeToggle" onChange={toggleMode}/>
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
          <button id="startButton">Start Timer</button>
          <button id="resetButton" style={{display: 'none'}}>
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
