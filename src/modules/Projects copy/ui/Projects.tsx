import styles from "./Projects.module.scss"
import { projectsData as data } from "../const/data"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Project } from "./Project/Project"
import { classNames } from "shared/lib/classNames/classNames"

export function Projects({ shown }: { shown: string }) {
    return (
        <div className={styles.wrapper} id="projects">
            <div
                className={classNames(
                    styles.container,
                    { [styles.shown]: shown === "Projects" },
                    []
                )}
            >
                <Typography variant={TypographyVariant.H1} className={styles.title} isBold>
                    My Projects
                </Typography>
                <div className={styles.projects}>
                    {data.map(item => (
                        <Project key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
