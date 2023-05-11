import styles from "./Projects.module.scss"
import { projectsData as data } from "../const/data"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Project } from "./Project/Project"

export function Projects() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H1} className={styles.title}>
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
