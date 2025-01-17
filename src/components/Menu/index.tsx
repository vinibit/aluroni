import { ReactComponent as Logo }  from 'assets/logo.svg'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

export default function Menu() {

    const routes = [
        { label: 'Início', path: "/" },
        { label: 'Cardápio', path: '/cardapio' },
        { label: 'Sobre', path: '/sobre' },
        { label: 'Admin', path: '/admin/vini' },
        { label: 'Simple User', path: '/admin/dino' }
    ]

    return (
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.menu__link}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}