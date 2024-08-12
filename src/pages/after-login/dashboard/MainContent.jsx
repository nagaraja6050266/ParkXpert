import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Divider, Typography } from "@mui/material";
import Auto from "../../../assets/auto.png";
import Ban from "../../../assets/banPlain.png";
import CarIcon from "../../../assets/car.png";
import Scooter from "../../../assets/scooter.png";
import Truck from "../../../assets/truck.png";
import Warn from "../../../assets/warning.png";
import VehicleCard from "../../../components/dashboard-components/VehicleCard";
import CheckBox from "../../../components/dashboard-components/CheckBox";
import { FlexBox } from "../../../components/styled-components/styledComponents";
import FilterOptions from "./FilterOptions";
import SearchBar from "../../../components/dashboard-components/SearchBar";

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

const searchOptions = ["People"];

function MainContent() {
    return (
        <Box>
            <Divider sx={{ marginBottom: "5px" }} />
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
            <FlexBox mt={0.5}>
                <Box sx={{ px: 2, whiteSpace: "nowrap" }}>
                    <FlexBox>
                        <Typography
                            fontSize="14px"
                            fontWeight={600}
                            color="#475E75"
                        >
                            Filter
                        </Typography>
                        <FilterAltIcon
                            fontSize="small"
                            sx={{ color: "#475E75" }}
                        />
                    </FlexBox>
                </Box>
                <Box sx={{ flex: 10 }}>
                    <Divider />
                </Box>
            </FlexBox>
            <FilterOptions />
            <FlexBox width="98.5%" justifyContent="space-around">
                <SearchBar />
                <CheckBox
                    optionsArray={searchOptions}
                    backgroundcolor="#00205C"
                    width="100px"
                />
            </FlexBox>
        </Box>
    );
}

export default MainContent;
