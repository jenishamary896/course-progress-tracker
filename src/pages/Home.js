import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // import the ThemeContext

function Home() {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // get darkMode & toggle function

  const features = [
    { path: "/dashboard", label: "📊 Dashboard" },
    { path: "/progress", label: "📈 Weekly Progress" },
    { path: "/streak", label: "🔥 Learning Streak" },
    { path: "/achievements", label: "🏆 Achievements" },
    { path: "/deadlines", label: "📅 Course Deadlines" },
    { path: "/timer", label: "⏱ Study Timer" },
    { path: "/search", label: "🔍 Search Courses" },
    { path: "/notes", label: "📝 Course Notes" },
    { path: "/report", label: "📄 Download Report" },
    { path: "/profile", label: "👤 User Profile" },
    { path: "/ratings", label: "⭐ Course Ratings" },
    { path: "/goal", label: "🎯 Learning Goal" }
  ];

  const pageStyle = {
    textAlign: "center",
    padding: "60px 20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#fff" : "#333",
    minHeight: "100vh",
    transition: "all 0.3s ease"
  };

  const buttonStyle = {
    padding: "15px 25px",
    backgroundColor: "#4CAF50",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "all 0.2s ease",
    minWidth: "160px",
    textAlign: "center"
  };

  const toggleButtonStyle = {
    padding: "10px 20px",
    marginBottom: "30px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    backgroundColor: darkMode ? "#4CAF50" : "#333",
    color: "#fff",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  };

  return (
    <div style={pageStyle}>
      {/* Dark Mode Toggle */}
      <button style={toggleButtonStyle} onClick={toggleTheme}>
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1 style={{ marginBottom: "15px" }}>Online Course Progress Tracker</h1>

      <p
        style={{
          marginBottom: "50px",
          color: darkMode ? "#ccc" : "#555",
          maxWidth: "600px",
          margin: "0 auto 50px"
        }}
      >
        Track your learning journey, monitor course progress, and stay motivated with achievements and streaks.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto"
        }}
      >
        {features.map((feature, index) => (
          <Link key={index} to={feature.path} style={buttonStyle}>
            {feature.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
