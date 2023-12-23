import Link from "next/link";
import styles from './PageNotFound.module.scss'

export default function PageNotFound() {
    return (
        <div className={styles.pageNotFound}>
            <h2 className={styles.pageNotFound__title}>Page not found</h2>
            <Link href={"/"} className={styles.pageNotFound__link}>Home page</Link>
        </div>
    )
}