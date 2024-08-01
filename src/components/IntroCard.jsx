import appIcon from "../assets/appIcon.png";
import { Card, Box } from "@mui/material";
import AppNameComponent from "./styled-components/AppNameComponent";
import StyledCard from "./styled-components/StyledCard";

function IntroCard() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <StyledCard>
                <AppNameComponent />
            </StyledCard>
        </div>
    );
}

export default IntroCard;
/*
            <div className="intro-card">
                <div className="app-name-container">
                    <img src={appIcon} alt="appIcon" />
                    <h2 className="appName">ParkXpert</h2>
                </div>
                <div className="content-container">
                    <div
                        className="intro-icon-container"
                        style={{ backgroundColor: iconBg }}
                    >
                        <img src={icon} alt="icon" />
                    </div>
                    <h1>{mainContent}</h1>
                    <p>{desciption}</p>
                </div>
            </div>
*/
