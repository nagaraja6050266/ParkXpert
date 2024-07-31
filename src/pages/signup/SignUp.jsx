import { useState } from "react";
import appIcon from "../../assets/appIcon.png";
import LabelAndInput from "../../components/LabelAndInput";

function SignUp() {
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");

    const handleSignIn = () => {
        //signIn
    };

    const handleCancel = () => {
        //cancellation
    };

    const handleLogin = () => {
        //comments
    };

    return (
        <div className="splitted-page">
            <div className="first-half">
                <div className="app-name-container">
                    <img src={appIcon} alt="appIcon" />
                    <h2 className="appName">ParkXpert</h2>
                </div>
            </div>
            <div className="second-half sign-up">
                <div className="second-half-inner">
                    <h1 className="header">Sign Up</h1>
                    <h4 className="description">
                        Enter your details below to create your account
                    </h4>
                    <div className="form">
                        <LabelAndInput
                            labelName="Full Name"
                            inputType="text"
                            inputId="name"
                            placeHolder="Enter your Name"
                        />
                        <div
                            className="label-and-input-outer"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "10px",
                                width: "105%",
                            }}
                        >
                            <LabelAndInput
                                labelName="Email"
                                inputType="email"
                                inputId="email"
                                placeHolder="Enter your Mail ID"
                            />
                            <LabelAndInput
                                labelName="Mobile Number"
                                inputType="text"
                                inputId="number"
                                placeHolder="Enter your Mobile No."
                            />
                        </div>
                    </div>
                    <div className="forgot-option" style={{ display: "flex" }}>
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            style={{ width: "15px" }}
                        />
                        <p className="agree" style={{ color: "#5B738B" }}>
                            I agree to the{" "}
                            <span>
                                <a
                                    style={{
                                        color: "#354A5F",
                                        fontWeight: "bold",
                                    }}
                                    href=""
                                >
                                    Terms and Conditions{" "}
                                </a>
                            </span>
                        </p>
                    </div>
                    <div className="cancel-or-signin">
                        <button className="back-button" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="next-button" onClick={handleSignIn}>
                            Sign Up
                        </button>
                    </div>
                    <p style={{ marginTop: 30, color: "#5B738B" }}>
                        Already have an account ?{" "}
                        <span
                            onClick={handleLogin}
                            style={{ fontWeight: "bold", color: "#00205c" }}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
