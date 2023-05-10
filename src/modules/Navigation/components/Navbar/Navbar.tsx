import React from "react"
import styles from "./Navbar.module.css"

import { SocialIcons } from "shared/components/SocialIcons"
import { NavigationList } from "../common"

export function Navbar() {
    return (
        <div className={styles.navBar}>
            <NavigationList />
            <SocialIcons />
        </div>
    )
}
