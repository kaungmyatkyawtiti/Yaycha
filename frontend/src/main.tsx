import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import ThemedApp from './ThemedApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
)
