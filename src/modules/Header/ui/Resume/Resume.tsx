import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./Resume.module.scss"

export function Resume() {
    function clickHandler() {
        window.open("/cv.pdf", "_blank")
    }

    return (
        <Button color={ButtonColor.INVERTED} className={styles.btn} onClick={clickHandler}>
            Resume
        </Button>
    )
}
