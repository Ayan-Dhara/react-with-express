import React from "react";
import App from "./components/App";
import {createRoot} from "react-dom/client";

createRoot(document.getElementById("root") as Element).render(<React.StrictMode><App/></React.StrictMode>)
