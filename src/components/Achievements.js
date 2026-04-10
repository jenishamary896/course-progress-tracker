import { useState, useEffect } from "react";

function Achievements() {

  const defaultAchievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "You completed your first course.",
      claimed: false
    },
    {
      id: 2,
      title: "Progress Master",
      description: "Average progress reached 80%.",
      claimed: false
    },
    {
      id: 3,
      title: "All Courses Completed",
      description: "You finished all available courses.",
      claimed: false
    }
  ];

  const [achievements, setAchievements] = useState([]);

  // Load saved achievements
  useEffect(() => {

    const saved = localStorage.getItem("achievements");

    if (saved) {
      setAchievements(JSON.parse(saved));
    } else {
      setAchievements(defaultAchievements);
    }

  }, []);

  // Claim badge
  const claimAchievement = (id) => {

    const updated = achievements.map((ach) =>
      ach.id === id
        ? { ...ach, claimed: true }
        : ach
    );

    setAchievements(updated);

    // Save to localStorage
    localStorage.setItem(
      "achievements",
      JSON.stringify(updated)
    );
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>

      <h1>🏆 Achievements</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px"
        }}
      >
        {achievements.map((ach) => (

          <div
            key={ach.id}
            style={{
              width: "260px",
              padding: "20px",
              borderRadius: "12px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}
          >
            <h3>🏅 {ach.title}</h3>

            <p>{ach.description}</p>

            {ach.claimed ? (

              <p
                style={{
                  color: "green",
                  fontWeight: "bold"
                }}
              >
                ✅ Claimed
              </p>

            ) : (

              <button
                onClick={() =>
                  claimAchievement(ach.id)
                }
              >
                Claim Badge
              </button>

            )}

          </div>

        ))}
      </div>

    </div>
  );
}

export default Achievements;
