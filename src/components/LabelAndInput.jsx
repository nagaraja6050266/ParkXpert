function LabelAndInput({ labelName, inputType, inputId, placeHolder, errMsg }) {
    return (
        <div className="label-and-input">
            <label htmlFor={inputId}>{labelName}</label>
            <input
                style={{ backgroundColor: (errMsg!=' ') ? '#FFEAF4' : '#eaecee' }}
                type={inputType}
                id={inputId}
                placeholder={placeHolder}
                required
            />
            <label style={{ color: "red" }} htmlFor={inputId}>
                {errMsg}
            </label>
        </div>
    );
}

export default LabelAndInput