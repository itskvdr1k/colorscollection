import { ColorContextProvider } from "@/contexts/ColorContext";
import { TabContextProvider } from "@/contexts/TabContext";
import { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
    return (
        <ColorContextProvider>
            <TabContextProvider>
                {children}
            </TabContextProvider>
        </ColorContextProvider>
    )
}