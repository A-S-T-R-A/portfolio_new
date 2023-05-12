import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./Resume.module.scss"
import { classNames } from "shared/lib/classNames/classNames"

export function Resume({ className }: { className?: string }) {
    function clickHandler() {
        window.open("/cv.pdf", "_blank")
    }

    return (
        <Button
            color={ButtonColor.INVERTED}
            className={classNames(styles.btn, {}, [className])}
            onClick={clickHandler}
        >
            Resume
        </Button>
    )
}
