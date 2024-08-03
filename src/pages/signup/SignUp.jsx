import React from "react";
import { Box, Grid } from "@mui/material";
import AppNameComponent from "../../components/styled-components/AppNameComponent";
import styled from "@emotion/styled";
import SignUpForm from "./SignUpForm";

const LeftSide = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: white;
`;

const RightSide = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 100vh;
`;

function SignUp() {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <LeftSide>
                    <AppNameComponent mt='10vh' height="40px" color="white" />
                </LeftSide>
            </Grid>
            <Grid item xs={12} md={6}>
                <RightSide>
                    <SignUpForm/>
                </RightSide>
            </Grid>
        </Grid>
    );
};

export default SignUp;