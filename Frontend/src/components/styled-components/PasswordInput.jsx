import { Visibility, VisibilityOff, Edit } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { PasswordContainer, CustomInput } from "./styledComponents";

function PasswordInput({ id, placeholder, errMsg, edit,inputType }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <PasswordContainer>
            <CustomInput
                style={{
                    backgroundColor: errMsg != " " ? "#FFEAF4" : "#eaecee",
                    width: "100%",
                }}
                type={showPassword ? "text" : "password"}
                id={id}
                placeholder={placeholder}
            />
            {inputType=='editable' && (
                <IconButton edge="end">
                    <Edit />
                </IconButton>
            )}
            {inputType=='editable' || (
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            )}
        </PasswordContainer>
    );
}

export default PasswordInput;
