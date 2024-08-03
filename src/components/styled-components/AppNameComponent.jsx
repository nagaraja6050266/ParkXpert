import {AppNameContainer,AppName} from '../styled-components/styledComponents'
import appIcon from "../../assets/appIcon.png";


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