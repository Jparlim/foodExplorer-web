import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./pages/home/main"
import { SignUp } from './pages/signUp/index.tsx'
import { SignIn } from "./pages/signIn"
import { Description } from "./pages/descriptions/index.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Description/>
  </StrictMode>
)
