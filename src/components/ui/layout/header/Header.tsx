import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={`${styles.header} glass__effect`}>
            <h1 className={styles.header__title}>
                Palette
            </h1>
        </header>
    )
}