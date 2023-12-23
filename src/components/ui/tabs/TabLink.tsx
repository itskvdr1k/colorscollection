'use client'

import { TabLinkInterface } from "@/interfaces/tabs";
import styles from './Tab.module.scss'
import { useTabContext } from "@/contexts/TabContext";

export default function TabLink({ name, linkId }: TabLinkInterface) {
    const {activeTabId, setActiveTabId} = useTabContext()
    const handleClick = () => {
        setActiveTabId(linkId)
    }
    return (
        <button 
            className={`${styles.tab__link} ${activeTabId === linkId ? styles.active : ""} glass__effect`} 
            onClick={handleClick}
        >
            {name}
        </button>
    )
}