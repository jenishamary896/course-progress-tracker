import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProgressPage from "./pages/ProgressPage";
import StreakPage from "./pages/StreakPage";
import AchievementsPage from "./pages/AchievementsPage";
import Deadlines from "./pages/DeadLines";
import StudyTimer from "./pages/StudyTimer";
import CourseSearch from "./pages/CourseSearch";
import DarkMode from "./pages/DarkMode";
import CourseNotes from "./pages/CourseNotes";
import LearningReport from "./pages/LearningReport";
import UserProfile from "./pages/UserProfile";
import CourseRatings from "./pages/CourseRatings";
import LearningGoal from "./pages/LearningGoal";
import CourseDetails from "./pages/CourseDetails";


import CourseProvider from "./context/CourseContext";

function App() {
  return (
    <CourseProvider>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/streak" element={<StreakPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/timer" element={<StudyTimer />} />
          <Route path="/search" element={<CourseSearch />} />
          <Route path="/darkmode" element={<DarkMode />} />
          <Route path="/notes" element={<CourseNotes />} />
          <Route path="/report" element={<LearningReport />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/ratings" element={<CourseRatings />} />
          <Route path="/goal" element={<LearningGoal />} />
          <Route
  path="/course/:name"
  element={<CourseDetails />}
/>


        </Routes>
      </Router>
    </CourseProvider>
  );
}

export default App;

