import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Prato as DadosPrato } from 'types/Prato'
import styles from './Prato.module.scss'
import Tags from 'components/Tags'

const PratoDetalhes: React.FC<{prato: DadosPrato}> = ({ prato }) => {    
  const navigate = useNavigate()
  return (
    <>
      <button className={styles.voltar}
        onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}></h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <Tags {...prato} />
      </section>
    </>
  )
}

export default PratoDetalhes