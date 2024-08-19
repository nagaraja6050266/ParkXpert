import { Box } from "@mui/material";
import { ThemeProvider } from "styled-components";
import AppNameComponent from "../../components/styled-components/AppNameComponent";
import { Theme } from "../../components/styled-components/styledComponents";
import MenuList from "./MenuList";

function Navbar() {
    return (
        <ThemeProvider theme={Theme}>
            <Box
                width="16%"
                height="100vh"
                position="fixed"
                top={0}
                mt={0}
                sx={{ bgcolor: "#00153D" }}
            >
                <AppNameComponent color="white" mt="30px" />
                <MenuList />
            </Box>
        </ThemeProvider>
    );
}

export default Navbar;
