function LabelAndInput({ labelName, inputType, inputId, placeHolder, errMsg }) {
    return (
        <div className="label-and-input">
            <label htmlFor={inputId}>{labelName}</label>
            <input
                type={inputType}
                id={inputId}
                placeholder={placeHolder}
            />
            <label style={{ color: "red" }} htmlFor="email-id">
                {errMsg}
            </label>
        </div>
    );
}

export default LabelAndInput