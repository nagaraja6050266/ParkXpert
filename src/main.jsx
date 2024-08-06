import "@fontsource/inter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Theme } from './components/styled-components/styledComponents.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
