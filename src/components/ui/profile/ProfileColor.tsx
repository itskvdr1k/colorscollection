'use client'

import { ColorInterface } from "@/interfaces/colorPicker";
import styles from './Profile.module.scss'
import { useColorContext } from "@/contexts/ColorContext";
import { useTabContext } from "@/contexts/TabContext";

export default function ProfileColor({ redValue, greenValue, blueValue }: ColorInterface) {
    const {removeColor, setBlueValue, setGreenValue, setRedValue } = useColorContext()
    const {setActiveTabId} = useTabContext()
    const handleRemove = () => {
        removeColor(redValue, greenValue, blueValue)
    }
    const handleClick = (e: any) => {
        if (e.target.classList.contains("profile__palette")) {
            setRedValue(redValue)
            setGreenValue(greenValue)
            setBlueValue(blueValue)
            setActiveTabId(1)
        }
    }
    return (
        <div className={styles.profile__color} onClick={handleClick}>
            <div 
                className={`${styles.profile__rgb} profile__palette`} 
                style={{ background: `rgb(${redValue}, ${greenValue}, ${blueValue})`}}
            />
            <button className={styles.profile__delete} onClick={handleRemove}>remove</button>
        </div>
    )
}
