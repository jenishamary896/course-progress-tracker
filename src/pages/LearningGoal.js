import { useState, useContext, useEffect } from "react";
import { CourseContext } from "../context/CourseContext";

function LearningGoal() {

  const { courses } = useContext(CourseContext);

  const completedCourses = courses.filter(
    (course) => course.progress === 100
  ).length;

  const [goal, setGoal] = useState(5);

  useEffect(() => {
    const savedGoal = localStorage.getItem("learningGoalTarget");
    if (savedGoal) {
      setGoal(parseInt(savedGoal));
    }
  }, []);

  const updateGoal = (e) => {
    setGoal(e.target.value);
    localStorage.setItem("learningGoalTarget", e.target.value);
  };

  const percentage = Math.min(
    Math.round((completedCourses / goal) * 100),
    100
  );

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>🎯 Learning Goal Tracker</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Track your progress toward completing courses
      </p>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <label>Set Course Completion Goal</label>

        <input
          type="number"
          value={goal}
          onChange={updateGoal}
          style={{
            width: "100%",
            padding: "10px",
            margin: "15px 0"
          }}
        />

        <p>
          Completed Courses: <b>{completedCourses}</b> / {goal}
        </p>

        <div
          style={{
            height: "20px",
            backgroundColor: "#eee",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "15px"
          }}
        >
          <div
            style={{
              width: `${percentage}%`,
              backgroundColor: "#4CAF50",
              height: "100%"
            }}
          ></div>
        </div>

        <p style={{ marginTop: "10px" }}>{percentage}% Completed</p>

      </div>

    </div>
  );
}

export default LearningGoal;
