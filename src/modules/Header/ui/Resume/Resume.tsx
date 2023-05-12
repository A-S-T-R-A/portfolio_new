import { useState } from "react"
import { Document, Page } from "react-pdf/dist/esm/entry.vite"
import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./Resume.module.scss"
import pdf from "shared/assets/resume/cv.pdf"

export function Resume() {
    // const [isVisible, setIsVisible] = useState(false)

    function clickHandler() {
        window.open("/cv.pdf", "_blank")
    }

    return (
        <>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                Open PDF
            </a>
            <Button color={ButtonColor.INVERTED} className={styles.btn} onClick={clickHandler}>
                Resume
            </Button>
        </>
    )
}
