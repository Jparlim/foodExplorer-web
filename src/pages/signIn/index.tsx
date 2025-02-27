import { Container } from "./style"
import { BiSolidPolygon } from "react-icons/bi"

export function SignIn() {
    return (
        <Container>
            <div className="textexplorer">
                <BiSolidPolygon className="icon"/>
                <h1>food explorer</h1>
            </div>
        
            <div className="signUp">
                <h1>Faça login</h1>
                <ul>
                    <li>
                        <p>Email</p>
                        <input type="string"
                        name="Email"
                        id="#"
                        placeholder="Exemplo: exemplo@exemplo.com.br"/>
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Senha</p>
                        <input type="string"
                        name="senha"
                        id="#"
                        placeholder="No mínimo 6 caracteres"/>
                    </li>
                </ul>
    
                <button type="submit">entrar</button>
        
                <h2>Criar uma conta</h2>
            </div>
        </Container>
    )
}