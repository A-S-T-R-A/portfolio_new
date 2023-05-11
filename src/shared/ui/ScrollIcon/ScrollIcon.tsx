import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ScrollIcon.module.scss"

export function ScrollIcon({ className, onClick }: { className?: string; onClick?: () => void }) {
    return (
        <div className={classNames(styles.container, {}, [className])} onClick={onClick}>
            <div className={styles.ball} />
        </div>
    )
}
