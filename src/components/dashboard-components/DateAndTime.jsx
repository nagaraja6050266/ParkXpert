import { Box, Card, Typography } from "@mui/material";
import { FlexBox } from "../styled-components/styledComponents";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { StyledCard } from "../styled-components/styledComponents";

const icons = [
    {
        component: (
            <CalendarMonthRoundedIcon
                fontSize="small"
                sx={{ color: "#354A5F" }}
            />
        ),
        content: "Date",
    },
    {
        component: (
            <AccessTimeFilledRoundedIcon
                fontSize="small"
                sx={{ color: "#354A5F" }}
            />
        ),
        content: "Time",
    },
];

function DateAndTime() {
    return (
        <StyledCard padding='10px 10px'
            height="50px"
            width="100px"
            sx={{
                borderRadius: "8px !important",
                backgroundColor: "#EAECEE !important",
            }}
        >
            {icons.map((m, i) => (
                <>
                    <FlexBox alignItems='center'>
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

<FlexBox>
    <AccessTimeFilledRoundedIcon fontSize="small" />
    <Typography>Time</Typography>
</FlexBox>;
