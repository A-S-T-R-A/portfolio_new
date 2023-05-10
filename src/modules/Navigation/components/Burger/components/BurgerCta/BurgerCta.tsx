import React from "react"
import { SocialIcons } from "shared/components/SocialIcons"

export function BurgerCta({ closeClickHandler }) {
    return <SocialIcons onClick={closeClickHandler} />
}
