import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/components/themeProvider"
import Header  from "@/components/header"
import Footer from "@/components/footer"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Header />
    <App />
    <Footer />
        </ThemeProvider>
  </StrictMode>,
)
