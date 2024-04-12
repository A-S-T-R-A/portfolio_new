import styles from "./Main.module.css"
import Hero from "./Hero/Hero"
import { AnimatedScroll } from "shared/ui/AnimatedScroll/AnimatedScroll"

const height = window.innerHeight

function Main() {
    return (
        <main className={styles.wrapper} id="home" style={{ minHeight: `${height}px` }}>
            <section className={styles.container}>
                <Hero />
            </section>
            <AnimatedScroll
                className={styles.scrollDown}
                query="#projects"
                height="60px"
                width="60px"
            />
        </main>
    )
}

export default Main
