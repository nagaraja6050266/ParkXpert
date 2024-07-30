import robot from "./assets/robot.png";
import ban from "./assets/ban.png";
import shield from "./assets/shield.png";
import { useState } from "react";
import IntroCard from "./IntroCard";
import backButton from "./assets/backArrow.png";
import nextButton from "./assets/frontArrow.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import ThreeDot from "./ThreeDot.jsx";

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
    const navigate = useNavigate();
    const [arrayIndex, setArrayIndex] = useState(0);

    const handleBackButton = () => {
        document.getElementById(`${arrayIndex}`).classList.remove("active-dot");
        setArrayIndex((s) => s - 1);
        console.log("Array Index: ", arrayIndex);
        document.getElementById(`${arrayIndex-1}`).classList.add("active-dot");
    };

    const handleNextButton = () => {
        document.getElementById(`${arrayIndex}`).classList.remove("active-dot");
        console.log("Array Index: ", arrayIndex);
        setArrayIndex((s) => s + 1);
        document.getElementById(`${arrayIndex+1}`).classList.add("active-dot");
    };

    const redirectToLogin = () => {
        console.log("Array Index: ", arrayIndex);
        navigate("/signup");
    };

    return (
        <div className="intro-card-outer">
            <div className="intro-card-container">
                <IntroCard
                    icon={iconsArray[arrayIndex]}
                    iconBg={iconsBgArray[arrayIndex]}
                    mainContent={mainContentArray[arrayIndex]}
                    desciption={desciptionArray[arrayIndex]}
                />
                <ThreeDot />
                <div className="back-and-next">
                    {arrayIndex > 0 && (
                        <Button
                            className="back-button"
                            onClick={handleBackButton}
                            variant="outlined"
                            startIcon={
                                <img src={backButton} alt="backbutton" />
                            }
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        className="next-button"
                        onClick={
                            arrayIndex >= 2 ? redirectToLogin : handleNextButton
                        }
                        variant="contained"
                        endIcon={<img src={nextButton} alt="nextbutton" />}
                    >
                        {arrayIndex <= 1 ? "Next" : "Get Started"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Intro;
