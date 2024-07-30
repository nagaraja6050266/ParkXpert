import { useState } from "react";
import appIcon from "./assets/appIcon.png";
import { useNavigate } from "react-router-dom";

const Users = [
    {
        email: "nagaraja@gmail.com",
        password: "12345678",
    },
];

function SignIn() {
    const navigate=useNavigate();
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");

    const handleResetPassword = () => {
        //Reset
    }

    const handleSignUp = () => {
        navigate('/signup');
    }

    const handleSubmission = (e) => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        for (let i=0;i<Users.length;i++) {
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
                console.log("email",Users[i].email,"given: ",email);
            }
        }
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
                        <div className="label-and-input">
                            <label htmlFor="email-id">Email ID</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your Email ID"
                            />
                            <label style={{color: 'red'}} htmlFor="email-id">{emailErrorMsg}</label>
                        </div>
                        <div className="label-and-input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                id="password"
                            />
                            <label htmlFor="" style={{color: 'red'}}>{passwordErrorMsg}</label>
                        </div>
                        <div className="forgot-option">
                            <p>
                                Forgot password ?{" "}
                                <span onClick={handleResetPassword} style={{ fontWeight: "bold", cursor: "pointer" }}>
                                    Reset Password
                                </span>
                            </p>
                        </div>
                        <button onClick={handleSubmission}>Sign In</button>
                    </div>
                    <p style={{ marginTop: 30 }}>
                        Don't have an account ?{" "}
                        <span onClick={handleSignUp} style={{ fontWeight: "bold", cursor: "pointer" }}>
                            Sign up for free
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default SignIn;
