import { CustomInput, CustomLabel, CustomLabelInputContainer } from './styledComponents';
import PasswordInput from "./PasswordInput";

function CustomLabelInput({
    labelName,
    inputType,
    inputId,
    placeHolder,
    errMsg,
    width
}) {
    return (
        <CustomLabelInputContainer width={width}>
            <CustomLabel htmlFor={inputId}>{labelName}</CustomLabel>
            {(inputType != "password" && inputType!="editable") ? (
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
                <PasswordInput id={inputId} inputType={inputType} placeholder={placeHolder} errMsg={errMsg} />
            )}
            <CustomLabel style={{ color: "red" }} htmlFor={inputId}>
                {errMsg}
            </CustomLabel>
        </CustomLabelInputContainer>
    );
}

export default CustomLabelInput;

