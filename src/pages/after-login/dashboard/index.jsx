import Navbar from "../Navbar";
import Header from "../Header";
import MainContent from "./MainContent";
import { Box } from "@mui/material";

function Dashboard() {
    return (
        <>
            <Navbar />
            <Box sx={{ ml: "16%", backgroundColor: "white", height: "100vh" }}>
                <Header />
                <MainContent />
            </Box>
        </>
    );
}

export default Dashboard;
