import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg'

import styles from './NotFound.module.scss'
import temaStyles from 'styles/Tema.module.scss'

export default function NotFound() {

    const navigate = useNavigate()

    return (
        <div className={classNames({
            [styles.container]: true,
            [temaStyles.container]: true            
        })}>
            <div className={styles.voltar}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImage />
        </div>
    )
}