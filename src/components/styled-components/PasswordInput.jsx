import styled from "styled-components";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { CustomInput } from "./CustomInputLabel";
import { useState } from "react";

const PasswordContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    button {
        position: absolute;
        background-color: transparent;
        color: #5b738b;
        max-width: 50px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

function PasswordInput({id,placeholder,errMsg}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <PasswordContainer>
            <CustomInput
                style={{
                    backgroundColor:
                        errMsg != " " ? "#FFEAF4" : "#eaecee",
                    width: '100%'
                }}
                type={showPassword ? "text" : "password"}
                id={id}
                placeholder={placeholder}
            />
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
            >
                {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </PasswordContainer>
    );
}

export default PasswordInput;
