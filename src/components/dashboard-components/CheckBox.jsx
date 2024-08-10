import { MenuItem, FormControl, Select} from "@mui/material";
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
        <FormControl sx={{ m: 1 }} size="small">
            <Select
            sx={{background: backgroundColor,width: width}}
                value={filter}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
                {menuItems}
            </Select>
        </FormControl>
    );
}
