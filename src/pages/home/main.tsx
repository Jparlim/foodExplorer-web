import { Container } from "./styles"
import { NavBar } from "../../components/navbar/main"
import { Retangle } from "../../components/retangle/main"

import { BoxRefeições } from "../../components/boxrefeições"

import { Footer } from "../../components/footer/index"

export function Home() {
    
    return (
        <Container>
            <NavBar/>

            <Retangle/>            

            <BoxRefeições/>

            <Footer/>

        </Container>
    )
}