import { createRoot } from 'react-dom/client'
import './assets/reset.scss'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

const base = import.meta.env.BASE_URL;

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>
)
