import { CustomInput, CustomLabel, CustomLabelInputContainer } from './styledComponents';
import PasswordInput from "./PasswordInput";

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
                <PasswordInput inputType={inputType} id={inputId} placeholder={placeHolder} errMsg={errMsg} />
            )}
            <CustomLabel style={{ color: "red" }} htmlFor={inputId}>
                {errMsg}
            </CustomLabel>
        </CustomLabelInputContainer>
    );
}

export default CustomLabelInput;

