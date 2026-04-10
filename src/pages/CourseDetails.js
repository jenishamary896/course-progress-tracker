import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseDetails() {

  const { name } = useParams();
  const { courses } = useContext(CourseContext);

  // Find selected course
  const selectedCourse = courses.find(
    (course) => course.name === name
  );

  if (!selectedCourse) {
    return <h2>Course not found</h2>;
  }

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >

      <h1>📘 Course Details</h1>

      <div
        style={{
          maxWidth: "400px",
          margin: "30px auto",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >

        <h2>{selectedCourse.name}</h2>

        <p>
          <strong>Progress:</strong>{" "}
          {selectedCourse.progress}%
        </p>

        {/* Progress Bar */}

        <div
          style={{
            width: "100%",
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "10px"
          }}
        >

          <div
            style={{
              width: `${selectedCourse.progress}%`,
              height: "100%",
              backgroundColor: "#4CAF50"
            }}
          />

        </div>

        {/* Status */}

        <p style={{ marginTop: "15px" }}>

          {selectedCourse.progress === 100
            ? "✅ Course Completed"
            : "📖 Course In Progress"}

        </p>

      </div>

    </div>
  );
}

export default CourseDetails;
