import ProgressChart from "../components/ProgressChart";

function ProgressPage() {
  return (
    <div style={{
  textAlign: "center",
  minHeight: "100vh",
  padding: "50px 0",
  backgroundColor: "#f4f6f8"
}}>
      <h2>Weekly Progress</h2>
      <ProgressChart />
    </div>
  );
}

export default ProgressPage;
