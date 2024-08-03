import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledContainedButton,FlexBox,StyledSpan } from "../../components/styled-components/styledComponents";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";

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

function SignInForm() {
    const navigate = useNavigate();
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");

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

    return (
        <Box>
            <Container>
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight="bold"
                    align="center"
                >
                    Welcome Back!
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={3}
                    align="center"
                >
                    Sign-in to your account
                </Typography>
            </Container>

            <CustomLabelInput
                labelName="Email"
                inputType="email"
                inputId="email"
                placeHolder="Enter your Mail ID"
                errMsg={emailErrorMsg}
            />
            <CustomLabelInput
                labelName="Password"
                inputType="password"
                inputId="password"
                placeHolder="Enter your password"
                errMsg={passwordErrorMsg}
            />
            <FlexBox flexDirection="column">
                <Typography
                    variant="body1"
                    color="#5B738B"
                    fontSize={12}
                    mb={2}
                    mt={1}
                    align="center"
                >
                    Forgot password ?{" "}
                    <StyledSpan href="#" onClick={handleResetPassword}>
                        Reset Password
                    </StyledSpan>
                </Typography>
                <StyledContainedButton
                    variant="contained"
                    type="submit"
                    onClick={handleSubmission}
                    fullWidth
                >
                    Sign In
                </StyledContainedButton>
                <Typography
                    variant="body1"
                    color="#5B738B"
                    mt={4}
                    align="center"
                    fontSize={12}
                >
                    Don't have an account ?{" "}
                    <StyledSpan href="/signup">Sign up for free</StyledSpan>
                </Typography>
            </FlexBox>
        </Box>
    );
}

export default SignInForm;
