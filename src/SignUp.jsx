import { useState } from "react";
import appIcon from "./assets/appIcon.png";

function SignUp() {
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");

    const handleSubmission = () => {
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
                        <div className="label-and-input">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div
                            className="label-and-input-outer"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "5px",
                            }}
                        >
                            <div className="label-and-input">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    style={{ width: "150px" }}
                                    type="email"
                                    placeholder="Enter your Email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="label-and-input">
                                <label htmlFor="mobile">Mobile Number</label>
                                <input
                                    style={{ width: "150px" }}
                                    type="number"
                                    placeholder="Enter your Mobile No."
                                    id="number"
                                />
                            </div>
                        </div>
                        <div className="forgot-option">
                            <p>
                                Forgot password ?{" "}
                                <span style={{ fontWeight: "bold" }}>
                                    Reset Password
                                </span>
                            </p>
                        </div>
                        <button onClick={handleSubmission}>Sign In</button>
                    </div>
                    <p style={{ marginTop: 30 }}>
                        Don't have an account ?{" "}
                        <span style={{ fontWeight: "bold" }}>
                            Sign up for free
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
