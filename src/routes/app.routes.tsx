import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/main"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}