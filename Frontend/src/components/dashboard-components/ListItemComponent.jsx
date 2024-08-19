import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledListItemButton } from "../styled-components/styledComponents";

function ListItemComponent({
    index,
    selected,
    itemName,
    icon,
    handleFunction,
}) {
    return (
        <StyledListItemButton
            selected={selected === index}
            onClick={(event) => handleFunction(event, index)}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={itemName} />
        </StyledListItemButton>
    );
}

export default ListItemComponent;
