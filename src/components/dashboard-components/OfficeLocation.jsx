import { useState } from "react";
import { Box, Typography, IconButton, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function OfficeLocation() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box width='100%' display="flex" alignItems="center" p={2}>
            <Box>
                <Typography variant="h7" component="div" fontWeight="bold">
                    Icanio Office
                </Typography>
                <Typography variant="body2" color="#8396A8" fontSize={12}>
                    Tirunelveli
                </Typography>
            </Box>
            <IconButton onClick={handleClick}>
                <ArrowDropDownIcon sx={{ color: "#0A2710", ml: 1 }} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Option 1</MenuItem>
                <MenuItem onClick={handleClose}>Option 2</MenuItem>
                <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
        </Box>
    );
}

export default OfficeLocation;
