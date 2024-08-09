import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FlexBox, StyledCard } from "../styled-components/styledComponents";

function DateAndTime() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });

    const icons = [
        {
            component: (
                <CalendarMonthRoundedIcon
                    fontSize="10px"
                    sx={{ color: "#354A5F" }}
                />
            ),
            content: date.toLocaleDateString(),
        },
        {
            component: (
                <AccessTimeFilledRoundedIcon
                    fontSize="10px"
                    sx={{ color: "#354A5F" }}
                />
            ),
            content: date.toLocaleTimeString(),
        },
    ];

    return (
        <StyledCard
            padding="10px 10px"
            height="50px"
            width="100px"
            margin="0"
            sx={{
                borderRadius: "8px !important",
                backgroundColor: "#EAECEE !important",
            }}
        >
            {icons.map((m, i) => (
                <>
                    <FlexBox key={i} alignItems="center" gap={0.5}>
                        {m.component}
                        <Typography fontSize={10} color="#475E75">
                            {m.content}
                        </Typography>
                    </FlexBox>
                </>
            ))}
        </StyledCard>
    );
}

export default DateAndTime;
