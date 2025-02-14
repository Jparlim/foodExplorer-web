import { Container } from "./style"
import infobox from "../../images/infobox.png" 

export function Retangle() {
    return (
        <Container>
            <img src={infobox} alt="" />

            <div>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
        </Container>
    )
} 