import React from "react";
import { Grid } from "@mui/material";
import AppNameComponent from "../../components/styled-components/AppNameComponent.jsx";
import SignUpForm from "./SignUpForm";
import { LeftSide,RightSide } from "../../components/styled-components/styledComponents";

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