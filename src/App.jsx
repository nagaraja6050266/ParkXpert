import { Route, Routes } from "react-router-dom";
import IndexTemplate from "./components/indexTemplate";
import IntroPage from "./pages/intro/index.jsx";
import Dashboard from "./pages/after-login/dashboard/index";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/signin" element={<IndexTemplate page="signin" />} />
            <Route path="/signup" element={<IndexTemplate page="signup" />} />
            <Route
                path="/set-password"
                element={<IndexTemplate page="set-password" />}
            />
            <Route path="/otp" element={<IndexTemplate page="otp" />} />
            <Route
                path="/reset-password"
                element={<IndexTemplate page="reset-password" />}
            />
            <Route
                path="/forgot-password"
                element={<IndexTemplate page="forgot-password" />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
