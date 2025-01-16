/* eslint-disable react/react-in-jsx-scope */
import styles from './Cardapio.module.scss'
import temaStyles from 'styles/Tema.module.scss'

import { useState } from 'react'
import Buscador from './Buscador'
import Filtros from './Filtros'
import Ordenador from './Ordenador'
import Itens from './Itens'


export default function Cardapio() {
  const [busca, setBusca] = useState('')
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')
  return (      
    <section className={styles.cardapio}>
      <h3 className={temaStyles.titulo}>Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
    </section>    
  )
}