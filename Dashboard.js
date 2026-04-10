import CourseList from "../components/CourseList";
import CourseSummary from "../components/CourseSummary";

function Dashboard() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>📊 Learning Dashboard</h1>

      <p style={{ color: "gray", marginBottom: "40px" }}>
        Monitor your courses and track your learning progress.
      </p>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          backgroundColor: "#ffffff"
        }}
      >
        <CourseSummary />

        <div style={{ marginTop: "30px" }}>
          <CourseList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;