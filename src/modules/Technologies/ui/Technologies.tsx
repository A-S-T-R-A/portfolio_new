import { TechnologiesList } from "./TechnologiesList/TechnologiesList"
import styles from "./Technologies.module.css"

function Technologies() {
    return (
        <div id="technologies">
            <p>Technologies</p>
            <p className={styles.text}>
                I've worked with a range of technologies in the web development world. From Frontend
                to Backend and design.
            </p>
            <div className={styles.content}>
                <TechnologiesList />
            </div>
        </div>
    )
}

export default Technologies
