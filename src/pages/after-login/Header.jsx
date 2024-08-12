import { FlexBox } from "../../components/styled-components/styledComponents";
import OfficeLocation from "../../components/dashboard-components/OfficeLocation";
import DateAndTime from "../../components/dashboard-components/DateAndTime";
import UserProfile from "../../components/dashboard-components/UserProfile";

function Header() {
    return (
        <FlexBox pt={1} pb={1} height='fit-content' width='100%'>
            <OfficeLocation />
            <FlexBox alignItems='center' gap={2} justifyContent='flex-end'>
                <DateAndTime />
                <UserProfile />
            </FlexBox>
        </FlexBox>
    );
}

export default Header;
