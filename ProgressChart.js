import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { week: "Week 1", progress: 20 },
  { week: "Week 2", progress: 40 },
  { week: "Week 3", progress: 60 },
  { week: "Week 4", progress: 80 }
];

function ProgressChart() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>📈 Weekly Learning Progress</h1>

      <p style={{ color: "gray", marginBottom: "40px" }}>
        Track how your learning progress improves week by week.
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        <LineChart width={600} height={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="week"
            label={{ value: "Weeks", position: "insideBottom", offset: -5 }}
          />

          <YAxis
            label={{
              value: "Progress (%)",
              angle: -90,
              position: "insideLeft"
            }}
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="progress"
            stroke="#4CAF50"
            strokeWidth={3}
            animationDuration={1500}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default ProgressChart;