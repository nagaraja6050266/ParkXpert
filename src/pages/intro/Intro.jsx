import { useState } from "react";
import ban from "../../assets/ban.png";
import robot from "../../assets/robot.png";
import shield from "../../assets/shield.png";
import {
    CenteredBox,
    StyledCard,
    StyledMobileStepper,
    IconComponent,
    StyledButton,
} from "../../components/styled-components/styledComponents";
import AppNameComponent from "../../components/styled-components/AppNameComponent";
import nextButton from "../../assets/frontArrow.png";
import backButton from "../../assets/backArrow.png";
import { useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";

//Display Contents to pass to the Intro component
const iconsArray = [robot, ban, shield];
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
    const [arrayIndex, setArrayIndex] = useState(0);
    const navigate = useNavigate();

    const handleNextClick = (e) => {
        if (arrayIndex == 2) {
            navigate("/signin");
        }
        setArrayIndex((a) => a + 1);
    };
    const handleBackClick = (e) => {
        setArrayIndex((a) => a - 1);
    };

    return (
        <StyledCard>
            <AppNameComponent />
            <IconComponent
                component="img"
                height="80"
                image={iconsArray[arrayIndex]}
                alt="icon"
            />
            <h1 style={{ fontWeight: "bold", color: "black" }}>
                {mainContentArray[arrayIndex]}
            </h1>
            <CardContent
                style={{
                    color: "#5B738B",
                    fontSize: "12px",
                    textAlign: "center",
                    height: "40px",
                }}
            >
                {desciptionArray[arrayIndex]}
            </CardContent>
            <StyledMobileStepper
                variant="dots"
                steps={3}
                position="static"
                activeStep={arrayIndex}
                sx={{ maxWidth: 400, flexGrow: 1 }}
            />
            {arrayIndex ? (
                <StyledButton
                    startIcon={<img src={backButton} alt="backbutton" />}
                    style={{
                        position: "absolute",
                        bottom: "50px",
                        left: "30px",
                    }}
                    onClick={handleBackClick}
                    variant="outlined"
                >
                    Back
                </StyledButton>
            ) : (
                " "
            )}
            <StyledButton
                endIcon={<img src={nextButton} alt="nextbutton" />}
                style={{
                    position: "absolute",
                    bottom: "50px",
                    right: "30px",
                }}
                onClick={handleNextClick}
                variant="contained"
            >
                {arrayIndex == 2 ? "Get Started" : "Next"}
            </StyledButton>
        </StyledCard>
    );
}
export default Intro;
