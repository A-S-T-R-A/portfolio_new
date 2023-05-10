import React, { useState } from "react"
import styles from "./Burger.module.css"

import { BurgerIcon } from "./components"
import { BurgerNav } from "./components"

export function Burger() {
    const [showBurger, setShowBurger] = useState(false)

    function clickHandler(e) {
        e.stopPropagation()
        setShowBurger(false)
    }

    return (
        <div className={showBurger ? styles.wrapper : styles.displayNone} onClick={clickHandler}>
            <BurgerIcon showBurger={showBurger} setShowBurger={setShowBurger} />
            <BurgerNav showBurger={showBurger} setShowBurger={setShowBurger} />
        </div>
    )
}
