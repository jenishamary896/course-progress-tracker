import { createContext, useState, useEffect } from "react";

export const CourseContext = createContext();

function CourseProvider({ children }) {

  const [courses, setCourses] = useState([]);

  // Fetch courses from API
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {

        // Convert API data into course format
        const formattedCourses = data.map((item) => ({
          name: item.title,
          progress: item.completed ? 100 : 50
        }));

        setCourses(formattedCourses);

      })
      .catch((error) => {
        console.log("API Error:", error);
      });

  }, []);

  return (
    <CourseContext.Provider value={{ courses }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider;