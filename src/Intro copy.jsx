import { useState } from "react";
import IntroCard from "./components/IntroCard";
import { useNavigate } from "react-router-dom";
import { MobileStepper, Button, Box, Paper } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import robot from "./assets/robot.png";
import ban from "./assets/ban.png";
import shield from "./assets/shield.png";

const iconsArray = [robot, ban, shield];
const iconsBgArray = ["#36A41D", "#FFB300", "#EE3939"];
const mainContentArray = [
    "Simplify your Work",    "Track Traffic Violations",
    "Secure your Building",
];
const descriptionArray = [
    "Our AI model will track all vehicles that enter your building. It will create a database of all the vehicles that come in and out of your building.",
    "Our AI model will detect traffic violations like speeding, triples, no helmet.",
    "A database of pre-registered people can be added and can weed out people who enter the premises in an unrecognized vehicle.",
];

function Intro() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = iconsArray.length;

    const handleStepChange = (index) => {
        setActiveStep(index);
    };

    return (
        <div className="intro-card-outer">
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: "background.default",
                    }}
                >
                    <h2>
                        Step {activeStep + 1} of {maxSteps}
                    </h2>
                </Paper>
                <Carousel
                    selectedItem={activeStep}
                    onChange={handleStepChange}
                    showThumbs={false}
                    showStatus={false}
                >
                    {iconsArray.map((icon, index) => (
                        <div key={index}>
                            <IntroCard
                                icon={icon}
                                iconBg={iconsBgArray[index]}
                                mainContent={mainContentArray[index]}
                                description={descriptionArray[index]}
                            />
                        </div>
                    ))}
                </Carousel>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={() =>
                                handleStepChange((activeStep + 1) % maxSteps)
                            }
                        >
                            Next
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={() =>
                                handleStepChange(
                                    (activeStep - 1 + maxSteps) % maxSteps
                                )
                            }
                        >
                            <KeyboardArrowLeft />
                            Back
                        </Button>
                    }
                />
            </Box>
        </div>
    );
}

export default Intro;
