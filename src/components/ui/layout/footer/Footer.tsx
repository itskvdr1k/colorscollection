import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <footer className={`${styles.footer} glass__effect`}>
            Copyright by <a href="https://instagram.com/kvdr1k">kvdr1k</a>
        </footer>
    )
}