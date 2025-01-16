import styles from './Footer.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Logo />
            <p>Desenvolvido por Vini Dev.</p>
        </footer>
    )
}
