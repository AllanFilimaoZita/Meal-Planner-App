import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./router/ProtectedRoute";

import SplashScreen from "./pages/SplashScreen";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import Onboarding from "./pages/Onboarding";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Notifications from "./pages/Notifications";
import Feedback from "./pages/Feedback";
import Upgrade from "./pages/Upgrade";
import Milestone from "./pages/Milestone";
import Recipe from "./pages/Recipe";
import Chat from "./pages/Chat";
import Preparetion from "./pages/Preparetion";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/step1" element={<Step1 />} />
                    <Route path="/step2" element={<Step2 />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/upgrade" element={<Upgrade />} />
                    <Route path="/milestone" element={<Milestone />} />
                    <Route path="/recipe/:id" element={<Recipe />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/preparetion/:id" element={<Preparetion />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;