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
import { useNavigate } from "react-router-dom";

const MenuItems = [
    { id: "dashboard", itemName: "Dashboard", icon: <DashboardRounded /> },
    { itemName: "People", icon: <Person />, id: "people" },
    { itemName: "Analytics", icon: <BarChartRounded />, id: "analytics" },
    { itemName: "Permissions", icon: <LockRounded />, id: "permissions" },
    { itemName: "Settings", icon: <Settings />, id: "settings" },
];

export default function MenuList() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        switch (index) {
            case 0:
                navigate("/dashboard");
                break;
            case 1:
                navigate("/peoples");
                break;
            case 2:
                navigate("/analytics");
                break;
            case 3:
                navigate("/permissions");
                break;
            case 4:
                navigate("/analytics");
                break;
            case 5:
                navigate("/settings");
                break;
            default:
                console.log("invalid");
        }
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
