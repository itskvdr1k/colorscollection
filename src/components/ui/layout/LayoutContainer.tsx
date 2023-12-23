import { PropsWithChildren } from "react";

export default function LayoutContainer({ children }: PropsWithChildren) {
    return (
        <div className="wrapper__container">
            {children}
        </div>
    )
}