import { Container, Typography } from "@mui/material";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { CenteredBox, StyledButton } from "../../components/styled-components/styledComponents";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import FormBackButton from "../../components/FormBackButton";

const formConfig = {
    "set-password": {
        title: "Set Password",
        subtitle: "Set your Password",
        showPassword: true,
        showConfirmPassword: true,
        showEmail: false,
    },
    "reset-password": {
        title: "Reset Password",
        subtitle: "Set your New Password",
        showPassword: true,
        showConfirmPassword: true,
        showEmail: false,
    },
    "forgot-password": {
        title: "Forgot Password",
        subtitle: "Enter Mobile No. to get OTP",
        showPassword: false,
        showConfirmPassword: false,
        showEmail: true,
    },
};

function PasswordForm({ page }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState(" ");
    const config = formConfig[page];

    const handleSubmission = async (event) => {
        event.preventDefault();
        let enteredPassword = document.getElementById("enteredPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        if (enteredPassword === confirmPassword) {
            setConfirmPasswordErrMsg(" ");
            if (page == "set-password") {
                storeUserDetails(confirmPassword);
            } else {
                resetPassword(confirmPassword);
            }
            return;
        }
        setConfirmPasswordErrMsg("Password doesn't Match");
    };

    const storeUserDetails = async (password) => {
        let userDetails = location.state || {};
        userDetails["password"] = password;
        try {
            axios
                .post("http://localhost:5000/api/signup", { ...userDetails })
                .then((res) => {
                    console.log("Success", res);
                    navigate("/signin");
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const navigateToOtp = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();

        axios
            .post("http://localhost:5000/api/generate-otp", { email })
            .then((res) => {
                console.log(res);
                navigate("/otp", { state: { email: email } });
            })
            .catch((error) => {
                console.log("Mail Id ", error.message);
                alert("Email id not found");
            });
    };

    const resetPassword = (newPassword) => {
        const email = location.state.email;
        axios
            .put("http://localhost:5000/api/reset-password", {
                email,
                newPassword,
            })
            .then((res) => {
                console.log("password updated successfully", res);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.log("Error resetting password", error);
            });
    };

    return (
        <CenteredBox height='100%' width='100%'>
            <FormBackButton />
        <form>
            <Container>
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight="bold"
                    align="center"
                >
                    {config.title}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={3}
                    align="center"
                >
                    {config.subtitle}
                </Typography>
            </Container>

            {config.showPassword && (
                <CustomLabelInput
                    labelName="Password"
                    inputType="password"
                    inputId="enteredPassword"
                    placeHolder="Enter your Password"
                    errMsg=" "
                />
            )}
            {config.showConfirmPassword && (
                <CustomLabelInput
                    labelName="Confirm Password"
                    inputType="password"
                    inputId="confirmPassword"
                    placeHolder="Confirm your password"
                    errMsg={confirmPasswordErrMsg}
                />
            )}
            {config.showEmail && (
                <CustomLabelInput
                    labelName="Email"
                    inputType="email"
                    inputId="email"
                    placeHolder="Enter your Email"
                    errMsg=" "
                />
            )}
            <StyledButton
                sx={{ marginTop: "40px" }}
                variant="contained"
                type="submit"
                onClick={config.showEmail ? navigateToOtp : handleSubmission}
                fullWidth
            >
                Get Started
            </StyledButton>
        </form>
        </CenteredBox>
    );
}

export default PasswordForm;
