import { useState } from "react"
import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./Resume.module.scss"
import pdf from "shared/assets/resume/cv.pdf"

export function Resume() {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            {isVisible && <iframe src={pdf} className={styles.pdf}></iframe>}
            <Button
                color={ButtonColor.INVERTED}
                className={styles.btn}
                onClick={() => setIsVisible(true)}
            >
                Resume
            </Button>
        </>
    )
}
