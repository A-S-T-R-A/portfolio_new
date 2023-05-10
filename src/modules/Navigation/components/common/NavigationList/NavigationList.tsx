import styles from "./NavigationList.module.css"
import { NavigationLink } from "../NavigationLink/NavigationLink"
import { menuData } from "../data"

export function NavigationList({ closeClickHandler }) {
    return (
        <ul className={styles.list}>
            {menuData.map(item => {
                return (
                    <NavigationLink key={item.id} link={item.link} onClick={closeClickHandler}>
                        {item.text}
                    </NavigationLink>
                )
            })}
        </ul>
    )
}
