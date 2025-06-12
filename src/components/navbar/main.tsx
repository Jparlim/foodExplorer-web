import { Container } from "./styles";
import { BiSolidPolygon } from "react-icons/bi"
import { CiSearch } from "react-icons/ci";
import { PiReceiptLight } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

export function NavBar() {
    return (
        <Container>
            <div className="div2">
                <div className="food">
                    <div>
                        <BiSolidPolygon className="icon" size={24}/>
                        <p>food explorer</p>
                    </div>

                    <CiSearch className="search"/>
                    <input type="text" placeholder="Busque por pratos ou ingredientes"/>
                </div>

                <button type="submit">
                    <PiReceiptLight className="receipt"/>
                    <p>pedidos (0)</p>
                </button>

                <GoSignOut className="signOut">{}</GoSignOut>
            </div>
        </Container>
    )
}