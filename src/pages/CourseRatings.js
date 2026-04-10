import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";

function CourseRatings() {

  const { courses } = useContext(CourseContext);
  const [ratings, setRatings] = useState({});

  const rateCourse = (courseName, rating) => {
    const updatedRatings = { ...ratings, [courseName]: rating };
    setRatings(updatedRatings);

    localStorage.setItem("courseRatings", JSON.stringify(updatedRatings));
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>⭐ Course Ratings</h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Rate the courses you completed
      </p>

      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            width: "350px",
            margin: "15px auto",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{course.name}</h3>

          <div>
            {[1,2,3,4,5].map((star) => (
              <span
                key={star}
                onClick={() => rateCourse(course.name, star)}
                style={{
                  fontSize: "25px",
                  cursor: "pointer",
                  color: ratings[course.name] >= star ? "gold" : "gray"
                }}
              >
                ★
              </span>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}

export default CourseRatings;
