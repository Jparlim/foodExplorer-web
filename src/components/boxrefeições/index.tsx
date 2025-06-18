import { Container } from "./style";
import { Refeiç, Pratos } from "../refeições/index"
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { useState } from "react";

export function BoxRefeições() {
    const refeicoes = Pratos.filter(prato => prato.categoria === "refeições");
    const sobremesa = Pratos.filter(prato => prato.categoria === "sobremesas");
    const bebidas = Pratos.filter(prato => prato.categoria === "bebidas");

    return (
        <Container>
            <h1>refeições</h1>
            <div>
                <div className="boxscrollleft"> <RxCaretLeft className="icon"/> </div>
                {refeicoes.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title} 
                        imagem={prato.imagem}
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
                <div className="boxscrollright"> <RxCaretRight className="icon"/> </div>
            </div>

            <h1>sobremesas</h1>
            <div>
                <div className="boxscrollleft"> <RxCaretLeft className="icon"/> </div>
                {sobremesa.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title}
                        imagem={prato.imagem}
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
                <div className="boxscrollright"> <RxCaretRight className="icon"/> </div>
            </div>
            
            <h1>bebidas</h1>
            <div>
                <div className="boxscrollleft"> <RxCaretLeft className="icon"/> </div>
                {bebidas.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title} 
                        imagem={prato.imagem}
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
                <div className="boxscrollright"> <RxCaretRight className="icon"/> </div>
            </div>
        </Container>
    );
}
