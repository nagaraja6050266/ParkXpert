import { ThemeProvider } from "styled-components";
import { Box, Container } from "@mui/material";
import AppNameComponent from "../../components/styled-components/AppNameComponent";
import { Theme } from "../../components/styled-components/styledComponents";

function Navbar() {
    return (
        <ThemeProvider theme={Theme}>
            <Box width="20%" height="100vh"
                sx={{ bgcolor: "primary.main" }}
            >
                <AppNameComponent color="white" mt="30px" />
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;
