import LayoutContainer from '../LayoutContainer'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <LayoutContainer>
                <div className={`${styles.header__body} glass__effect`}>
                    <h1 className={styles.header__title}>
                        Colors
                    </h1>
                </div>
            </LayoutContainer>
        </header>
    )
}