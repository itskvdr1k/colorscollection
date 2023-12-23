export interface ColorPickerControlInterface {
    minValue: number,
    maxValue: number,
    value: string,
    setValue: (value: string) => void
}
export interface ColorInterface {
    redValue: string,
    blueValue: string,
    greenValue: string
}