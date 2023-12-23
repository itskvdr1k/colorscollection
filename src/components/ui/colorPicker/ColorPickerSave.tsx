'use client'

import { useColorContext } from '@/contexts/ColorContext'
import styles from './ColorPicker.module.scss'
import { useEffect, useState } from 'react'

export default function ColorPickerSave() {
    const {addColor, redValue, greenValue, blueValue, isColorInColors} = useColorContext()
    const [saved, setSaved] = useState(false)
    const handleClick = () => {
        addColor(redValue, greenValue, blueValue)
        setSaved(true)
    }
    useEffect(() => {
        setSaved(false)
    }, [redValue, greenValue, blueValue])
    return (
        <button className={styles.colorPicker__save} onClick={handleClick} disabled={saved}>
            {saved ? "Saved" : "Save"}
        </button>
    )
}