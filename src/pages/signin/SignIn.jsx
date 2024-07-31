import React, { useState } from "react";
import appIcon from "../../assets/appIcon.png";
import { useNavigate } from "react-router-dom";
import LabelAndInput from "../../components/LabelAndInput";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Users = [
    {
        email: "nagaraja@gmail.com",
        password: "12345678",
    },
    {
        email: 'alagu@gmail.com',
        password: '12345678'
    }
];

function SignIn() {
    const navigate = useNavigate();
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");
    const [showPassword, setShowPassword] = useState(false);

    const handleResetPassword = () => {
        //Reset
    };

    const handleSubmission = (e) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        for (let i = 0; i < Users.length; i++) {
            if (Users[i].email === email) {
                setEmailErrorMsg(" ");
                if (Users[i].password === password) {
                    //Navigate
                    console.log("Successfully verified");
                    setPasswordErrorMsg(" ");
                } else {
                    setPasswordErrorMsg("Incorrect Password");
                    console.log("Ps worng");
                }
            } else {
                setEmailErrorMsg("Incorrect Email");
                console.log("email", Users[i].email, "given: ", email);
            }
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="splitted-page">
            <div className="first-half">
                <div className="app-name-container">
                    <img src={appIcon} alt="appIcon" />
                    <h2 className="appName">ParkXpert</h2>
                </div>
            </div>
            <div className="second-half">
                <div className="second-half-inner">
                    <h1 className="header">Welcome Back!</h1>
                    <h4 className="description">Sign-in to your account</h4>
                    <div className="form">
                        <LabelAndInput
                            labelName="Email"
                            inputType="email"
                            inputId="email"
                            placeHolder="Enter your Mail ID"
                            errMsg={emailErrorMsg}
                        />
                        <div className="label-and-input">
                            <label htmlFor="password">Password</label>
                            <div className="password-input-container">
                                <input
                                    style={{ backgroundColor: (passwordErrorMsg!=' ') ? '#FFEAF4' : '#eaecee' }}
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Enter your password"
                                />
                                <IconButton
                                    className="password-eye"
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </div>
                            <label style={{ color: "red" }} htmlFor="password">
                                {passwordErrorMsg}
                            </label>
                        </div>
                        <div className="forgot-option">
                            <p>
                                Forgot password ?{" "}
                                <span
                                    onClick={handleResetPassword}
                                    style={{
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                    }}
                                >
                                    Reset Password
                                </span>
                            </p>
                        </div>
                        <button type="submit" onClick={handleSubmission}>Sign In</button>
                    </div>
                    <p style={{ marginTop: 30 }}>
                        Don't have an account ?{" "}
                        <a
                            href="/signup"
                            style={{
                                textDecoration: "none",
                                color: "#00205c",
                                fontWeight: "bold",
                            }}
                        >
                            Sign up for free
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
