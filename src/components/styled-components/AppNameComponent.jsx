import styled from 'styled-components';
import appIcon from '../../assets/appIcon.png';

const AppNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    align-items: center;
`;

const AppName = styled.h2`
    font-family: "Ubuntu";
    color: #00205c;
    height: 100%;
    font-style: italic;
    font-weight: 700;
    margin: 0px 5px;
`;


function AppNameComponent({height}) {
    return (
        <AppNameContainer>
            <img src={appIcon} style={{height: `${(height)?height:'27px'}`}} alt="appIcon" />
            <AppName style={{fontSize: `${height}`}}>ParkXpert</AppName>
        </AppNameContainer>
    );
}

export default AppNameComponent;