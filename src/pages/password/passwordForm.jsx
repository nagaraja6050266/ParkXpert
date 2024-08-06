import { Container, Typography } from "@mui/material";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { StyledContainedButton } from "../../components/styled-components/styledComponents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState(" ");
    const config = formConfig[page];

    const handleSubmission = (event) => {
        event.preventDefault();
        let enteredPassword = document.getElementById("enteredPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        if (enteredPassword === confirmPassword) {
            setConfirmPasswordErrMsg(" ");
            navigate("/signin");
            return;
        }
        setConfirmPasswordErrMsg("Password doesn't Match");
    };

    const navigateToOtp = (event) =>{
        event.preventDefault();
        navigate('/otp');
    }

    return (
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
            <StyledContainedButton
                sx={{ marginTop: "40px" }}
                variant="contained"
                type="submit"
                onClick={config.showEmail ? navigateToOtp : handleSubmission}
                fullWidth
            >
                Get Started
            </StyledContainedButton>
        </form>
    );
}

export default PasswordForm;