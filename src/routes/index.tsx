import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultPage from 'components/Layout/DefaultPage'
import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Sobre from 'pages/Sobre'
import Menu from 'components/Menu'
import Footer from 'components/Layout/Footer'

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
          <Route path='/sobre' element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}