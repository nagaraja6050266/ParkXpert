import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabelInput from "../../components/styled-components/CustomLabelInput";
import {
    FlexBox,
    StyledButton,
    StyledSpan,
} from "../../components/styled-components/styledComponents";

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

function SignUpForm() {
    const navigate = useNavigate();
    const [emailErrorMsg, setEmailErrorMsg] = useState(" ");
    const [isChecked, setIsChecked] = useState(true);
    const [fullnameErrorMsg, setFullnameErrorMsg] = useState(" ");
    const [mobileErrorMsg, setMobileErrorMsg] = useState(" ");

    let fullname, email, mobileNumber;
    function isFormFilled() {
        fullname = document.getElementById("name").value.trim();
        email = document.getElementById("email").value.trim();
        mobileNumber = document.getElementById("mobile").value.trim();
        if (!fullname) {
            setFullnameErrorMsg("Full Name is Mandatory");
            return false;
        } else {
            setFullnameErrorMsg(" ");
        }
        if (!email) {
            setEmailErrorMsg("Email ID is mandatory");
            return false;
        } else {
            setEmailErrorMsg(" ");
        }
        if (!mobileNumber) {
            setMobileErrorMsg("Mobile number is mandatory");
            return false;
        } else {
            setMobileErrorMsg(" ");
        }
        if (!isChecked) {
            return false;
        }
        return true;
    }
    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        if (isFormFilled()) {
            let i = 0;
            while (i < Users.length && Users[i].email != email) {
                i++;
            }
            if (i == Users.length) {
                setEmailErrorMsg(" ");
            } else {
                setEmailErrorMsg("E-Mail already in use");
                return;
            }
            navigate("/set-password", {
                state: {
                    fullname: fullname,
                    email: email,
                    mobileNumber: mobileNumber,
                },
            });
        }
    };

    const handleCancel = () => {
        navigate("/signin");
    };

    return (
        <FlexBox
            flexDirection="column"
            width="65%"
            justifyContent="left"
            alignItems="flex-start"
        >
            <form action="">
                <Box pl={0}>
                    <Typography variant="h4" component="h1" fontWeight="bold">
                        Sign Up
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Enter your details below to create your account
                    </Typography>
                </Box>

                <Grid container width="100%">
                    <Grid item xs={12}>
                        <CustomLabelInput
                            labelName="Full Name"
                            inputType="text"
                            inputId="name"
                            placeHolder="Enter your Name"
                            value="name"
                            errMsg={fullnameErrorMsg}
                        />
                    </Grid>

                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Email"
                                inputType="email"
                                inputId="email"
                                placeHolder="Enter your Mail ID"
                                errMsg={emailErrorMsg}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomLabelInput
                                labelName="Mobile Number"
                                inputType="text"
                                inputId="mobile"
                                placeHolder="Enter your Mobile No."
                                errMsg={mobileErrorMsg}
                            />
                        </Grid>
                    </Grid>
                    <FlexBox
                        alignItems="center"
                        justifyContent="left"
                        width="100%"
                        mt={1}
                    >
                        <Checkbox
                            onChange={handleCheck}
                            size="small"
                            sx={{
                                "&.Mui-checked": {
                                    color: "#00205c",
                                },
                            }}
                            defaultChecked
                        />
                        <Typography
                            width="fit-content"
                            variant="body1"
                            color="#5B738B"
                            align="left"
                            fontSize={12}
                        >
                            I agree to the{" "}
                            <StyledSpan
                                href="/signup"
                                textDecoration="underline"
                                color="#5B738B"
                            >
                                Terms and Conditions
                            </StyledSpan>
                        </Typography>
                    </FlexBox>
                </Grid>

                <FlexBox flexDirection="column" width="100%" mt={5}>
                    <FlexBox gap="20px">
                        <StyledButton
                            variant="outlined"
                            fullWidth
                            onClick={handleCancel}
                        >
                            Cancel
                        </StyledButton>
                        <StyledButton
                            variant="contained"
                            type="submit"
                            fullWidth
                            onClick={handleSignUp}
                        >
                            Sign Up
                        </StyledButton>
                    </FlexBox>
                    <Typography
                        variant="body1"
                        color="#5B738B"
                        mt={4}
                        align="center"
                        fontSize={12}
                    >
                        Already have an account ?{" "}
                        <StyledSpan href="/signin">Login</StyledSpan>
                    </Typography>
                </FlexBox>
            </form>
        </FlexBox>
    );
}
export default SignUpForm;
