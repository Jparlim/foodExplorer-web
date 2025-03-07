import { Container } from "./style"
import { NavBar } from "../../components/navbar/main"
import { Retangle } from "../../components/retangle/main"

import { BoxRefeiçõesADM } from "../../componentesADM/boxrefeiçõesADM/main"

import { Footer } from "../../components/footer/index"

export function HomeADM() {
    
    return (
        <Container>
            <NavBar/>

            <Retangle/>            

            <BoxRefeiçõesADM/>

            <Footer/>

        </Container>
    )
}