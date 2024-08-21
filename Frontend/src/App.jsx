import { Route, Routes } from "react-router-dom";
import IndexTemplate from "./components/indexTemplate";
import IntroPage from "./pages/intro/index.jsx";
import MainComponent from "./pages/after-login/MainComponent";
import {Dashboard} from "./pages/after-login/dashboard/index";
import SignInForm from "./pages/signin/SignInForm";
import SignUpForm from "./pages/signup/SignUpForm";
import PasswordForm from "./pages/password/passwordForm";
import OtpForm from "./pages/password/otpForm";
import Peoples from "./pages/after-login/peoples";
import Permissions from "./pages/after-login/permissions";
import Settings from "./pages/after-login/settings";

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
                <Route path="/peoples" element={<Peoples />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;
