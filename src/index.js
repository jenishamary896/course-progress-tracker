import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CourseProvider from "./context/CourseContext";
import ThemeProvider from "./context/ThemeContext"; // import the new ThemeProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>        {/* Wrap entire app in ThemeProvider */}
    <CourseProvider>     {/* Then wrap CourseProvider inside */}
      <App />
    </CourseProvider>
  </ThemeProvider>
);

