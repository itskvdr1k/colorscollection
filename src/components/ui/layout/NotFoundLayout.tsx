'use client'

import { useColorContext } from "@/contexts/ColorContext";
import { PropsWithChildren } from "react";

export default function NotFoundLayout({ children }: PropsWithChildren) {
    const {redValue, greenValue, blueValue} = useColorContext()
    return (
        <div className="wrapper" style={{ background: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}>
            {children}
        </div>
    )
}