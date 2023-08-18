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
                Hi, my name is Artur. I am software engineer with more than 5 years of experience
                with such technologies: React, Redux, TS. I worked in such business domains as:
                E-commerce, Real Estate and Communication/Messaging.
            </p>
            <Button onClick={clickHandler} variant={ButtonVariant.CLEAR} className={styles.connect}>
                <p>My Resume</p>
                <BsArrowRightCircle className={styles.icon} />
            </Button>
        </div>
    )
}

export default Hero
