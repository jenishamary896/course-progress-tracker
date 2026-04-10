import { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

import ProgressBar from "./ProgressBar";

function CourseList() {

  const { courses } = useContext(CourseContext);
  
  const [filter, setFilter] = useState("all");

  const filteredCourses = courses.filter((course) => {
    if (filter === "completed") return course.progress === 100;
    if (filter === "inprogress") return course.progress < 100;
    return true;
  });

  return (
    <div style={{ textAlign: "center" }}>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")} style={{ marginRight: "10px" }}>
          All
        </button>

        <button onClick={() => setFilter("completed")} style={{ marginRight: "10px" }}>
          Completed
        </button>

        <button onClick={() => setFilter("inprogress")}>
          In Progress
        </button>
      </div>

      {filteredCourses.map((course, index) => (
        <div
          key={index}
          style={{
            width: "400px",
            margin: "20px auto",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{course.name}</h3>

          <ProgressBar progress={course.progress} />

          <p>{course.progress}% completed</p>

        </div>
      ))}
    </div>
  );
}

export default CourseList;
