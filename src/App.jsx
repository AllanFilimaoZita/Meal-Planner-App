import { BrowserRouter, Routes, Route } from "react-router-dom";

// import SignUp from "./pages/SignUp";
// import Onboarding from "./pages/Onboarding";
// import Step1 from './pages/Step1'
// import Step2 from './pages/Step2'
// import Notifications from './pages/Notifications'
// import Feedback from './pages/Feedback'
// import Upgrade from './pages/Upgrade'
import Milestone from "./pages/Milestone";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Milestone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;