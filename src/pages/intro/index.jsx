import React, { useEffect, useState } from "react";
import IntroLoad from "./IntroLoad";
import Intro from "./Intro";
import '../pagestyles.css'

function IntroPage() {
    const [renderContent, setRenderContent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderContent(1);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return <>{renderContent ? <Intro /> : <IntroLoad />}</>;
}

export default IntroPage;
