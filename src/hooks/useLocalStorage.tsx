import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        const savedValue = localStorage.getItem(key)
        if (!savedValue) return
        const newValue = JSON.parse(savedValue)
        setValue(newValue)
    }, [])
    useEffect(() => {
        if (JSON.stringify(value) === JSON.stringify(initialValue)) return
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}
