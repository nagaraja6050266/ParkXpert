import { Dialog } from "@mui/material";
import { useState } from "react";

function DialogBoxTemplate({dialogHeader,submitButtonHeader}) {
    const [openStatus, setOpenStatus] = useState(true);

    const handleClick = () => {
        setOpenStatus(!openStatus);
    };

    return (
        <Dialog onClose={handleClick} open={openStatus}>
            
        </Dialog>
    );
}

export default DialogBoxTemplate;
