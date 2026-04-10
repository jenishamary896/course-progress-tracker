import { createContext, useState } from "react";

// Create Theme Context
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // Global state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
