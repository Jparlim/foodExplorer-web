import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Container } from "./style";
import { use, useState } from "react";

import expresso from "../../images/expresso.png"
import maracuja from "../../images/maracuja.png"
import autunno from "../../images/autunno.png"
import pommo from "../../images/pommo.png"

export interface pratosRequest {
    id: number
    title: string
    imagem: string
    subtitle: string
    value: number
    categoria: string
}

export const Pratos: pratosRequest[] = [
    {id: 1, title: "spaguetti Gambe", imagem: "./src/images/image 3.png" , subtitle: "Massa fresca com camarões e pesto.", value: 79.97, categoria: "refeições"},
    {id: 2, title: "Salada Ravanello", imagem: "./src/images/saladaRavanel.png" , subtitle: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.", value: 49.97, categoria: "refeições"},
    {id: 3, title: "Torradas de parma", imagem: "./src/images/torradaparma.png" , subtitle: "Presunto de parma e rúcula em um pão com fermentação natural.", value: 25.97, categoria: "refeições"},
    {id: 4, title: "Salada molla", imagem: "./src/images/saladadeparma.png" , subtitle: "folhas verdes e frescas", value: 79.90, categoria: "refeições"},
    {id: 5, title: "Prigna Pie", imagem: "./src/images/damasco.png", subtitle: "torta de ameixa com massa amanteigada, polvilho em açucar.", value: 79.97, categoria: "sobremesas"},
    {id: 6, title: "Bolo de damasco", imagem: "./src/images/peachy.png", subtitle: "Damasco fresco em uma massa sem glúten", value: 19.97, categoria: "sobremesas"},
    {id: 8, title: "macarrão agridoce", imagem: "./src/images/expresso.png", subtitle: "massas doces e refrescantes", value: 60.00, categoria: "sobremesas"},
    {id: 7, title: "Peachy pastrie", imagem: "./src/images/mac.png", subtitle: "Delicioso folheado de pêssego com folhas de hortelã", value: 32.97, categoria: "sobremesas"},
    {id: 9, title: "Espresso", imagem: `${expresso}`, subtitle: "Café cremoso feito na temperatura e pressões perfeitas", value: 15.97, categoria: "bebidas"},
    {id: 10, title: "suco de maracujá", imagem: `${maracuja}`, subtitle: "suco de maracujá gelado, cremoso, docinho.", value: 13.97, categoria: "bebidas"},
    {id: 11, title: "tè d´autunno", imagem: `${autunno}`, subtitle: "chá de anis, canela de limão. Sinta o outono italiano.", value: 13.97, categoria: "bebidas"},
    {id: 12, title: "Pomo bourbon", imagem: `${pommo}`, subtitle: "maçã, whisky, canela. on the rocks", value: 79.97, categoria: "bebidas"},
]


export function Refeiç( { id, title, imagem, subtitle, value }:pratosRequest ) {    
    
    const [favorito, setfavorito] = useState(false);

    function toglefavorite() {
        setfavorito(!favorito);
    }

    const [contador, setnumero] = useState(0)

    const aumentarnúmero = () => {
        setnumero(contador + 1)
    }

    const diminuirnumero = () => {
        if(contador > 0) {
            setnumero(contador - 1)
        }
    }

    const [ banco, setbanco ] = useState({})
    
    return (
        <Container>
            <CiHeart className={`icon ${favorito ? "favorito" : ""}`} key={id} onClick={toglefavorite}/>

            <img src={imagem} alt="" />
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p className="value">{value}</p>

            <div>
                <div className="quantidade">
                    <FiMinus className="maisEmenos" onClick={diminuirnumero}/>
                    <p>{contador}</p>
                    <FaPlus className="maisEmenos" onClick={aumentarnúmero}/>
                </div>

                <button onClick={() => {
                    if(contador === 0) {
                        return console.log("adicione ao menos uma porção do alimento")
                    }
                    setbanco([{"id":id,
                        "name": title,
                        "quantidade":contador
                    }, banco])
                }}>incluir</button>

                <button onClick={() => console.log(banco)}>teste</button>
            </div>
        </Container>
    )
}