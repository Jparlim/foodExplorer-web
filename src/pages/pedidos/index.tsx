import { Container } from "./style"
import { NavBar } from "../../components/navbar/main"
import { IoEllipseSharp } from "react-icons/io5";

export function Historico() {
    return (
        <Container>
            <NavBar/>

            <h1>
                Histórico de pedidos
            </h1>

            <div className="oi">
                <div>Status</div>
                <div>Código</div>
                <div>Detalhamento</div>
                <div>Data e hora</div>
                
                <div className="cell"><IoEllipseSharp className="icon"/>teste1</div>
                <div>teste2</div>
                <div>teste3</div>
                <div>teste4</div>
            </div>

        </Container>
    )
}