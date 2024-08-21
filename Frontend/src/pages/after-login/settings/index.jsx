import SearchBar from "../../../components/dashboard-components/SearchBar";
import AddButton from "../../../components/people-components/AddButton";
import CustomLabelInput from "../../../components/styled-components/CustomLabelInput";
import { FlexBox } from "../../../components/styled-components/styledComponents";
import { Box } from "@mui/material";
import DashboardTable from "../DashboardTable";
import { createData } from "../GlobalFunctions";

const columns = [
    { id: "sNo", label: "S. No", align: "center" },
    { id: "company", label: "Company", minWidth: "60vw", align: "left" },
    { id: "trash", label: "Trash", align: "left", minWidth: "5vw" },
];

const rows = [
    createData({
        company: "Icanio",
        isTrash: true,
    }),
];

export default function Settings() {
    return (
        <>
            <FlexBox flexDirection="column" width="30%">
                <CustomLabelInput
                    width="90%"
                    labelName="Building Name"
                    inputType="editable"
                    inputId="buildingName"
                    errMsg=" "
                />
                <CustomLabelInput
                    width="90%"
                    labelName="Building Location"
                    inputType="editable"
                    inputId="buildingLocation"
                    errMsg=" "
                />
            </FlexBox>
            <FlexBox
                mt={2}
                flexDirection="column"
                alignItems="flex-start"
                gap={2}
                width="90%"
                ml={1}
            >
                <AddButton content="Add Company" />
                <SearchBar placeHolder="Search Company" />
            </FlexBox>
            <Box mt={1}>
                <DashboardTable rows={rows} columns={columns} />
            </Box>
        </>
    );
}
