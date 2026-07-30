import ProtectedRoute from './router/ProtectedRouter'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Onboarding from "./pages/Onboarding";
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Notifications from './pages/Notifications';
import Feedback from './pages/Feedback';
import Upgrade from './pages/Upgrade';
import Milestone from "./pages/Milestone";
import Recipe from './pages/Recipe';
import Chat from './pages/Chat';
import Preparetion from './pages/Preparetion';
import Home from './pages/Home';
import Settings from './pages/Settings';
import SplashScreen from "./pages/SplashScreen";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SplashScreen />}
        />
        <Route
          path="/signin"
          element={<SignIn />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />

        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
    
        <Route
          path="/step1"
          element={
            <ProtectedRoute>
              <Step1 />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/step2"
          element={
            <ProtectedRoute>
              <Step2 />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/feedback"
          element={
            <ProtectedRoute>
              <Feedback />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/upgrade"
          element={
            <ProtectedRoute>
              <Upgrade />
            </ProtectedRoute>
          }
        />

        <Route
          path="/milestone"
          element={
            <ProtectedRoute>
              <Milestone />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/recipe"
          element={
            <ProtectedRoute>
              <Recipe />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/preparetion"
          element={
            <ProtectedRoute>
              <Preparetion />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;