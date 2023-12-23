'use client'

import { PropsWithChildren } from "react";
import Header from "./header/Header";
import { useColorContext } from "@/contexts/ColorContext";
import Footer from "./footer/Footer";
import LayoutContainer from "./LayoutContainer";

export default function Layout({ children }: PropsWithChildren) {
    const {redValue, blueValue, greenValue} = useColorContext()
    return (
        <div className="wrapper" style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}>
            <Header/>
            <main className="main">
                <div className="main__body">
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
}