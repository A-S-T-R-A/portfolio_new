import React from "react"
import styles from "./NavigationLink.module.css"

export function NavigationLink({ children, link, onClick }) {
    return (
        <li className={styles.item} onClick={onClick}>
            <a href={link} className={styles.undreline}>
                {children}
            </a>
        </li>
    )
}
