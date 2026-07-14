import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;