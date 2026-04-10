import { useContext, useState } from "react";
import { CourseContext } from "../context/CourseContext";

function LearningReport() {

  const { courses } = useContext(CourseContext);
  const [selectedCourse, setSelectedCourse] = useState("");

  const downloadReport = () => {

    if (selectedCourse === "") {
      alert("Please select a course first");
      return;
    }

    const course = courses.find(
      (c) => c.name === selectedCourse
    );

    let report =
      "Online Course Learning Report\n\n";

    report +=
      `Course Name: ${course.name}\n`;

    report +=
      `Progress: ${course.progress}%\n`;

    report +=
      `Status: ${
        course.progress === 100
          ? "Completed"
          : "In Progress"
      }\n`;

    const blob = new Blob(
      [report],
      { type: "text/plain" }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;

    a.download =
      `${course.name}_Report.txt`;

    a.click();
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px"
      }}
    >

      <h1>📄 Download Learning Report</h1>

      <p
        style={{
          color: "gray",
          marginBottom: "30px"
        }}
      >
        Select a course to download its report.
      </p>

      {/* Course Selection */}

      <select
        value={selectedCourse}
        onChange={(e) =>
          setSelectedCourse(e.target.value)
        }
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "20px"
        }}
      >

        <option value="">
          Select Course
        </option>

        {courses.map((course, index) => (

          <option
            key={index}
            value={course.name}
          >

            {course.name}

          </option>

        ))}

      </select>

      <br />

      <button
        onClick={downloadReport}
        style={{
          padding: "12px 25px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Download Report
      </button>

    </div>
  );
}

export default LearningReport;
