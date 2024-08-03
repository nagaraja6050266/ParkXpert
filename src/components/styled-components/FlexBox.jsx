import CenteredBox from "./CenteredBox";
import styled from "@emotion/styled";

const FlexBox = styled(CenteredBox)`
    flex-direction: ${({ flexDirection }) =>
        flexDirection ? flexDirection : "row"};
    width: ${({ width }) => (width ? width : "100%")};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : "left")};
    
`;

export default FlexBox;