import { Container } from './style'

import { Footer } from '../../components/footer'

import { BiSolidPolygon } from "react-icons/bi"
import { CiSearch } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { FaPix } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";

import saladaRavanel from '../../images/saladaRavanel.png'
import elements from '../../images/elements.png'
import { useState } from 'react';

export function Pagamento() {

    const [ visible, setvisible ] = useState(false)

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
                
                <div className='pag'>
                    <h1>Pagamento</h1>
                    <div className='tableofthepag'>  
                        <div>
                            <button type='submit'><FaPix className='icon'/>Pix</button>
                            <button type='button'><CiCreditCard1 className='icon'/>Cartão</button>
                        </div>
                        { visible ? (
                            <img src={elements} alt="" />
                        ) : (
                        <div className='credito'>
                            <div>
                                <p>Número do cartão</p>
                                <input type="text" placeholder='0000 0000 0000 0000'/>
                            </div>
                            <div>
                                <div>
                                    <p>Validade</p>
                                    <input type='text' placeholder='00/00'/>
                                </div>
                                <div>
                                    <p>CVC</p>
                                    <input type='number' placeholder='000'/>
                                </div>
                            </div>
                            <button type='button'>Finalizar Pagamento</button>
                        </div>
                        )}
                    </div>
                </div>
            </div>


            <Footer/>
        </Container>
    )
}