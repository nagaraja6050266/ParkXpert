import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import {
    StyledContainedButton,
    FlexBox,
    StyledSpan,
} from "../../components/styled-components/styledComponents";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { useNavigate } from "react-router-dom";
import e from "cors";

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
    let email, password, i;
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState(" ");


    const isFormFilled = () => {
        console.log(email, password);
        if (!email) {
            setEmailErrorMsg("Email is Mandatory");
            return false;
        } else {
            setEmailErrorMsg(" ");
        }
        if (!password) {
            setPasswordErrorMsg("Password is Mandatory");
            return false;
        } else {
            setPasswordErrorMsg(" ");
        }
        return true;
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        email = document.getElementById("email").value.trim();
        password = document.getElementById("password").value.trim();
        if (!isFormFilled()) {
            return;
        }
        for (i = 0; i < Users.length; i++) {
            if (Users[i].email === email) {
                setEmailErrorMsg(" ");
                if (Users[i].password === password) {
                    setPasswordErrorMsg(" ");
                    return;
                } else {
                    setPasswordErrorMsg("Invalid Password");
                    return;
                }
            }
        }
        setEmailErrorMsg("Invalid Email");
    };

    return (
        <form>
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
                    <StyledSpan href="/forgot-password">
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
        </form>
    );
}

export default SignInForm;
