import Styled from "styled-components";
import {
    Box,
    CardMedia,
    CardContent,
    Card,
    Button,
    MobileStepper,
} from "@mui/material";
import styled from "@emotion/styled";
import '@fontsource/assistant'


//AppName and Logo Component
const AppNameContainer = Styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => (props.$mt ? props.$mt : "0")};
    margin-left: ${(props) => (props.$ml ? props.$ml : "0")};
    margin-right: ${(props) => (props.$mr ? props.$mr : "0")};
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`;

const AppName = Styled.h2`
    font-family: "Ubuntu";
    color: ${(props) => (props.$color ? props.$color : "#00205c")};
    height: 100%;
    font-style: italic;
    font-weight: 700;
    margin: 0px 5px;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "20px")};
`;

//Styled Box to contain a centered align div
const CenteredBox = styled(Box)`
    display: flex;
    justify-content: center;
`;

const CustomLabel = Styled.label`
    color: #223548;
    font-weight: 600;
    font-size: 12px;
`;

//Custom Input and Label Container

const CustomInput = Styled.input`
    width: ${(props) => (props.type === "otp" ? "60px" : "inherit")};
    height: ${(props) => (props.type === "otp" ? "60px" : "35px")} ;
    border-radius: 5px;
    border: solid 1px #D5DADD;
    background-color: #EAECEE;
    padding-left: ${(props) => (props.type === "otp" ? "0" : "10px")};
    ${(props) => (props.type === "otp" ? "color: #475E75;" : "")}
    ${(props) => (props.type === "otp" ? "font-size: 30px;" : "")}
    ${(props) => (props.type === "otp" ? "font-family: Assistant;" : "")}
    ${(props) => (props.type === "otp" ? "font-weight: bold;" : "")}
    ${(props) => (props.type === "otp" ? "text-align: center;" : "")}
    &:focus{
        border: solid 1px ${(props) =>
            props.type === "otp" ? "#2671FF" : "#00205c"};
        outline: none;
        background-color: ${(props) =>
            props.type === "otp" ? "#C9DCFF" : "#EAECEE"};
    }
`;

const CustomLabelInputContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 5px;
    font-size: 12px;
`;

//FlexBox
const FlexBox = styled(CenteredBox)`
    flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "row"};
    width: ${({ width }) => (width ? width : "100%")};
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : "left"};
`;

//Icon Container for intro page
const IconComponent = styled(CardMedia)`
    width: auto;
`;

const IntroHeadingCardContent = styled(CardContent)`
    font-weight: 700px;
`;

//Password input to hold the eye icon
const PasswordContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    button {
        position: absolute;
        background-color: transparent;
        color: #5b738b;
        max-width: 50px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const StyledButton = styled(Button)`
    border-radius: 10px;
    height: 40px;
    font-size: 12px;
`;

const StyledContainedButton = styled(StyledButton)`
    &.MuiButton-contained {
        background-color: rgb(0, 32, 92);
        color: white;

        &:hover {
            background-color: rgba(0, 32, 92, 0.8);
        }
    }
`;

const StyledOutlinedButton = styled(StyledButton)`
    box-shadow: 0px 2px 4px 0px #0000001a;

    &.MuiButton-outlined {
        border-color: rgb(0, 32, 92);
        color: rgb(0, 32, 92);

        &:hover {
            background-color: rgba(0, 32, 92, 0.1);
            border-color: rgb(0, 32, 92);
        }
    }
`;

//Card
const StyledCard = styled(Card)`
    background-color: white;
    width: 40%;
    height: 440px;
    margin: 35px 0px;
    border-radius: 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

//Stepper 3 dots for intro

const StyledMobileStepper = styled(MobileStepper)`
    background-color: transparent;
    .MuiMobileStepper-dot {
        margin: 0 5px;
    }
    .MuiMobileStepper-dotActive {
        background-color: rgb(0, 32, 92);
    }
`;

const StyledSpan = styled.a`
    color: ${(props) => (props.color ? props.color : "#00205c")};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "none"};
    font-weight: 600;
`;

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

export {
    AppName,
    AppNameContainer,
    CenteredBox,
    CustomLabelInputContainer,
    CustomInput,
    CustomLabel,
    FlexBox,
    IconComponent,
    IntroHeadingCardContent,
    PasswordContainer,
    StyledContainedButton,
    StyledOutlinedButton,
    StyledCard,
    StyledMobileStepper,
    StyledSpan,
    LeftSide,
    RightSide,
};
