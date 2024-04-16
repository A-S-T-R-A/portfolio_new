import { ExperienceCard } from "../ExperienceCard/ExperienceCard"
import styles from "./ExperienceList.module.scss"
import { ExperienceMockData } from "modules/Experience/const/const"

export function ExperienceList() {
    const desktop = window.innerWidth > 768

    return (
        <div className={styles.container}>
            <div className={styles.timeLine} />
            {ExperienceMockData.map((card, index) => {
                const isReverted = index % 2 === 0
                return <ExperienceCard key={index} {...card} isReverted={isReverted && desktop} />
            })}
        </div>
    )
}
