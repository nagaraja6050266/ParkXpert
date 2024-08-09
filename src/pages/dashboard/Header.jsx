import { FlexBox } from "../../components/styled-components/styledComponents";
import OfficeLocation from "../../components/dashboard-components/OfficeLocation";
import DateAndTime from "../../components/dashboard-components/DateAndTime";
import UserProfile from "../../components/dashboard-components/UserProfile";

function Header() {
    return (
        <FlexBox height='fit-content' width='100%'>
            <OfficeLocation />
            <FlexBox justifyContent='flex-end'>
                <DateAndTime />
                <UserProfile />
            </FlexBox>
        </FlexBox>
    );
}

exp