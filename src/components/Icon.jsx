function Icon({src}) {
    console.log(src);
    return (
        <img style={{ height: "16px", width: "auto" }} src={src} alt="icon" />
    );
}

export default Icon;