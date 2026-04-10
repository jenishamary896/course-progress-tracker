import { useState, useEffect } from "react";

function LearningStreak() {

  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const storedStreak = localStorage.getItem("learningStreak");

    if (storedStreak) {
      setStreak(parseInt(storedStreak));
    } else {
      localStorage.setItem("learningStreak", 1);
    }
  }, []);

  const increaseStreak = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    localStorage.setItem("learningStreak", newStreak);
  };

  const resetStreak = () => {
    setStreak(1);
    localStorage.setItem("learningStreak", 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>🔥 Learning Streak</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Maintain your daily learning habit and keep your streak alive.
      </p>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          🔥 {streak} Day Streak
        </h2>

        <button
          onClick={increaseStreak}
          style={{
            padding: "12px 25px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 3px 6px rgba(0,0,0,0.2)"
          }}
        >
          Study Today
        </button>

        <br />

        <button
          onClick={resetStreak}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Reset Streak
        </button>

      </div>
    </div>
  );
}

export default LearningStreak;