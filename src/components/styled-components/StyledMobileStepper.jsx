import { MobileStepper } from "@mui/material";
import styled from "@emotion/styled";

const StyledMobileStepper = styled(MobileStepper)`
background-color: transparent;
  .MuiMobileStepper-dot {
    margin: 0 5px; 
  }
  .MuiMobileStepper-dotActive {
    background-color: rgb(0, 32, 92); 
  }
`;

export default StyledMobileStepper;
