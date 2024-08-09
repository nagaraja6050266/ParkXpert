import { FlexBox } from "../styled-components/styledComponents";
import { Typography } from "@mui/material";
import userProfile from "../../assets/userProfile.png";
function UserProfile() {
    return (
        <FlexBox width={130} height={40} m={2} flexDirection="row" gap={1}>
            <FlexBox flexDirection="column">
                <Typography fontWeight={600} fontSize={15}>
                    UserName
                </Typography>
                <Typography variant="body2" fontSize={10} color="#5B738B">
                    UserType
                </Typography>
            </FlexBox>
            <img width="auto" height="100%" src={userProfile} alt="profile" />
        </FlexBox>
    );
}

export default UserProfile;
