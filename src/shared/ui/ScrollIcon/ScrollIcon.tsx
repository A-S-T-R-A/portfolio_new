import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ScrollIcon.module.scss"

export function ScrollIcon({ className }: { className?: string }) {
    function clickHandler() {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={classNames(styles.container, {}, [className])} onClick={clickHandler}>
            <div className={styles.ball} />
        </div>
    )
}
