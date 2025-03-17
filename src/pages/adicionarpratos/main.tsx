import { Container } from "./styles"

import { NavBar } from "../../components/navbar/main"
import { Footer } from "../../components/footer/index"

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

export function Adicionar() {
    return (
        <Container>
            <NavBar/>

                <div className="close">
                    <RxCaretLeft className="icon"/>
                    <h1>voltar</h1>
                </div>

                <h1>adicionar prato</h1>
                
                <div className="adicionar">
                    <div className="name">
                        <div>
                            <p>imagem do prato</p>
                            <div>
                                <FiUpload/>
                                <input type="file"/>
                            </div>
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

                    <div className="ingredientes">
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

                    <button type="button">salvar alteração</button>
                </div>

            <Footer/>
        </Container>
    )
}