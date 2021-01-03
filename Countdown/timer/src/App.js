import "./App.css";
import React, { useState, useRef } from "react";

function PadTime(time) {
  return time.toString().padStart(2, "0");
}

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState("Timer App");
  const [isRunning, setIsRunning] = useState(false);
  const minutes = PadTime(Math.floor(timeLeft / 60));
  const seconds = PadTime(timeLeft - minutes * 60);
  const intervalRef = useRef(null);
  // const minutes = Math.floor(timeLeft / 60)
  //   .toString()
  //   .padStart(2, "0");
  // const seconds = (timeLeft - minutes * 60).toString().padStart(2, "0");
  function onStart() {
    if (intervalRef.current !== null) return;
    setTitle("Timer Has Started");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        resetTime();
        return 0;
      });
    }, 1000);
  }
  function stopTimer() {
    if (intervalRef.current === null) return;
    setTitle("Timer Has Been Stopped");
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  function resetTime() {
    clearInterval(intervalRef.current);
    setTitle("Ready For Another Round??");
    intervalRef.current = null;
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }
  return (
    <div className="App">
      <h1 className="heading-title">Timer</h1>
      <h1 className = "heading-subtitle"> {title}</h1>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={onStart}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
}

export default App;
