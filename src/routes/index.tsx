import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";

export function Routesapp() {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}