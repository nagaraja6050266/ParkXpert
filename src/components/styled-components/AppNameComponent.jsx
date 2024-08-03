import styled from "styled-components";
import appIcon from "../../assets/appIcon.png";

const AppNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${(props) => (props.$mt ? props.$mt : "0")};
    margin-left: ${(props) => (props.$ml ? props.$ml : "0")};
    margin-right: ${(props) => (props.$mr ? props.$mr : "0")};
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
`;

const AppName = styled.h2`
    font-family: "Ubuntu";
    color: ${(props) => (props.$color ? props.$color : "#00205c")};
    height: 100%;
    font-style: italic;
    font-weight: 700;
    margin: 0px 5px;
    font-size: ${(props) => (props.$fontSize ? props.$fontSize : "20px")};
`;

function AppNameComponent({ height, color, mt, ml, mr }) {
    return (
        <AppNameContainer $mt={mt} $ml={ml} $mr={mr}>
            <img
                src={appIcon}
                style={{ height: `${height ? height : "25px"}` }}
                alt="appIcon"
            />
            <AppName $color={color} $fontSize={height ? height : "20px"}>
                ParkXpert
            </AppName>
        </AppNameContainer>
    );
}

export default AppNameComponent;