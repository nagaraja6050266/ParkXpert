import AddButton from "../../../components/people-components/AddButton";
import SearchBar from "../../../components/dashboard-components/SearchBar";
import { FlexBox } from "../../../components/styled-components/styledComponents";
import CheckBox from "../../../components/dashboard-components/CheckBox";
import { Delete } from "@mui/icons-material";
import TableButton from "../../../components/table-components/TableButton";
import gearBike from "../../../assets/gearBike.png";
import Icon from "../../../components/Icon";
import DashboardTable from "../DashboardTable";
import TableContentRounded from "../../../components/table-components/TableContentRounded";
import { createData } from "../GlobalFunctions";

const searchOptions = ["Peoples"];

const columns = [
    { id: "sNo", label: "S. No", minWidth: "3vw", align: "center" },
    { id: "personID", label: "Person ID", minWidth: "10vw" },
    { id: "company", label: "Company", minWidth: "9vw", align: "center" },
    { id: "renderedPlateNo", label: "Plate No.", minWidth: "10vw" },
    { id: "model", label: "Model", maxWidth: "2vw" },
    { id: "type", label: "Type", minWidth: "10vw" },
    { id: "trash", label: "Trash", minWidth: "20%" },
    { id: "action", label: "Action", minWidth: "150px" },
];


const rows = [
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: true,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
    createData({
        personID: "12345",
        company: "Icanio",
        plateNo: "TN 72 AS 1234",
        model: "Hero Passion Pro",
        type: <Icon src={gearBike} />,
        trash: <TableButton buttonType="delete" />,
        action: <TableButton buttonType="edit" />,
    }
    ),
];

function Peoples() {
    return (
        <>
            <AddButton />
            <FlexBox mt={1} width="98.5%" justifyContent="space-around">
                <SearchBar />
                <CheckBox
                    optionsArray={searchOptions}
                    backgroundcolor="#00205C"
                    width="100px"
                />
            </FlexBox>
            <DashboardTable columns={columns} rows={rows} />
        </>
    );
}

export default Peoples;
