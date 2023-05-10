import { ITechnologyItem, technologiesData } from "../../const/data"
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

function ListItem({ data }: { data: ITechnologyItem }) {
    const { title, img } = data
    return (
        <div className={styles.item}>
            <div className={styles.imgContainer}>
                <img src={img} alt="" className={styles.img} />
            </div>
            <p className={styles.title}>{title}</p>
        </div>
    )
}
