import { StyledButton } from "./styled-components/styledComponents";
import backbutton from "../assets/backArrow.png";

export default function FormBackButton() {
    return (
        <StyledButton
            startIcon={<img src={backbutton} alt="backbutton" />}
            sx={{
                position: "absolute",
                top: "5vh",
                right: "40%",
            }}
            variant="outlined"
        >
            Back
        </StyledButton>
    );
}
