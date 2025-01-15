import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultPage from 'components/Layout/DefaultPage'
import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Menu from 'components/Menu'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        
        <Routes>
          <Route path='/' element={<DefaultPage />} >
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
          <Route path='/sobre' element={<p>Sobre o site...</p>} />
        </Routes>
      </Router>
    </main>
  )
}