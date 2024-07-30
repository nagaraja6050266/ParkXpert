import appIcon from "./assets/appIcon.png";
import ThreeDot from "./ThreeDot";

function IntroCard({ icon, iconBg, mainContent, desciption }) {
    return (
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
                <ThreeDot />
            </div>
    );
}

export default IntroCard;
