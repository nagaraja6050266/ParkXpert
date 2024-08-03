import { Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
    border-radius: 10px;
    height: 40px;

    font-size: 12px;
`;

const StyledContainedButton = styled(StyledButton)`
    &.MuiButton-contained {
        background-color: rgb(0, 32, 92);
        color: white;

        &:hover {
            background-color: rgba(0, 32, 92, 0.8);
        }
    }
`;

const StyledOutlinedButton = styled(StyledButton)`
    box-shadow: 0px 2px 4px 0px #0000001a;

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
