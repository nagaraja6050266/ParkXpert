import { Container, Typography } from "@mui/material";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { StyledContainedButton } from "../../components/styled-components/styledComponents";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PasswordForm({ page }) {
    const navigate = useNavigate();
    const [confirmPasswordErrMsg, setConfirmPasswordErrMsg] = useState(" ");

    const handleSubmission = (event) => {
        event.preventDefault();
        let enteredPassword = document.getElementById("enteredPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        if (enteredPassword === confirmPassword) {
            setConfirmPasswordErrMsg(" ");
            navigate("/signin");
            return;
        }
        setConfirmPasswordErrMsg("Password doesnt Match");
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
                    {page === "set-password"
                        ? "Set Password"
                        : page === "reset-password"
                        ? "Reset Password"
                        : "Forgot Password"}
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={3}
                    align="center"
                >
                    {page === "set-password"
                        ? "Set your Password"
                        : page === "reset-password"
                        ? "Set your New Password"
                        : "Enter Mobile No. to get OTP"}
                </Typography>
            </Container>

            {page != "forgot-password" ? (
                <CustomLabelInput
                    labelName={
                        page === "forgot-password" ? "New Password" : "Password"
                    }
                    inputType="password"
                    inputId="enteredPassword"
                    placeHolder="Enter your Password"
                    errMsg=" "
                />
            ) : (
                ""
            )}
            {page != "forgot-password" ? (
                <CustomLabelInput
                    labelName="Confirm Password"
                    inputType="password"
                    inputId="confirmPassword"
                    placeHolder="Confirm your password"
                    errMsg={confirmPasswordErrMsg}
                />
            ) : (
                ""
            )}
            {page === "forgot-password" ? (
                <CustomLabelInput
                    labelName="Email"
                    inputType="email"
                    inputId="email"
                    placeHolder="Enter your Email"
                    errMsg=" "
                />
            ) : (
                ""
            )}
            <StyledContainedButton
                sx={{ marginTop: "40px" }}
                variant="contained"
                type="submit"
                onClick={page!='forgot-password'?handleSubmission:navigateToOtp}
                fullWidth
            >
                Get Started
            </StyledContainedButton>
        </form>
    );
}

export default PasswordForm;
