import { Container } from "./style";
import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import spaguet from "../../images/image 3.png"
import { Pratos } from "../../utils";

export interface pratosRequest {
    id: string
    title: string
    subtitle: string
    value: number
    categoria: string
}

export interface categoriaRequest {
    id: string
    categoria: string
}

export function Refeiç( { id, categoria, title, subtitle, value }:pratosRequest ) {
    return (
        <div>
            <CiHeart/>

            <img src={spaguet} alt="" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{value}</p>
        </div>
    )
}

export function BoxRefeições( { id, categoria }:categoriaRequest ) {
    return (
        <Container>
            <h1>{categoria}</h1>

            {Pratos.map(sl => 
                <Refeiç
                    key={sl.id}
                    id={sl.id}
                    categoria={sl.categoria}
                    title={sl.title}
                    subtitle={sl.subtitle}
                    value={sl.value}
                />
            
            )}
        </Container>
    )
}