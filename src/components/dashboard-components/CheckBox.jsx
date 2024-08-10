import { MenuItem, FormControl } from "@mui/material";
import {StyledSelect} from '../styled-components/styledComponents'
import { useState } from "react";

export default function CheckBox({ width, optionsArray,backgroundColor }) {
    const [filter, setFilter] = useState(optionsArray[0]);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const menuItems = optionsArray.map((option, i) => (
        <MenuItem key={i} value={option}>
            {option}
        </MenuItem>
    ));

    return (
        <FormControl sx={{ m: 1, minWidth: width }} size="small">
            <StyledSelect
                width='200px'
                backgroundColor='black'
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
