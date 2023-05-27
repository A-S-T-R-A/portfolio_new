import { useCallback, useEffect, useRef, useState } from "react"
import styles from "./Background.module.scss"
import { getPosition } from "./lib/getPosition"
import { DeviceType, data } from "shared/data"

export function Background({ currentDevice }: { currentDevice: DeviceType }) {
    const dataRef = useRef(data[currentDevice])
    const [planetPosition, setPlanetPosition] = useState(() => dataRef.current.planet.min)
    const [starsPosition, setStarsPosition] = useState(() => dataRef.current.stars.min)

    const scrollHandler = useCallback(() => {
        const { min, max } = dataRef.current.planet
        const { min: minS, max: maxS } = dataRef.current.stars
        setPlanetPosition(getPosition(min, max))
        setStarsPosition(getPosition(minS, maxS))
    }, [])

    useEffect(() => {
        dataRef.current = data[currentDevice]
        scrollHandler()
    }, [currentDevice, scrollHandler])

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [scrollHandler])

    return (
        <>
            <div className={styles.stars} style={{ backgroundPosition: `0 ${starsPosition}px` }} />
            <div
                className={styles.planet}
                style={{
                    backgroundImage: `url(${dataRef.current.planet.img})`,
                    backgroundPosition: `0 ${planetPosition}px`,
                }}
            />
        </>
    )
}
