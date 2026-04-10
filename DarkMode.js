import { useState, useEffect } from "react";

function DarkMode() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setDarkMode(true);
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    localStorage.setItem("darkMode", newMode);

    if (newMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>🌙 Dark Mode</h1>

      <p style={{ marginBottom: "30px", color: "gray" }}>
        Switch between Light Mode and Dark Mode
      </p>

      <button
        onClick={toggleDarkMode}
        style={{
          padding: "12px 25px",
          fontSize: "16px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white"
        }}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

    </div>
  );
}

export default DarkMode;