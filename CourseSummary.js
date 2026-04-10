import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseSummary() {

  const { courses } = useContext(CourseContext);

  const totalCourses = courses.length;

  const completedCourses = courses.filter(
    course => course.progress === 100
  ).length;

  const avgProgress =
    courses.reduce((sum, course) => sum + course.progress, 0) /
    courses.length;

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginBottom: "30px"
    }}>

      <div>
        <h3>Total Courses</h3>
        <p>{totalCourses}</p>
      </div>

      <div>
        <h3>Completed</h3>
        <p>{completedCourses}</p>
      </div>

      <div>
        <h3>Average Progress</h3>
        <p>{Math.round(avgProgress)}%</p>
      </div>

    </div>
  );
}

export default CourseSummary;