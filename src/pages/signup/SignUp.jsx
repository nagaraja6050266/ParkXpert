import { useState } from "react";
import appIcon from "../../assets/appIcon.png";
import LabelAndInput from "../../components/LabelAndInput";
import { useNavigate } from "react-router-dom";

const Users = [
    {
        email: "nagaraja@gmail.com",
        password: "12345678",
    },
    {
        email: "alagu@gmail.com",
        password: "12345678",
    },
];

function SignUp() {
    const navigate = useNavigate();
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [isChecked, setIsChecked] = useState(false);
    const [fullnameErrorMsg, setFullnameErrorMsg] = useState(" ");
    const [mobileErrorMsg, setMobileErrorMsg] = useState(" ");
    const [chkBoxErrorMsg, setChkBoxErrorMsg] = useState(" ");

    let fullname,email, mobile;
    function isFormFilled() {
        try{
            fullname=document.getElementById("name").value.trim();
            console.log("Name found: ",fullname);
            setFullnameErrorMsg(" ");
        }
        catch{
            console.log("Name not found");
            setFullnameErrorMsg("Name is Mandatory");
            return false;
        }
        try {
            email = document.getElementById("email").value.trim();
            console.log("Email found ", email);
            setEmailErrorMsg(" ");
        } catch {
            console.log("Email not found");
            setEmailErrorMsg("Email ID is Mandatory");
            return false;
        }
        try {
            mobile = document.getElementById("mobile").value.trim();
            console.log("Mobile not found");
            setEmailErrorMsg(" ");
        } catch {
            setMobileErrorMsg("Mobile Number is Mandatory");
            console.log("Mobile not found");
            return false;
        }
        setEmailErrorMsg(" ");
        setMobileErrorMsg(" ");
        if (isChecked) {
            return true;
        } else {
            setChkBoxErrorMsg("Agree the Terms");
        }

        return false;
    }
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleSignUp = () => {
        console.log(email, mobile);
        if (isFormFilled()) {
            let i = 0;
            while (i < Users.length && Users[i].email != email) {
                i++;
            }
            if (i == Users.length) {
                setEmailErrorMsg(" ");
            } else {
                setEmailErrorMsg("E-Mail already in use");
            }
        }
    };

    const handleCancel = () => {
        navigate("/signin");
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
                            value='name'
                            errMsg={fullnameErrorMsg}
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
                                errMsg={emailErrorMsg}
                            />
                            <LabelAndInput
                                labelName="Mobile Number"
                                inputType="text"
                                inputId="number"
                                placeHolder="Enter your Mobile No."
                                errMsg={mobileErrorMsg}
                            />
                        </div>
                    </div>
                    <div className="forgot-option" style={{ display: "flex" }}>
                        <input
                            type="checkbox"
                            name="agree"
                            id="agree"
                            checked={isChecked}
                            onChange={handleCheck}
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
                    <div className="label-and-input">
                        <label htmlFor="">{chkBoxErrorMsg}</label>
                    </div>
                    <div className="cancel-or-signin">
                        <button className="back-button" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button className="next-button" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <p
                            style={{
                                marginTop: 30,
                                color: "#5B738B",
                                textAlign: "center",
                            }}
                        >
                            Already have an account ?{" "}
                            <a
                                href="/signin"
                                onClick={handleLogin}
                                style={{
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    color: "#00205c",
                                }}
                            >
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SignUp;
