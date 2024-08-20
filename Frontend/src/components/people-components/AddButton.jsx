import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export default function AddButton({content}) {
    return (
        <Stack spacing={2} direction="row" sx={{ marginLeft: "15px" }}>
            <Button
                sx={{
                    padding: "8px",
                    width: "215px",
                    height: "70px",
                    bgcolor: "#00205C",
                    borderRadius: "10px",
                    fontSize: "17x",
                }}
                variant="contained"
                startIcon={<AddIcon />}
            >
                {content || 'Add Profile'}
            </Button>
        </Stack>
    );
}
