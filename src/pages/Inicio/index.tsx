import React from 'react'
import cardapio from 'data/cardapio.json'
import styles from './Inicio.module.scss'
import Menu from 'components/Menu'

export default function Inicio() {

  const pratosCaradapio = [ ...cardapio ]
  const pratosRecomendados = pratosCaradapio.sort(() => Math.random() - 0.5).splice(0, 3)

  return (
    <section>      
      <h3 className={styles.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((prato) => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button className={styles.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}