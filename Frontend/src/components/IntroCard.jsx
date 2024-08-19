import {StyledCard} from "./styled-components/styledComponents";
import AppNameComponent from "./styled-components/AppNameComponent";

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
