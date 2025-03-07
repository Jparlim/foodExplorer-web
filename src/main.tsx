import { StrictMode } from 'react'
import { SignUp } from './pages/signUp/index.tsx'
import { SignIn } from "./pages/signIn"
import { Description } from "./pages/descriptions/index.tsx"

import { Refeiç } from "./components/refeições"
import { createRoot } from 'react-dom/client'

import { Home } from "./pages/home/main"
import { HomeADM } from "./pages/homeADM/main.tsx"

import { DescriptionADM } from "./pages/descriptionsADM/main.tsx"

import { Adicionar } from "./pages/adicionarpratos/main.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Adicionar/>
  </StrictMode>
)
