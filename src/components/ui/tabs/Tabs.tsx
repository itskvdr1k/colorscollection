import { TabsPropsInterface } from "@/interfaces/tabs";
import { PropsWithChildren } from "react";
import TabLink from "./TabLink";
import styles from './Tab.module.scss'

interface IProps extends TabsPropsInterface, PropsWithChildren {}

export default function Tabs({ children, tabLinks }: IProps) {
    return (
        <div className={styles.tabs}>
            <div className={styles.tabs__links}>
                {tabLinks.map((tabLink, key: number) => {
                    return <TabLink {...tabLink} key={key}/>
                })}
            </div>
            <div className={styles.tabs__wrapper}>
                {children}
            </div>
        </div>
    )
}