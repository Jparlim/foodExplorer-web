import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import spaguet from "../../images/image 3.png"
import { Container } from "./style";
import { useState } from "react";

export interface pratosRequest {
    id: string
    title: string
    subtitle: string
    value: number
    categoria: string
}

export const Pratos: pratosRequest[] = [
    {id: "1", title: "spaguetti Gambe", subtitle: "Massa fresca com camarões e pesto.", value: 79.97, categoria: "refeições"},
    {id: "2", title: "Salada Ravanello", subtitle: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.", value: 49.97, categoria: "refeições"},
    {id: "3", title: "Torradas de parma", subtitle: "Presunto de parma e rúcula em um pão com fermentação natural.", value: 25.97, categoria: "refeições"},
    {id: "4", title: "Salada molla", subtitle: "folhas verdes e frescas", value: 79.90, categoria: "refeições"},
    {id: "5", title: "Prigna Pie", subtitle: "torta de ameixa com massa amanteigada, polvilho em açucar.", value: 79.97, categoria: "sobremesas"},
    {id: "6", title: "Bolo de damasco", subtitle: "Damasco fresco em uma massa sem glúten", value: 19.97, categoria: "sobremesas"},
    {id: "7", title: "Peachy pastrie", subtitle: "Delicioso folheado de pêssego com folhas de hortelã", value: 32.97, categoria: "sobremesas"},
    {id: "8", title: "macarrão agridoce", subtitle: "massas doces e refrescantes", value: 60.00, categoria: "sobremesas"},
    {id: "9", title: "Espresso", subtitle: "Café cremoso feito na temperatura e pressões perfeitas", value: 15.97, categoria: "bebidas"},
    {id: "10", title: "suco de maracujá", subtitle: "suco de maracujá gelado, cremoso, docinho.", value: 13.97, categoria: "bebidas"},
    {id: "11", title: "tè d´autunno", subtitle: "chá de anis, canela de limão. Sinta o outono italiano.", value: 13.97, categoria: "bebidas"},
    {id: "12", title: "Pomo bourbon", subtitle: "maçã, whisky, canela. on the rocks", value: 79.97, categoria: "bebidas"},
]


export function Refeiç( { id, title, subtitle, value }:pratosRequest ) {    
    
    const [favorito, setfavorito] = useState(false);

    function toglefavorite() {
        setfavorito(!favorito);
    }
    
    return (
        <Container>
            <CiHeart className={`icon ${favorito ? "favorito" : ""}`} key={id} onClick={toglefavorite}/>

            <img src={spaguet} alt="" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p className="value">{value}</p>

            <div>
                <div className="quantidade">
                    <FiMinus className="maisEmenos"/>
                    <p>01</p>
                    <FaPlus className="maisEmenos"/>
                </div>

                <button type="submit">incluir</button>
            </div>
        </Container>
    )
}