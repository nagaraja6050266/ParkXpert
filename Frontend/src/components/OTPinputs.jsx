import { useRef } from "react";
import { FlexBox } from "./styled-components/styledComponents";
import { CustomInput } from "./styled-components/styledComponents";

function OTPinputs({ length }) {
    const inputRefs = useRef([]);

    const handleOTPenter = (e, i) => {
        const value = e.target.value;
        if (i < length - 1 && value.length == 1) {
            inputRefs.current[i + 1].focus();
        }
    };

    return (
        <FlexBox justifyContent="space-between">
            {Array.from({ length: length }).map((_, i) => (
                <CustomInput
                    id={"otp" + (i + 1)}
                    onChange={(e) => handleOTPenter(e, i)}
                    key={i}
                    type="otp"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[i] = el)}
                />
            ))}
        </FlexBox>
    );
}

export default OTPinputs;
