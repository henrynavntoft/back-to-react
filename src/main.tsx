import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@/components/theme-provider"
import Nav  from "@/components/Nav"
import Footer from '@/components/Footer.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Nav />
    <App />
    <Footer />
        </ThemeProvider>
  </StrictMode>,
)
