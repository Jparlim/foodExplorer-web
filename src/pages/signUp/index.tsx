import { Container } from "./style"
import { BiSolidPolygon } from "react-icons/bi"


export function SignUp() {
    return (
        <Container>
            <div className="textexplorer">
                <BiSolidPolygon className="icon"/>
                <h1>food explorer</h1>
            </div>

            <div className="signUp">
                <h1>Crie sua conta</h1>

                <ul>
                    <li>
                        <p>seu nome</p>
                        <input type="text"
                        name="nickname"
                        id="#"
                        placeholder="Exemplo: Maria da Silva"/>
                    </li>
                </ul>

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