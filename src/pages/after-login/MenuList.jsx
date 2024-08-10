import React, { useState } from "react";
import { Box, Divider, List } from "@mui/material";
import ListItemComponent from "../../components/dashboard-components/ListItemComponent";
import {
    BarChartRounded,
    DashboardRounded,
    LockRounded,
    Person,
    Settings,
} from "@mui/icons-material";

const MenuItems = [
    { itemName: "Dashboard", icon: <DashboardRounded /> },
    { itemName: "People", icon: <Person /> },
    { itemName: "Analytics", icon: <BarChartRounded /> },
    { itemName: "Permissions", icon: <LockRounded /> },
    { itemName: "Settings", icon: <Settings /> },
];

export default function MenuList() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box>
            <List component="nav" aria-label="main mailbox folders">
                {MenuItems.map((m, i) => (
                    <ListItemComponent
                        key={i}
                        index={i}
                        selected={selectedIndex}
                        itemName={m.itemName}
                        icon={m.icon}
                        handleFunction={handleListItemClick}
                    />
                ))}
            </List>
            <Divider
                variant="middle"
                sx={{ borderColor: "#00205C", borderWidth: "1px" }}
            />
        </Box>
    );
}
