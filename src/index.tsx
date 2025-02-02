import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.css'
import Cardapio from './pages/Cardapio'
import Inicio from './pages/Inicio'
import Router from 'routes'

const compAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
