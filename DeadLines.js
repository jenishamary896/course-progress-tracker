import { useState, useEffect } from "react";

function Deadlines() {

  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [deadlineDate, setDeadlineDate] = useState("");

  // Load saved deadlines
  useEffect(() => {

    const saved = localStorage.getItem("courseDeadlines");

    if (saved) {
      setCourses(JSON.parse(saved));
    }

  }, []);

  // Save deadlines when updated
  useEffect(() => {

    localStorage.setItem(
      "courseDeadlines",
      JSON.stringify(courses)
    );

  }, [courses]);

  // Add new deadline
  const addDeadline = () => {

    if (courseName === "" || deadlineDate === "") {
      alert("Please enter course name and deadline");
      return;
    }

    const newCourse = {
      id: Date.now(),
      name: courseName,
      deadline: deadlineDate
    };

    setCourses([...courses, newCourse]);

    setCourseName("");
    setDeadlineDate("");

  };

  // Get today's date
  const today = new Date();

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >

      <h1>📅 Course Deadlines</h1>

      <p style={{ color: "gray" }}>
        Add deadlines and track upcoming due dates.
      </p>

      {/* Input Section */}

      <div style={{ marginBottom: "30px" }}>

        <input
          type="text"
          placeholder="Course Name"
          value={courseName}
          onChange={(e) =>
            setCourseName(e.target.value)
          }
          style={{
            padding: "10px",
            marginRight: "10px"
          }}
        />

        <input
          type="date"
          value={deadlineDate}
          onChange={(e) =>
            setDeadlineDate(e.target.value)
          }
          style={{
            padding: "10px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={addDeadline}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Add Deadline
        </button>

      </div>

      {/* Deadline List */}

      {courses.length === 0 ? (

        <p>No deadlines added yet.</p>

      ) : (

        courses.map((course) => {

          const deadlineDateObj =
            new Date(course.deadline);

          const timeDiff =
            deadlineDateObj - today;

          const daysLeft =
            Math.ceil(
              timeDiff /
              (1000 * 60 * 60 * 24)
            );

          return (

            <div
              key={course.id}
              style={{
                maxWidth: "400px",
                margin: "15px auto",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.1)"
              }}
            >

              <h3>{course.name}</h3>

              <p>
                Deadline: {course.deadline}
              </p>

              {/* Deadline Warnings */}

              {daysLeft === 0 && (
                <p
                  style={{
                    color: "red",
                    fontWeight: "bold"
                  }}
                >
                  ⚠ Deadline is Today!
                </p>
              )}

              {daysLeft > 0 &&
               daysLeft <= 3 && (
                <p
                  style={{
                    color: "orange",
                    fontWeight: "bold"
                  }}
                >
                  ⏳ {daysLeft} day(s) left!
                </p>
              )}

              {daysLeft < 0 && (
                <p
                  style={{
                    color: "gray",
                    fontWeight: "bold"
                  }}
                >
                  ❌ Deadline Passed
                </p>
              )}

            </div>

          );

        })

      )}

    </div>
  );
}

export default Deadlines;