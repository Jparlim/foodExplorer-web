import { Container } from "./style";
import { BiSolidPolygon } from "react-icons/bi"

export function Footer() {
    return (
        <Container>
            <div className="footerbox">
                <div>
                    <BiSolidPolygon className="icon"/>
                    <h1>food explorer</h1>
                </div>

                <p>© 2023 - Todos os direitos reservados.</p>
            </div>
        </Container>
    )
}