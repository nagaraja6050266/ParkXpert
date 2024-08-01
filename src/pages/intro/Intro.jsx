import robot from "../../assets/robot.png";
import ban from "../../assets/ban.png";
import shield from "../../assets/shield.png";
import { useState } from "react";
import IntroCard from "../../components/IntroCard";
import backButton from "../../assets/backArrow.png";
import nextButton from "../../assets/frontArrow.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ThreeDot from "../../components/ThreeDot.jsx";
import CenteredBox from "../../components/styled-components/CenteredBox";
import StyledCard from "../../components/styled-components/StyledCard";
import AppNameComponent from "../../components/styled-components/AppNameComponent";

//Display Contents to pass to the Intro component
const iconsArray = [robot, ban, shield];
const iconsBgArray = ["#36A41D", "#FFB300", "#EE3939"];
const mainContentArray = [
    "Simply your Work",
    "Track Traffic Violations",
    "Secure your Building",
];
const desciptionArray = [
    "Our AI model will track all vehicles that enter your building. It will create a database of all the vehicles that comes in and out of your building.",
    "Our AI model will detect traffic violations like speeding, triples, no helmet.",
    "A database of pre registered people can be added and can weed out people who enter the premises in an unrecognized vehicle.",
];

function Intro() {
    <CenteredBox>
        <StyledCard>
            <AppNameComponent />
        </StyledCard>
    </CenteredBox>;
}
export default Intro;
