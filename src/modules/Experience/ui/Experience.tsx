import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Experience.module.scss"
import { ExperienceList } from "./ExperienceList/ExperienceList"
import { classNames } from "shared/lib/classNames/classNames"

export function Experience({ shown }: { shown: string }) {
    return (
        <div className={styles.wrapper} id="experience">
            <div
                className={classNames(
                    styles.container,
                    { [styles.shown]: shown === "Experience" },
                    []
                )}
            >
                <Typography variant={TypographyVariant.H1} className={styles.title} isBold>
                    Experience
                </Typography>
                <div className={styles.content}>
                    <ExperienceList />
                </div>
            </div>
        </div>
    )
}
