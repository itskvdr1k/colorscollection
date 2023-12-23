'use client'

import { useColorContext } from "@/contexts/ColorContext";
import Container from "../shared/container/Container";
import Section from "../shared/section/Section";
import ProfileColor from "./ProfileColor";
import styles from './Profile.module.scss'

export default function Profile() {
    const {colors} = useColorContext()
    return (
        <Container className="glass__effect">
            <Section sectionTitle="Colors">
                {
                    colors.length !== 0 
                    ?
                        <div className={styles.profile__colors}>
                            {colors.map((color, key: number) => {
                                return <ProfileColor key={key} {...color} />
                            })}
                        </div>
                    :
                        <h3 className={styles.profile__title}>No colors yet</h3>
                }
            </Section> 
        </Container>
    )
}