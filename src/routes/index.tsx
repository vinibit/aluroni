import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Inicio from 'pages/Inicio'
import Cardapio from 'pages/Cardapio'
import Menu from 'components/Menu'

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />
        <header className={styles.header}>
          <div className={styles.header__text}>
            A casa do código e da massa
          </div>
        </header>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/cardapio' element={<Cardapio />} />
          <Route path='/sobre' element={null} />
        </Routes>
      </Router>
    </main>
  )
}