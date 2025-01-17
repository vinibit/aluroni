import cardapio from 'data/cardapio.json'
import styles from './Inicio.module.scss'
import temaStyles from 'styles/Tema.module.scss'
import nossaCasa from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import { Prato } from 'types/Prato'

export default function Inicio() {

  const pratosCaradapio = [...cardapio]
  const pratosRecomendados = pratosCaradapio.sort(() => Math.random() - 0.5).splice(0, 4)
  const navigate = useNavigate()

  function redirecionarParaDetalhes(prato: Prato) {
    console.log(prato)		
    navigate(`/prato/${prato.id}`, 
      { 
        state: { prato }, 
        replace: false
      })
  }

  return (
    <section>
      <h3 className={temaStyles.titulo}>
				Sugestões do chefe
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((prato) => (
          <div key={prato.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(prato)}>
							Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={temaStyles.titulo}>
				Nossa casa
      </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={styles.nossaCasa__endereco}>
					Rua Niterói, 238 <br /> São Vicente - SP
        </div>
      </div>
    </section>
  )
}