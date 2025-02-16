import { Container } from "./styles"
import { NavBar } from "../../components/navbar/main"
import { Retangle } from "../../components/retangle/main"
import { BoxRefeições } from "../../components/boxrefeições"
import { Snack } from "../../components/refeições"

export function Home() {
    return (
        <Container>
            {/* <NavBar/>

            <Retangle/>

            <BoxRefeições/> */}

            <Snack/>

        </Container>
    )
}