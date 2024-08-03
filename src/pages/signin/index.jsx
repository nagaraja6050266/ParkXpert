import React from "react";
import { Box, Grid } from "@mui/material";
import SignInForm from "./SignInForm";
import AppNameComponent from "../../components/styled-components/AppNameComponent.jsx";
import { LeftSide,RightSide } from "../../components/styled-components/styledComponents";

function SignIn(){
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <LeftSide>
                    <AppNameComponent mt='10vh' height="40px" color="white" />
                </LeftSide>
            </Grid>
            <Grid item xs={12} md={6}>
                <RightSide>
                    <SignInForm />
                </RightSide>
            </Grid>
        </Grid>
    );
};

export default SignIn;
