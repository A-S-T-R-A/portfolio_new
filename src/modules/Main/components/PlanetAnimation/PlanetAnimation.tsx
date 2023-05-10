import React from "react"
import styles from "./PlanetAnimation.module.css"
import { planet, satellite, bigSatellite } from "shared/assets/images/mainSection"

export function PlanetAnimation() {
    return (
        <div className={styles.imgContainer}>
            <img src={planet} alt="planet Img" className={styles.planet} />
            <img src={satellite} alt="satellite" className={styles.satellite} />
            <img src={bigSatellite} alt="Big satellite" className={styles.bigSatellite} />
        </div>
    )
}
