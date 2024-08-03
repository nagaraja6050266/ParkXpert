import styled from "styled-components";

const StyledSpan = styled.a`
    color: ${(props) =>
        props.color ? props.color : "#00205c"};
    text-decoration: ${(props) =>
        props.textDecoration ? props.textDecoration : "none"};
    font-weight: 600;
`;

export default StyledSpan;
