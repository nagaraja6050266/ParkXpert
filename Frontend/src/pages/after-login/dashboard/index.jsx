import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Divider } from "@mui/material";
import Auto from "../../../assets/auto.png";
import Ban from "../../../assets/banPlain.png";
import CarIcon from "../../../assets/car.png";
import Helmet from "../../../assets/helmet.png";
import Scooter from "../../../assets/scooter.png";
import Speed from "../../../assets/speed.png";
import Truck from "../../../assets/truck.png";
import Warn from "../../../assets/warning.png";
import Icon from "../../../components/Icon";
import CheckBox from "../../../components/dashboard-components/CheckBox";
import SearchBar from "../../../components/dashboard-components/SearchBar";
import VehicleCard from "../../../components/dashboard-components/VehicleCard";
import { FlexBox } from "../../../components/styled-components/styledComponents";
import TableButton from "../../../components/table-components/TableButton";
import TableContentRounded from "../../../components/table-components/TableContentRounded";
import DashboardTable from "../DashboardTable";
import FilterOptions from "./FilterOptions";
import { createData } from "../GlobalFunctions";

let index = 1;

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

const columns = [
    { id: "sNo", label: "S. No", minWidth: "3vw", align: "center" },
    { id: "personID", label: "Person ID", minWidth: "10vw" },
    { id: "company", label: "Company", minWidth: "9vw", align: "center" },
    { id: "renderedPlateNo", label: "Plate No.", minWidth: "10vw" },
    { id: "model", label: "Model", maxWidth: "2vw" },
    { id: "type", label: "Type", minWidth: "20%" },
    { id: "renderedViolation", label: "Violation", minWidth: "20%" },
    { id: "renderedInTime", label: "In Time", minWidth: "20%" },
    { id: "renderedOutTime", label: "Out Time", minWidth: "20%" },
    { id: "action", label: "Action", minWidth: "150px" },
];


const rows = [
    createData({
        personID: "12345566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "1234556",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "1235566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "1234566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "1245566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "124966",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "12u566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "12u566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "12u566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
    createData({
        personID: "12u566",
        company: "",
        plateNo: "TN 72 AS 1426",
        model: "Bajaj, Pulsar",
        type: <Icon src={Scooter} />,
        violation: [Speed, Helmet],
        inTime: "10.00 AM",
        outTime: "10.00 PM",
        action: <TableButton buttonType="add" />,
    }),
];

const searchOptions = ["People"];

function Dashboard() {
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
            <FilterOptions />
            <FlexBox width="98.5%" justifyContent="space-around">
                <SearchBar />
                <CheckBox
                    optionsArray={searchOptions}
                    backgroundcolor="#00205C"
                    width="100px"
                />
            </FlexBox>
            <DashboardTable columns={columns} rows={rows} />
        </Box>
    );
}

export { Dashboard, createData };

