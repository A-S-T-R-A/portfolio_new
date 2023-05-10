import { menuData } from "../../const/data"
import styles from "./NavigationList.module.css"

export function NavigationList({ closeClickHandler }: { closeClickHandler?: () => void }) {
    return (
        <ul className={styles.list}>
            {menuData.map(item => {
                return (
                    <li className={styles.item} key={item.id} onClick={closeClickHandler}>
                        <a href={item.link} className={styles.undreline}>
                            {item.text}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
