import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
// import Onboarding from "./pages/Onboarding";
import Step1 from './pages/Step1'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;