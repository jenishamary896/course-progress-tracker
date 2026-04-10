import { useState, useEffect } from "react";

function StudyTimer() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const formatTime = () => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>⏱ Study Timer</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Track how long you study.
      </p>

      <div
        style={{
          width: "300px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
          {formatTime()}
        </h2>

        <button onClick={startTimer} style={{ marginRight: "10px" }}>
          Start
        </button>

        <button onClick={pauseTimer} style={{ marginRight: "10px" }}>
          Pause
        </button>

        <button onClick={resetTimer}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default StudyTimer;