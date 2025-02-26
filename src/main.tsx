import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from "./pages/home/main"
import { SignUp } from './pages/signUp/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignUp/>
  </StrictMode>
)
