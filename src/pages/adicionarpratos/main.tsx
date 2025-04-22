import { Container } from "./styles"

import { NavBar } from "../../components/navbar/main"
import { Footer } from "../../components/footer/index"

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import React, { useState } from "react";

export function Adicionar() {

    const [visible, setvisible] = useState(true)
    const [inputValue, setinputValue] = useState('')

    const handlebutton = () => {
        setvisible(false)
    }

    const handleinput = (e : React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value
        setinputValue(valor)
        if(valor !== '') {
            setvisible(true)
        }
    }
    
    return (
        <Container>
            <NavBar/>

            <main>
                <button type="submit">
                    <RxCaretLeft className="icon"/>
                    <p>voltar</p>
                </button>

                <h1>adicionar prato</h1>
                
                <div className="adicionar">
                    <div className="name">
                        <div>
                            <p>imagem do prato</p>
                            <label className="importimg">
                                <FiUpload className="icon"/>
                                <p>selecionar imagem</p>
                                <input type="file"/>
                            </label>
                        </div>

                        <div>
                            <p>nome</p>
                            <input type="text" placeholder="EX: Salada Ceasar"/>
                        </div>

                        <div>
                            <p>categoria</p>
                            <select name="categoria" id="Cat01">
                                <option value="Refeição">Refeição</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Refeição">Refeição</option>
                            </select>
                        </div>
                    </div>
                </div>
  
                <div className="ingredientes">
                    <div>
                        <p>ingredientes</p>
                        <label>
                            { visible && (
                                <button type="button" onClick={handlebutton} id="buttonON">Adicionar +</button>
                            )}

                            <input id="inputOFF" type="text" value={inputValue} onChange={handleinput}/> 
                        </label>
                    </div>

                    <div>
                        <p>preço</p>
                        <input type="text" placeholder="R$ 00,00"/>
                    </div>
                </div>

                <div className="descrição">
                    <p>descrição</p>
                    <input type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    <button type="button">salvar alteração</button>
                </div>

            </main>
    
            <Footer/>
        </Container>
    )
}
