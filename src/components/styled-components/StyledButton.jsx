import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledContainedButton = styled(Button)`
    &.MuiButton-contained {
        background-color: rgb(0, 32, 92);
        color: white;

        &:hover {
            background-color: rgba(0, 32, 92, 0.8);
        }
    }
`;

const StyledOutlinedButton = styled(Button)`
    &.MuiButton-outlined {
        border-color: rgb(0, 32, 92);
        color: rgb(0, 32, 92);

        &:hover {
            background-color: rgba(0, 32, 92, 0.1);
            border-color: rgb(0, 32, 92);
        }
    }
`;

export { StyledContainedButton, StyledOutlinedButton };
