import { Route, Routes } from "react-router-dom";
import IndexTemplate from "./components/indexTemplate";
import IntroPage from "./pages/intro/index.jsx";
import MainComponent from "./pages/after-login/index";
import Dashboard from "./pages/after-login/dashboard/Dashboard";
import SignInForm from "./pages/signin/SignInForm";
import SignUpForm from "./pages/signup/SignUpForm";
import PasswordForm from "./pages/password/passwordForm";
import OtpForm from "./pages/password/otpForm";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route element={<IndexTemplate page={" "} />}>
                <Route path="/signin" element={<SignInForm />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route
                    path="/set-password"
                    element={<PasswordForm page="set-password" />}
                />
                <Route path="/otp" element={<OtpForm otpLength={4} />} />
                <Route
                    path="/reset-password"
                    element={<PasswordForm page="reset-password" />}
                />
                <Route
                    path="/forgot-password"
                    element={<PasswordForm page="forgot-password" />}
                />
            </Route>
            <Route element={<MainComponent />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
