import React, { useEffect, useState } from "react";
import "./CountdownLightSwitch.css";

function CountdownLightSwitch() {
  const [mode, setMode] = useState("light");
  const [timer, setTimer] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (timer) {
      let timeElapsed = 0;
      setProgress(0);
      const interval = setInterval(() => {
        timeElapsed += 1;
        setProgress((prev) => prev + 100 / 30);

        if (timeElapsed >= 30) {
          clearInterval(interval);
          console.log("30s passed");
          alert("Times Up!");
          setTimer(false);
          setIsRunning(false);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    console.log(`Mode changed to: ${mode}`);
  };

  const onStart = () => {
    setTimer(true);
    setIsRunning(true);
  };

  const onReset = () => {
    setTimer(false);
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div className={`container ${mode}`}>
      <div className="header">
        <h1>Countdown & Light Switch</h1>
        <div className="toggle-container">
          <label className="toggle-switch">
            <input type="checkbox" onChange={toggleMode} />
            <span className="slider"></span>
          </label>
          <span>{mode === "light" ? "Light Mode" : "Dark Mode"}</span>
        </div>
      </div>

      <div className="timer-section">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
              transition: "width 1s linear",
            }}
          ></div>
        </div>
        <div className="timer">{Math.floor(progress / (100 / 30))}s</div>
        <div className="btn-group">
          <button onClick={onStart} disabled={isRunning}>
            Start Timer
          </button>
          <button onClick={onReset} disabled={!isRunning}>
            Reset Timer
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownLightSwitch;
