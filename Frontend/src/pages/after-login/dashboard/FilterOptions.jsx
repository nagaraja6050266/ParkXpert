import CheckBox from "../../../components/dashboard-components/CheckBox";
import {
    FlexBox,
    CustomLabel,
    StyledDatePicker,
} from "../../../components/styled-components/styledComponents";
import { Box,Typography,Divider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FilterAlt } from "@mui/icons-material";

const filterOptionsArray = ["All", "Car", "Bike", "Truck"];
const dateOptionsArray = ["None", "Today", "Yesterday", "This Week"];

function FilterOptions() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                        <FilterAlt
                            fontSize="small"
                            sx={{ color: "#475E75" }}
                        />
                    </FlexBox>
                </Box>
                <Box sx={{ flex: 10 }}>
                    <Divider />
                </Box>
            </FlexBox>
            <FlexBox
                flexWrap="wrap"
                alignItems="end !important"
                justifyContent="space-between"
                width="100%"
            >
                <CheckBox
                    backgroundcolor="#00205C"
                    width="20vw"
                    label="Company"
                    optionsArray={filterOptionsArray}
                />
                <FlexBox gap={1} width="max-content">
                    <CustomLabel>Date</CustomLabel>

                    <StyledDatePicker />
                    <StyledDatePicker />
                    <CheckBox
                        width="10vw"
                        backgroundcolor="#00205C"
                        optionsArray={dateOptionsArray}
                    />
                </FlexBox>
                <FlexBox flex={0}>
                    <CustomLabel style={{ marginTop: "20px" }}>
                        Timing
                    </CustomLabel>
                    <CheckBox label="In Time" optionsArray={dateOptionsArray} />
                    <CheckBox
                        label="Out Time"
                        optionsArray={dateOptionsArray}
                    />
                </FlexBox>
            </FlexBox>
        </LocalizationProvider>
    );
}

export default FilterOptions;
