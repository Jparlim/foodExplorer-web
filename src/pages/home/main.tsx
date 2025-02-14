import { Container } from "./styles"
import { NavBar } from "../../components/navbar/main"
import { Retangle } from "../../components/retangle/main"

export function Home() {
    return (
        <Container>
            <NavBar/>

            <Retangle/>

        </Container>
    )
}