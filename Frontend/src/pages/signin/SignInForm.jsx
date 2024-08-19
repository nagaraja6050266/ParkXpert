import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import {
    StyledButton,
    FlexBox,
    StyledSpan,
    CenteredBox,
} from "../../components/styled-components/styledComponents";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backbutton from "../../assets/backArrow.png";
import FormBackButton from "../../components/FormBackButton";

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

    const handleSubmission = async (event) => {
        event.preventDefault();
        email = document.getElementById("email").value.trim();
        password = document.getElementById("password").value;
        if (!isFormFilled()) {
            return;
        }
        console.log(email, password);
        axios
            .post("http://localhost:5000/api/signin", { email, password })
            .then((res) => {
                console.log(res.status);
                navigate("/dashboard");
            })
            .catch((error) => {
                console.log(error);
                switch (error.response.data) {
                    case "Password doesnot Match":
                        setPasswordErrorMsg(error.response.data);
                        break;
                    case "Email ID not found":
                        setEmailErrorMsg(error.response.data);
                        break;
                }
            });
    };

    return (
        <CenteredBox width="100%" height="100%">
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
                    <StyledButton
                        variant="contained"
                        type="submit"
                        onClick={handleSubmission}
                        fullWidth
                    >
                        Sign In
                    </StyledButton>
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
        </CenteredBox>
    );
}

export default SignInForm;
