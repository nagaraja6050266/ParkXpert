import { Search } from "@mui/icons-material";
import { InputBase } from "@mui/material";
import { FlexBox } from "../styled-components/styledComponents";

function SearchBar() {
    return (
        <FlexBox
            width="100%"
            sx={{
                p: "3px 7px",
                ml: 1,
                bgcolor: "#EAECEE",
                borderRadius: "10px",
            }}
        >
            <Search sx={{ color: "#5B738B" }} />
            <InputBase sx={{ ml: 1, flex: 1, fontSize: "13px" }} placeholder="Search People" />
        </FlexBox>
    );
}

export default SearchBar;
