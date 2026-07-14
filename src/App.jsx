import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignUp from "./pages/SignUp";
// import Onboarding from "./pages/Onboarding";
// import Step1 from './pages/Step1'
import Step2 from './pages/Step2'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Step2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;