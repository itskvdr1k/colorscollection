'use client'

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ColorInterface } from "@/interfaces/colorPicker";
import { FC, PropsWithChildren, SetStateAction, createContext, useContext, Dispatch, useState, useCallback, use, useEffect, useLayoutEffect } from "react";

export interface ColorContextInterface {
    redValue: string,
    setRedValue: Dispatch<SetStateAction<string>>,
    greenValue: string,
    setGreenValue: Dispatch<SetStateAction<string>>,
    blueValue: string,
    setBlueValue: Dispatch<SetStateAction<string>>,
    colors: ColorInterface[],
    addColor: (redValue: string, greenValue: string, blueValue: string) => void,
    removeColor: (redValue: string, greenValue: string, blueValue: string) => void,
    isColorInColors: (redValue: string, greenValue: string, blueValue: string) => ColorInterface | undefined
}

const ColorContext = createContext({} as ColorContextInterface)

export const useColorContext = () => {
    return useContext(ColorContext)
}

export const ColorContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [colors, setColors] = useLocalStorage<ColorInterface[]>("colors", [{redValue: "-1", blueValue: "-1", greenValue: "-1"}] as ColorInterface[])

    const [redValue, setRedValue] = useState("")
    const [greenValue, setGreenValue] = useState("")
    const [blueValue, setBlueValue] = useState("")

    const generateRandomColor = useCallback(() => {
        return Math.floor(Math.random() * 257)
    }, [])

    const isColorInColors = useCallback((redValue: string, greenValue: string, blueValue: string) => {
        return colors.find(color => {
            return (color.blueValue === blueValue) && (color.redValue === redValue) && (color.greenValue === greenValue)
        })
    }, [colors])

    const addColor = useCallback((redValue: string, greenValue: string, blueValue: string) => {
        if (!isColorInColors(redValue, greenValue, blueValue)) {
            setColors((prev) => {
                const newColor: ColorInterface = {redValue, greenValue, blueValue}
                return [...prev, newColor]
            })
        }
    }, [setColors, colors])

    const removeColor = useCallback((redValue: string, greenValue: string, blueValue: string) => {
        setColors(prev => {
            return prev.filter(color => {
                const expr = (color.redValue === redValue) && (color.greenValue === greenValue) && (color.blueValue === blueValue)
                return !expr
            })
        })
    }, [setColors])

    useLayoutEffect(() => {
        setRedValue(generateRandomColor().toString())
        setGreenValue(generateRandomColor().toString())
        setBlueValue(generateRandomColor().toString())   
    }, [setBlueValue, setGreenValue, setRedValue])

    return (
        <ColorContext.Provider value={{ redValue, blueValue, greenValue, setRedValue, setGreenValue, setBlueValue, colors, addColor, removeColor, isColorInColors }}>
            {children}
        </ColorContext.Provider>
    )
}