import { technologiesData } from "../../const/data"
import ListItem from "../ListItem/ListItem"
import styles from "./TechnologiesList.module.css"

export function TechnologiesList() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {technologiesData.map(item => (
                    <ListItem key={item.id} data={item} />
                ))}
            </ul>
        </div>
    )
}
