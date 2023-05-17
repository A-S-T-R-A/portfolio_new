import styles from "./Main.module.css"
import Hero from "./Hero/Hero"
/* import { PlanetAnimation } from "./PlanetAnimation/PlanetAnimation" */
import { ScrollIcon } from "shared/ui/ScrollIcon/ScrollIcon"

const height = window.innerHeight

function Main() {
    return (
        <main className={styles.wrapper} id="home" style={{ minHeight: `${height}px` }}>
            <section className={styles.container}>
                <Hero />
                <div className={styles.placeholder} />
            </section>
            <ScrollIcon className={styles.icon} query="#projects" />
        </main>
    )
}

export default Main
