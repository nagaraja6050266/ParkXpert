import { Card, Typography } from "@mui/material";
import { FlexBox } from "../styled-components/styledComponents";

function VehicleCard({ iconName, name, count, color,bgColor }) {
    return (
        <Card
            sx={{
                width: "130px",
                height: "70px",
                backgroundColor: bgColor,
                padding: "10px",
                boxShadow: "none",
                border: "solid 1.5px #D7E3E9",
                borderRadius: "10px",
                position:'relative'
            }}
        >
            <FlexBox gap={1} alignItems='center'>
                {iconName && (
                    <img
                        src={iconName}
                        alt={name}
                        style={{ width: 20, height: 20 }}
                    />
                )}

                <Typography color={color} fontSize={11} fontWeight={500}>
                    {name}
                </Typography>
            </FlexBox>
            <Typography color={color} textAlign="right" fontSize={20} fontWeight={700} position='absolute' bottom={3} right={10}>
                {count}
            </Typography>
        </Card>
    );
}

export default VehicleCard;
