import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import AppNameComponent from "../../components/styled-components/AppNameComponent";
import StyledCard from "../../components/styled-components/StyledCard";
import CenteredBox from "../../components/styled-components/CenteredBox";

function IntroLoad() {
    return (
        <CenteredBox>
            <StyledCard>
                <AppNameComponent height="40px"></AppNameComponent>
                <Box sx={{ width: "90%" }}>
                    <LinearProgress
                        sx={{
                            "& .MuiLinearProgress-bar": {
                                backgroundColor: "#00205c",
                            },
                        }}
                    />
                </Box>
            </StyledCard>
        </CenteredBox>
    );
}
export default IntroLoad;
