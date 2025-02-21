import { Container } from "./style";
import { Refeiç, Pratos } from "../refeições/index"

export function BoxRefeições() {
    // Filtra apenas os pratos da categoria "refeições"
    const refeicoes = Pratos.filter(prato => prato.categoria === "refeições");
    const sobremesa = Pratos.filter(prato => prato.categoria === "sobremesas");
    const bebidas = Pratos.filter(prato => prato.categoria === "bebidas");

    return (
        <Container>
            <h1>refeições</h1>
            <div>
                {refeicoes.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title} 
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
            </div>

            <h1>sobremesas</h1>
            <div>
                {sobremesa.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title} 
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
            </div>
            
            <h1>bebidas</h1>
            <div>
                {bebidas.map((prato) => (
                    <Refeiç 
                        key={prato.id} 
                        title={prato.title} 
                        subtitle={prato.subtitle} 
                        value={prato.value} 
                        id={prato.id} 
                        categoria={prato.categoria} 
                    />
                ))}
            </div>

            <div className="boxnextleft"/>
        </Container>
    );
}
