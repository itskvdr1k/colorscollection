'use client'

import ColorPickerControl from "./ColorPickerControl"
import styles from './ColorPicker.module.scss'
import { useColorContext } from "@/contexts/ColorContext"
import Container from "../shared/container/Container"
import Section from "../shared/section/Section"
import ColorPickerSave from "./ColorPickerSave"

export default function ColorPicker() {
    const {redValue, setRedValue, blueValue, setBlueValue, greenValue, setGreenValue} = useColorContext()
    return (
        <Container className={`${styles.colorPicker}  glass__effect`}>
            <Section sectionTitle="Picker">
                <div className={styles.colorPicker__body}>
                    <div className={styles.colorPicker__controls}>
                        <ColorPickerControl 
                            minValue={255} 
                            maxValue={0} 
                            value={redValue} 
                            setValue={value => setRedValue(value)}
                        />
                        <ColorPickerControl 
                            minValue={255} 
                            maxValue={0} 
                            value={greenValue} 
                            setValue={value => setGreenValue(value)}
                        />
                        <ColorPickerControl 
                            minValue={255} 
                            maxValue={0} 
                            value={blueValue} 
                            setValue={value => setBlueValue(value)}
                        />
                    </div>
                </div>
                <ColorPickerSave/>
            </Section>
        </Container>
    )
}