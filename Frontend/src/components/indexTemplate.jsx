import SignInForm from "../pages/signin/SignInForm";
import SignUpForm from "../pages/signup/SignUpForm";
import PasswordForm from "../pages/password/passwordForm";
import {
    RightSide,
    LeftSide,
    StyledButton,
} from "./styled-components/styledComponents";
import AppNameComponent from "./styled-components/AppNameComponent";
import { Grid } from "@mui/material";
import OtpForm from "../pages/password/otpForm";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/background.png";
import { Outlet } from "react-router-dom";

function IndexTemplate({ page }) {
    const navigate = useNavigate();


    return (
        <Grid container sx={{ backgroundImage: bgImage }}>
            <Grid
                sx={{ backgroundImage: `url(${bgImage})` }}
                item
                xs={12}
                md={6}
            >
                <LeftSide>
                    <AppNameComponent mt="10vh" height="40px" color="white" />
                </LeftSide>
            </Grid>
            <Grid item xs={12} md={6}>
                <RightSide flexDirection="column">
                    <Outlet/>
                </RightSide>
            </Grid>
        </Grid>
    );
}

export default IndexTemplate;


