import SignInForm from "../pages/signin/SignInForm";
import SignUpForm from "../pages/signup/SignUpForm";
import PasswordForm from "../pages/password/passwordForm";
import { RightSide, LeftSide,StyledButton } from "./styled-components/styledComponents";
import AppNameComponent from "./styled-components/AppNameComponent";
import { Grid } from "@mui/material";
import OtpForm from "../pages/password/otpForm";
import backbutton from "../assets/backArrow.png";
import { useNavigate } from "react-router-dom";
import bgImage from '../assets/background.png'

function IndexTemplate({ page }) {
    const navigate=useNavigate();

    const handleBackClick = () => {
        switch(page){
            case 'set-password':
                navigate('/signup');
                break;
            default:
                navigate('/signin');
        }
    }

    return (
        <Grid container sx={{backgroundImage: bgImage}}>
            <Grid sx={{ backgroundImage: `url(${bgImage})` }} item xs={12} md={6}>
                <LeftSide>
                    <AppNameComponent mt="10vh" height="40px" color="white" />
                </LeftSide>
            </Grid>
            <Grid item xs={12} md={6}>
                <RightSide flexDirection='column'>
                    {page != "signin" && page != "signup" ? (
                        <StyledButton
                            startIcon={
                                <img src={backbutton} alt="backbutton" />
                            }
                            sx={{
                                position: "absolute",
                                top: "5vh",
                                right: "40%"
                            }}
                            onClick={handleBackClick}
                            variant="outlined"
                        >
                            Back
                        </StyledButton>
                    ) : (
                        ""
                    )}
                    {page === "signin" ? (
                        <SignInForm />
                    ) : page === "signup" ? (
                        <SignUpForm />
                    ) : page === "set-password" ? (
                        <PasswordForm page="set-password" />
                    ) : page === "reset-password" ? (
                        <PasswordForm page="reset-password" />
                    ) : page === "otp" ? (
                        <OtpForm />
                    ) : <PasswordForm page='forgot-password'/>}
                </RightSide>
            </Grid>
        </Grid>
    );
}

export default IndexTemplate;