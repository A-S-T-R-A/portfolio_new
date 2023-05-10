import styles from "./Main.module.css"
import Hero from "./Hero/Hero"
import { PlanetAnimation } from "./PlanetAnimation/PlanetAnimation"

const height = window.innerHeight

function Main() {
    return (
        <main className={styles.wrapper} id="home" style={{ minHeight: `${height}px` }}>
            <section className={styles.container}>
                <Hero />
                <PlanetAnimation />
            </section>
        </main>
    )
}

export default Main
