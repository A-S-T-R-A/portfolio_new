import { useEffect, useState } from "react"
import styles from "./Background.module.scss"
import { getPosition } from "./lib/getPosition"

export function Background() {
    const [planetPosition, setPlanetPosition] = useState(400)
    const [starsPosition, setStarsPosition] = useState(0)

    function scrollHandler() {
        setPlanetPosition(getPosition(400, 430))
        setStarsPosition(getPosition(0, 10))
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <>
            <div
                className={styles.stars}
                style={{ backgroundPosition: `50% ${starsPosition}px` }}
            />
            <div
                className={styles.planet}
                style={{ backgroundPosition: `50% ${planetPosition}px` }}
            />
        </>
    )
}
