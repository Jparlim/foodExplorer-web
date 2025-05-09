import { Container } from './style'

import { Footer } from '../../components/footer'

import { BiSolidPolygon } from "react-icons/bi"
import { CiSearch } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";


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
                <p>teste</p>
            </div>

            <Footer/>
        </Container>
    )
}