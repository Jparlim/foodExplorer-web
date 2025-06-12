import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Routesapp } from "./routes/index.js"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routesapp/>
  </StrictMode>
)
