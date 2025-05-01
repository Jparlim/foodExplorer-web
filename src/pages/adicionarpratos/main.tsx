import { Container } from "./styles"

import { NavBar } from "../../components/navbar/main"
import { Footer } from "../../components/footer/index"

import { RxCaretLeft } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrCheckmark } from "react-icons/gr";

export function Adicionar() {

    const [ inputvisible, setinputvisible ] = useState(false)
    const [ novoItem, setNovoItem ] = useState('')
    const [ itens , setItens] = useState([])

    const handleClick = () => {
        setinputvisible(true)
    }

    const handleinput = (e) => {
        if(e.key === 'Enter') {
            if(novoItem !== '') {
                setItens([novoItem, ...itens])
                setNovoItem('')
                setinputvisible(false)
            }
        }
    }

    const [ imgsave, setimgsave ] = useState([])
    const [ visible, setvisible ] = useState(true)


    async function handleimg(img) {
        const file = img.target.files[0].name

        setimgsave([file ,...imgsave])
        setvisible(false)
    }

    const namePrato = (e) => {
        const name = e.target.value
        // console.log(name)
        return name
    }

    const categoria = (e) => {
        return e
    }

    function prato() {
        const createprato = [{'img': imgsave, 'name': namePrato, 'categoria': categoria.name, 'ingredientes': itens}]
        console.log(createprato[0])
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
                            { visible ? (
                                <label className="importimg">
                                    <FiUpload className="icon"/>
                                    <p>selecionar imagem</p>
                                    <input type="file" onChange={e => handleimg(e)}/>
                                </label>
                            ) : (
                                <GrCheckmark className="iconright"/>
                            )}
                        </div>

                        <div>
                            <p>nome</p>
                            <input type="text" onChange={e => namePrato(e)} placeholder="EX: Salada Ceasar"/>
                        </div>

                        <div>
                            <p>categoria</p>
                            <select name="categoria" id="Cat01" onChange={e => categoria(e.target.value)}>
                                <option value="Refeição">Refeição</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="Cafe da tarde">Cafe da tarde</option>
                            </select>
                        </div>
                    </div>
                </div>
  
                <div className="ingredientes">
                    <div>
                        <p>ingredientes</p>
                        <div className="lab">

                            <ul>
                                {itens.map(item => 
                                    <li key={item}>{item}<GrClose onClick={() => {
                                        setItens(itens.filter(teste => teste !== item))
                                        // aqui estamos colocando dentro do setitens apenas
                                        // os itens que não tem o mesmo nome ou key que o do 
                                        // botao clicado
                                    }} className="icon"/></li>
                                )}
                                
                            </ul>

                        { inputvisible ? (
                            <div>
                                <input type="text" 
                                value={novoItem}
                                onChange={e => setNovoItem(e.target.value)}
                                onKeyDown={e => handleinput(e)}
                                />
                            </div>
                            ) : (
                            <button type="button" onClick={handleClick}>Adicionar +</button>
                        )}
                        </div>
                    </div>

                    <div>
                        <p>preço</p>
                        <input type="text" placeholder="R$ 00,00"/>
                    </div>
                </div>

                <div className="descrição">
                    <p>descrição</p>
                    <input type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                    <button type="button" onClick={prato}>salvar alteração</button>
                </div>

            </main>
    
            <Footer/>
        </Container>
    )
}
