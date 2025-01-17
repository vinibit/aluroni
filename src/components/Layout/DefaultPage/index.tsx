import { PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './DefaultPage.module.scss'
import temaStyles from 'styles/Tema.module.scss'

export default function DefaultPage() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <div className={temaStyles.container}>
                <Outlet />                
            </div>
        </>
    )
}