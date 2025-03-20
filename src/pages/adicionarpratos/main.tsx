import { Container } from "./styles"

import { NavBar } from "../../components/navbar/main"
import { Footer } from "../../components/footer/index"

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";

export function Adicionar() {
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
                        <input type="text" />
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
