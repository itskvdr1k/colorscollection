'use client'

import { useTabContext } from "@/contexts/TabContext";
import { PropsWithChildren } from "react";
import styles from './Tab.module.scss'

interface IProps extends PropsWithChildren {
    tabId: number
}

export default function Tab({ children, tabId }: IProps) {
    const {activeTabId} = useTabContext()
    return (
        <div className={`${styles.tab} ${tabId === activeTabId ? styles.active : ""}`}>
            {children}
        </div>
    )
}