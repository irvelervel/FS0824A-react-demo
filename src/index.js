import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// createRoot è un metodo di React che sulla base di un contenitore HTML
// crea una "root", ovvero una base di partenza per il nostro progetto React
const root = ReactDOM.createRoot(document.getElementById('root'))
// su questa radice montiamo <App />, il nostro primo COMPONENTE REACT
root.render(<App />)
