import SearchBar from "../../../components/dashboard-components/SearchBar";
import AddButton from "../../../components/people-components/AddButton";
import { FlexBox } from "../../../components/styled-components/styledComponents";
import TableButton from "../../../components/table-components/TableButton";
import DashboardTable from "../DashboardTable";
import { createData } from "../GlobalFunctions.jsx";

const columns = [
    { id: "sNo", label: "S. No", minWidth: "3vw", align: "center" },
    { id: "name", label: "Name", minWidth: "10vw" },
    { id: "email", label: "Email", minWidth: "9vw", align: "left" },
    { id: "mobileNumber", label: "Mobile No.", minWidth: "10vw" },
    { id: "renderedAccessTo", label: "Access To", maxWidth: "15vw" },
    { id: "renderedStatus", label: "Status", minWidth: "5vw" },
    { id: "trash", label: "Trash", minWidth: "20%" },
    { id: "action", label: "Action", minWidth: "150px" },
];

const rows = [
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["People"],
        status: "Inactive",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
    createData({
        name: "Nagaraja",
        email: "nagaraja@gmail.com",
        mobileNumber: "898998989",
        accessTo: ["Dashboard", "People"],
        status: "Active",
        isTrash: true,
        action: <TableButton buttonType="edit" />,
    }),
];

function Permissions() {
    return (
        <>
            <AddButton content={"Add Access"} />
            <FlexBox width={"92%"} m={2}>
                <SearchBar />
            </FlexBox>
            <DashboardTable columns={columns} rows={rows} />
        </>
    );
}

export default Permissions;
