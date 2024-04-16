import { Experience } from "modules/Experience/ui/Experience"
import { Projects } from "modules/Projects"
import { useState } from "react"
import { Button, ButtonColor } from "shared/ui/Button/Button"
import styles from "./ExperienceAndProjects.module.scss"

export function ExperienceAndProjects() {
    const [shownSection, setShownSection] = useState("Experience")

    console.log(shownSection)
    return (
        <div className={styles.container}>
            <div className={styles.buttonsContainer}>
                <Button
                    onClick={() => setShownSection("Projects")}
                    disabled={shownSection === "Projects"}
                    className={styles.button}
                    color={shownSection !== "Projects" ? ButtonColor.INVERTED : ButtonColor.ACCENT}
                >
                    Projects
                </Button>
                <Button
                    onClick={() => setShownSection("Experience")}
                    disabled={shownSection === "Experience"}
                    className={styles.button}
                    color={
                        shownSection !== "Experience" ? ButtonColor.INVERTED : ButtonColor.ACCENT
                    }
                >
                    Experience
                </Button>
            </div>
            <Projects shown={shownSection} />
            <Experience shown={shownSection} />
        </div>
    )
}
