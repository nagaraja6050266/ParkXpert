import React, { useEffect, useState } from "react";
import IntroLoad from "./IntroLoad";
import Intro from "./Intro";
import { CenteredBox } from "../../components/styled-components/styledComponents";
import bgImage from '../../assets/background.png'

function IntroPage() {
    const [renderContent, setRenderContent] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRenderContent(1);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return <CenteredBox sx={{backgroundImage: `url(${bgImage})`}} height='100vh'>{renderContent ? <Intro /> : <IntroLoad />}</CenteredBox>;
}

export default IntroPage;
