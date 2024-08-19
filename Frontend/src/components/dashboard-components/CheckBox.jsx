import { MenuItem, FormControl, Select } from "@mui/material";
import { useState } from "react";
import {
    CustomLabel,
    StyledSelect,
} from "../styled-components/styledComponents";

export default function CheckBox({
    width,
    optionsArray,
    backgroundcolor,
    label,
}) {
    const [filter, setFilter] = useState(optionsArray[0]);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const menuItems = optionsArray.map((option, i) => (
        <MenuItem sx={{ fontSize: "11px" }} key={i} value={option}>
            {option}
        </MenuItem>
    ));

    return (
        <FormControl sx={{ m: 1, gap: 0.5 }} size="small">
            {label && (
                <CustomLabel color="#5B738B" fontSize="10px">
                    {label}
                </CustomLabel>
            )}
            <StyledSelect
                width={width}
                backgroundcolor={backgroundcolor}
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
                {menuItems}
            </StyledSelect>
        </FormControl>
    );
}
