import { Container, Typography } from "@mui/material";
import {
    StyledButton,
    StyledSpan,
    CustomLabel,
    FlexBox,
    CenteredBox,
} from "../../components/styled-components/styledComponents";
import OTPinputs from "../../components/OTPinputs";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import FormBackButton from "../../components/FormBackButton";

function OtpForm({ otpLength }) {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state.email;

    const handleOTPVerification = () => {
        var otp = "";
        for (let i = 1; i <= otpLength; i++) {
            otp += document.getElementById("otp" + i).value;
        }
        console.log(otp);
        axios
            .post("http://localhost:5000/api/verify-otp", { email, otp })
            .then((res) => {
                alert("OTP Verified");
                navigate("/reset-password",{state:{email:email}});
            })
            .catch((error) => {
                alert("Invalid OTP");
                navigate("/forget-passoword");
            });
    };

    return (
        <CenteredBox width='100%' height='100%'>
            <FormBackButton />
        <FlexBox flexDirection="column" width="60%" justifyContent="center">
            <Container>
                <Typography
                    variant="h4"
                    component="h1"
                    fontWeight="bold"
                    align="center"
                >
                    Enter OTP
                </Typography>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    mb={3}
                    align="center"
                >
                    An OTP has been sent to the Email <b>{email}</b>{" "}
                    <StyledSpan href="/signin">Edit</StyledSpan>
                </Typography>
            </Container>
            <FlexBox gap={4} flexDirection="column">
                <FlexBox gap={2} flexDirection="column" padding={2}>
                    <CustomLabel>Enter OTP</CustomLabel>
                    <OTPinputs length={otpLength} />
                </FlexBox>
                <StyledButton
                    variant="contained"
                    onClick={handleOTPVerification}
                    fullWidth
                >
                    Verify
                </StyledButton>
            </FlexBox>
        </FlexBox>
        </CenteredBox>
    );
}
export default OtpForm;
