import { Container, Typography } from "@mui/material";
import {
    StyledButton,
    StyledSpan,
    CustomLabel,
    FlexBox,
} from "../../components/styled-components/styledComponents";
import OTPinputs from "../../components/OTPinputs";
import { useNavigate } from "react-router-dom";

function OtpForm({ email }) {

    const navigate = useNavigate();

    const handleOTPVerification = () => {
        navigate('/reset-password');
    }

    return (
        <FlexBox flexDirection='column' width='60%' justifyContent='center'>
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
            <FlexBox gap={4} flexDirection='column'>
                <FlexBox gap={2} flexDirection="column" padding={2}>
                    <CustomLabel>Enter OTP</CustomLabel>
                    <OTPinputs length="4" />
                </FlexBox>
                <StyledButton variant="contained" onClick={handleOTPVerification} fullWidth>
                    Verify
                </StyledButton>
            </FlexBox>
        </FlexBox>
    );
}
export default OtpForm;
