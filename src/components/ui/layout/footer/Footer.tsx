import LayoutContainer from '../LayoutContainer'
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <LayoutContainer>
                <div className={`${styles.footer__body} glass__effect`}>
                    Copyright by <a href="https://instagram.com/kvdr1k">kvdr1k</a>
                </div>
            </LayoutContainer>
        </footer>
    )
}