import { Prato } from 'types/Prato'
import styles from './Tags.module.scss'
import classNames from 'classnames'

const Tags: React.FC<Prato> = ({ 
  category,
  size,
  serving,
  price
}) => {    
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true, 
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={styles.tags__qtdpessoas}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
                Serve {serving} pessoa{serving > 1 ? 's' : ''}
      </div>
      <div className={styles.tags__valor}>
                R$ {price.toFixed(2)}
      </div>
    </div>
  )
}

export default Tags