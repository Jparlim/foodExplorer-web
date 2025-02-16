import { Container } from "./style";
import { CiHeart } from "react-icons/ci";

interface SnackRequest {
    title: string
    subTitle: string
    bravery: number
}

export function Snack({ title="Spaguetti Gambe", subTitle="Massa fresca com camarões e pesto.", bravery= }: SnackRequest) {
    return (
        <Container>
            <CiHeart/>

            <img src="" alt="" />

            <h1>${title}</h1>
            <p>${subTitle}</p>

            <h1>${bravery}</h1>

        </Container>
    )
}