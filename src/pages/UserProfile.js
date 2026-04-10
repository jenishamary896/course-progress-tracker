import { useState, useEffect } from "react";

function UserProfile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("");

  const [profiles, setProfiles] = useState([]);

  // Load saved profiles
  useEffect(() => {

    const savedProfiles =
      localStorage.getItem("userProfiles");

    if (savedProfiles) {
      setProfiles(JSON.parse(savedProfiles));
    }

  }, []);

  // Save profiles
  useEffect(() => {

    localStorage.setItem(
      "userProfiles",
      JSON.stringify(profiles)
    );

  }, [profiles]);

  // Add Profile
  const saveProfile = () => {

    if (name === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    const newProfile = {
      id: Date.now(),
      name,
      email,
      goal
    };

    setProfiles([...profiles, newProfile]);

    // Clear input
    setName("");
    setEmail("");
    setGoal("");

  };

  // Delete Profile
  const deleteProfile = (id) => {

    const updatedProfiles =
      profiles.filter(
        (profile) => profile.id !== id
      );

    setProfiles(updatedProfiles);

  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px"
      }}
    >

      <h1>👤 User Profile</h1>

      <p style={{ color: "gray" }}>
        Save and manage your profile details.
      </p>

      {/* Input Section */}

      <div style={{ marginBottom: "30px" }}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            padding: "10px",
            margin: "8px"
          }}
        />

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            padding: "10px",
            margin: "8px"
          }}
        />

        <br />

        <input
          type="text"
          placeholder="Learning Goal"
          value={goal}
          onChange={(e) =>
            setGoal(e.target.value)
          }
          style={{
            padding: "10px",
            margin: "8px"
          }}
        />

        <br />

        <button
          onClick={saveProfile}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Save Profile
        </button>

      </div>

      {/* Display Saved Profiles */}

      {profiles.length === 0 ? (

        <p>No profiles saved yet.</p>

      ) : (

        profiles.map((profile) => (

          <div
            key={profile.id}
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

            <h3>{profile.name}</h3>

            <p>
              📧 {profile.email}
            </p>

            <p>
              🎯 Goal: {profile.goal}
            </p>

            <button
              onClick={() =>
                deleteProfile(profile.id)
              }
              style={{
                marginTop: "10px",
                padding: "6px 14px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>

        ))

      )}

    </div>
  );
}

export default UserProfile;
