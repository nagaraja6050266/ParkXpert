import styled from "styled-components";
import PasswordInput from "./PasswordInput";

const CustomLabel = styled.label`
    color: #223548;
    font-weight: 600;
    font-size: 12px;
`;

const CustomInput = styled.input`
    width: inherit;
    height: 35px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
`;

const CustomLabelInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 5px;
    font-size: 12px;
`;

function CustomLabelInput({
    labelName,
    inputType,
    inputId,
    placeHolder,
    errMsg,
}) {
    return (
        <CustomLabelInputContainer>
            <CustomLabel htmlFor={inputId}>{labelName}</CustomLabel>
            {inputType != "password" ? (
                <CustomInput
                    style={{
                        backgroundColor: errMsg != " " ? "#FFEAF4" : "#eaecee",
                    }}
                    type={inputType}
                    id={inputId}
                    placeholder={placeHolder}
                    required
                />
            ) : (
                <PasswordInput id={inputId} placeholder={placeHolder} errMsg={errMsg} />
            )}
            <CustomLabel style={{ color: "red" }} htmlFor={inputId}>
                {errMsg}
            </CustomLabel>
        </CustomLabelInputContainer>
    );
}

export { CustomLabelInput, CustomInput };
