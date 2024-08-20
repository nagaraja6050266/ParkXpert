import { Button, Typography } from "@mui/material";
import { Add, Edit, Visibility, Delete } from "@mui/icons-material";
import React from "react";
import { SquareButton } from "../styled-components/styledComponents";

function TableButton({ buttonType }) {
    let icon, content;

    switch (buttonType) {
        case "add":
            icon = <Add />;
            content = "Add Profile";
            break;
        case "edit":
            icon = <Edit />;
            content = "Edit Profile";
            break;
        case "view":
            icon = <Visibility />;
            content = "View Profile";
            break;
        case "delete":
            icon = <Delete />;
            content = null;
            break;
        default:
            icon = null;
            content = null;
            console.log("Invalid button type");
    }

    if (buttonType === "delete") {
        return (
            <SquareButton variant="outlined">
                <Delete />
            </SquareButton>
        );
    }

    return (
        <Button
            sx={{ p: "7px", width: "100%" }}
            variant="outlined"
            startIcon={icon}
        >
            <Typography fontSize={14}>{content}</Typography>
        </Button>
    );
}

export default TableButton;
