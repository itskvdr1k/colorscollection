'use client'

import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

export interface TabContextInterface {
    activeTabId: number,
    setActiveTabId: Dispatch<SetStateAction<number>>
}

const TabContext = createContext({} as TabContextInterface)

export const useTabContext = () => {
    return useContext(TabContext)
}

export const TabContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [activeTabId, setActiveTabId] = useState(1)
    return (
        <TabContext.Provider value={{ activeTabId, setActiveTabId }}>
            {children}
        </TabContext.Provider>
    )
}