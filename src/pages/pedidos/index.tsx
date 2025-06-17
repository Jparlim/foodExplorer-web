import { Container } from "./style"
import { NavBar } from "../../components/navbar/main"

export function Historico() {
    return (
        <Container>
            <NavBar/>

            <h1>
                Histórico de pedidos
            </h1>

            <div className="oi">
                <div className="header">Status</div>
                <div className="header">Código</div>
                <div className="header">Detalhamento</div>
                <div className="header">Data e hora</div>

                <div className="cell">teste1</div>
                <div className="cell">teste2</div>
                <div className="cell">teste3</div>
                <div className="cell">teste4</div>
            </div>

        </Container>
    )
}