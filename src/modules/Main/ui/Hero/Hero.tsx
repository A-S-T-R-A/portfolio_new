import { BsArrowRightCircle } from "react-icons/bs"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./Hero.module.scss"

function Hero() {
    function clickHandler() {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.greeting}>
                Hi! My name is Artur
                <br />
                I'm Artur
            </h1>
            <p className={styles.text}>
                My name is Artur Pazyniuk. I'm a software engineer specializing in building
                (ocasionally designing) exceptional user experiences.
                <br />
                Let's make something special together.
            </p>
            <Button onClick={clickHandler} variant={ButtonVariant.CLEAR} className={styles.connect}>
                Let’s Connect <BsArrowRightCircle className={styles.icon} />
            </Button>
        </div>
    )
}

export default Hero