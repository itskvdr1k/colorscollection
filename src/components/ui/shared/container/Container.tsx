import { PropsWithChildren } from "react";
import styles from './Container.module.scss'

interface ContainerInterface extends PropsWithChildren {
    className?: string
}

export default function Container({ children, className }: ContainerInterface) {
    return (    
        <div className={`${styles.container} ${className ? className : ""}`}>
            {children}
        </div>
    )
}