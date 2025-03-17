import { Container } from "./styles"

import { NavBar } from "../../components/navbar/main"
import { Footer } from "../../components/footer/index"

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

export function Adicionar() {
    return (
        <Container>
            <NavBar/>

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
                            <input type="select" />
                        </div>
                    </div>

                    
                </div>

            <Footer/>
        </Container>
    )
}

{/* <div className="ingredientes">
                        <div>
                            <p>ingredientes</p>
                            <input type="text" />
                        </div>

                        <div>
                            <p>preço</p>
                            <input type="text" />
                        </div>
                    </div>

                    <div className="descrição">
                        <p>descrição</p>
                        <input type="text" />
                    </div>

                    <button type="button">salvar alteração</button> */}