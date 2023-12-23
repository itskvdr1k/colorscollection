import { SectionInterface } from "@/interfaces/section";
import styles from './Section.module.scss'

export default function Section({ sectionTitle, children }: SectionInterface) {
    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>{sectionTitle}</h2>
            <div className={styles.section__body}>
                {children}
            </div>
        </section>
    )
}