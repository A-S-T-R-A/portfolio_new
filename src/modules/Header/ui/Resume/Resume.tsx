import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./Resume.module.scss"

export function Resume({ onClick }: { onClick: () => void }) {
    return (
        <Button color={ButtonColor.INVERTED} className={styles.btn} onClick={onClick}>
            Resume
        </Button>
    )
}
