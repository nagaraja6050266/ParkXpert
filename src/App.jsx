import { Routes, Route } from "react-router-dom";
import Intro from "./pages/intro/Intro";
import SignIn from "./pages/signin/SignIn";
import "./index.css";
import SignUp from "./pages/signup/SignUp";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default App;
