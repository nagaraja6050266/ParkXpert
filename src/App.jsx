import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import "./index.css";
import SignUp from "./pages/signup/SignUp";
import IntroPage from './pages/intro/index.jsx'
import IntroCard from "./components/IntroCard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<><IntroPage/></>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default App;
