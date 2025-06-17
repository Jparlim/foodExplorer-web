import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/main"
import { Description } from "../pages/descriptions/index"
import { Pagamento } from "../pages/pagepagamento"
import { Historico } from "../pages/pedidos";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/description" element={<Description />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/pedidos" element={<Historico />} />
        </Routes>
    )
}