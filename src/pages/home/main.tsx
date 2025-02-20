import { Container } from "./styles"
import { NavBar } from "../../components/navbar/main"
import { Retangle } from "../../components/retangle/main"
import { BoxRefeições } from "../../components/boxrefeições"

import { Pratos } from "../../utils"

export function Home() {
    
    const box = Pratos.map(comida => comida.categoria)
    
    return (
        <Container>
            {/* <NavBar/>

            <Retangle/>             */}

            
            {Pratos.filter()}

        </Container>
    )
}