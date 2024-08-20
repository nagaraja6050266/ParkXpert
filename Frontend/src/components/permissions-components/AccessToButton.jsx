import { FlexBox, StyledButton } from "../styled-components/styledComponents";
import { Close } from "@mui/icons-material";

export default function AccessToButton({ contentArray }) {
    return (
        <FlexBox>
            {contentArray.map((c, i) => (
                <StyledButton key={i} endIcon={<Close />} variant="outlined">
                    {c}
                </StyledButton>
            ))}
        </FlexBox>
    );
}
