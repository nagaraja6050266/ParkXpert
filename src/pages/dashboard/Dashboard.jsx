import VehicleCard from "../../components/dashboard-components/VehicleCard";
import DateAndTime from "../../components/dashboard-components/DateAndTime";
import OfficeLocation from "../../components/dashboard-components/OfficeLocation";
import { FlexBox } from "../../components/styled-components/styledComponents";
import { Box } from "@mui/material";
import CarIcon from "../../assets/car.png";
import Scooter from "../../assets/scooter.png";
import Auto from "../../assets/auto.png";
import Ban from "../../assets/banPlain.png";
import Truck from "../../assets/truck.png";
import Warn from "../../assets/warning.png";
import UserProfile from "../../components/dashboard-components/UserProfile";
import Header from "./Header";

const vehicleCardContents = [
    {
        name: "All Vehicles",
        count: "102",
        color: "white",
        bgColor: "primary.main",
    },
    {
        name: "Car",
        icon: CarIcon,
        count: "2",
    },
    {
        name: "Two Wheelers",
        count: "18",
        icon: Scooter,
    },
    {
        name: "Ricksaw",
        count: "1",
        icon: Auto,
    },
    {
        name: "Heavy",
        count: "0",
        icon: Truck,
    },
    {
        name: "Violation",
        count: "4",
        icon: Ban,
        bgColor: "#FFB300",
    },
    {
        name: "Unrecognized",
        count: "1",
        icon: Warn,
        bgColor: "#EE3939",
        color: "white",
    },
];

function Dashboard() {
    return (
        <Box>
            <Header></Header>
            <FlexBox justifyContent="space-evenly" width="100%" flexWrap="wrap">
                {vehicleCardContents.map((m, i) => (
                    <VehicleCard
                        key={i}
                        iconName={m.icon}
                        name={m.name}
                        count={m.count}
                        color={m.color}
                        bgColor={m.bgColor}
                    />
                ))}
            </FlexBox>
        </Box>
    );
}

export default Dashboard;
