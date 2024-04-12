import { BsArrowRightCircle } from "react-icons/bs"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./Hero.module.scss"

function Hero() {
    function clickHandler() {
        window.open("/cv.pdf", "_blank")
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.greeting}>
                Hi! My name is Artur
                <br />
                I'm a <span className={styles.accent}>Front End Developer</span>
            </h1>
            <p className={styles.text}>
                A passionate frontend developer with 7+ years of experience in React, Next.js and
                Typescript. Committed to continuous learning and staying up-to-date with the latest
                technologies.
            </p>
            <div className={styles.connectContainer}>
                <Button
                    onClick={clickHandler}
                    variant={ButtonVariant.CLEAR}
                    className={styles.connect}
                >
                    <p>My Resume</p>
                    <BsArrowRightCircle className={styles.icon} />
                </Button>
            </div>
        </div>
    )
}

export default Hero
