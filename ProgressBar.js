function ProgressBar({ progress }) {

  const getColor = () => {
    if (progress >= 80) return "#4CAF50"; // green
    if (progress >= 50) return "#FFC107"; // yellow
    return "#F44336"; // red
  };

  return (
    <div style={{
      width: "100%",
      backgroundColor: "#ddd",
      borderRadius: "10px",
      overflow: "hidden",
      height: "20px",
      marginBottom: "5px"
    }}>
      <div style={{
        width: `${progress}%`,
        backgroundColor: getColor(),
        height: "100%",
        transition: "width 0.5s ease"
      }} />
    </div>
  );
}

export default ProgressBar;