import { Container } from './style'

import { Footer } from '../../components/footer'

import { BiSolidPolygon } from "react-icons/bi"
import { CiSearch } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

import saladaRavanel from '../../images/saladaRavanel.png'

export function Pagamento() {
    return (
        <Container>
            <div className='navPag'>
                <div className='foodexplorer'>
                    <BiSolidPolygon className="icon" size={24}/>
                    <p>food explorer</p>
                </div>
                
                <div>
                    <CiSearch className="search"/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes"/>
                </div>
                
                <a href="{}">Meus favoritos</a>
                <a href="{}">Histórico de pedidos</a>

                <button type="submit">
                    <PiReceiptLight className="receipt"/>
                    <p>pedidos (0)</p>
                </button>

                <GoSignOut className="signOut"/>
            </div>
            
            <div className='pagamento'>
                <div className='meupedidos'>
                    <h1>Meus pedidos</h1>
                    <ul>
                        <li>
                            <img src={saladaRavanel} alt='' />
                            <p>1X salada Ravanel</p>
                            {/* <p>{}x {}</p> */}
                            {/* <p>{}</p> */}
                            <p className='price'>25,97</p>
                            <button type='button'>
                                excluir
                            </button>
                        </li>
                    </ul>
                    {/* <p>Total: R${}</p> */}
                    <p>Total: R$103,88</p>
                </div>
                
                <div>
                    <h1>Pagamento</h1>
                    <div>
                        <button type='button'>pix</button>
                        <button type='button'>crédito</button>

                    </div>
                </div>
            </div>

            <Footer/>
        </Container>
    )
}