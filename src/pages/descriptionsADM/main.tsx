import { Container} from "./styles"
import  { NavBar } from "../../components/navbar/main"

import { RxCaretLeft } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Footer } from "../../components/footer/index"

import saladRavanello  from "../../images/saladaRavanel.png"

export function DescriptionADM() {
    return (
        <Container>
            <div className="head">
                <NavBar/>
                <div className="close">
                    <RxCaretLeft className="icon"/>
                    <h1>voltar</h1>
                </div>
            </div>

            <div className="body">

                <img src={saladRavanello} alt="" />

                <div className="boxText">
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agridoce
                        salpicados com gergelim. O pão naan 
                        dá um toque especial.
                    </p>

                    <div className="ingredientes">
                        <div>alface</div>
                        <div>cebola</div>
                        <div>pão naan</div>
                        <div>pepino</div>
                        <div>rabanete</div>
                        <div>tomate</div>
                    </div>

                    <div className="concluir">
                        <button type="button">
                            editar pratos
                        </button>
                    </div>
                </div>

            </div>

            <Footer/>
        </Container>
    )
}