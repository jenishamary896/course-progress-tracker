import { useState, useContext } from "react";
import { CourseContext } from "../context/CourseContext";
import { Link } from "react-router-dom";

function CourseSearch() {

  const { courses } = useContext(CourseContext);
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>

      <h1>🔍 Search Courses</h1>

      <input
        type="text"
        placeholder="Enter course name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          marginBottom: "30px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />

      <div>
        {filteredCourses.map((course, index) => (

          <Link
            key={index}
            to={`/course/${course.name}`}
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >

            <div
              style={{
                width: "300px",
                margin: "10px auto",
                padding: "12px",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "pointer"
              }}
            >
              <h3>{course.name}</h3>
            </div>

          </Link>

        ))}
      </div>

    </div>
  );
}

export default CourseSearch;