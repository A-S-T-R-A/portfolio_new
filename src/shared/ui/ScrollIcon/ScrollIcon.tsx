import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ScrollIcon.module.scss"

export function ScrollIcon({
    className,
    scrollTarget,
}: {
    className?: string
    scrollTarget?: HTMLElement | null
}) {
    function clickHandler() {
        if (!scrollTarget) return
        scrollTarget.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={classNames(styles.container, {}, [className])} onClick={clickHandler}>
            <div className={styles.ball} />
        </div>
    )
}
