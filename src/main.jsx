import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/tailwind.css";
import "./styles/main.css";
import App from './App.jsx'
import './i18n';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)