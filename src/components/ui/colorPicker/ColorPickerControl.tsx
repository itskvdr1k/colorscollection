'use client'

import { ColorPickerControlInterface } from "@/interfaces/colorPicker";
import styles from './ColorPicker.module.scss'

export default function ColorPickerControl({ minValue, maxValue, value, setValue }: ColorPickerControlInterface) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value
        if (isNaN(parseInt(value))) {
            value = "0"
        }
        setValue(Math.min(255, Number(value)).toString())
    }
    return (
        <input 
            type="number" 
            className={styles.colorPicker__control} 
            value={value}
            onChange={e => handleChange(e)}
            min={minValue}
            max={maxValue}
        />
    )
}