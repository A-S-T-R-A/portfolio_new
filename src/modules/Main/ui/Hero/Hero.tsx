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
                My name is Artur Pazyniuk. I'm a motivated and skilled software engineer with 5
                years of specializing in building exceptional user experiences.
                <br />
                My tech stack is React, Redux, TS, SCSS.
            </p>
            <Button onClick={clickHandler} variant={ButtonVariant.CLEAR} className={styles.connect}>
                <p>My Resume</p>
                <BsArrowRightCircle className={styles.icon} />
            </Button>
        </div>
    )
}

export default Hero
