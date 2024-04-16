import { Typography, TypographyColor } from "shared/ui/Typography/Typography"
import styles from "./ExperienceCard.module.scss"
import { classNames } from "shared/lib/classNames/classNames"

interface IExperienceCardProps {
    logo: string
    position: string
    companyName: string
    term: string
    description: string
    technologies: string[]
    isReverted?: boolean
}

export function ExperienceCard(props: IExperienceCardProps) {
    const { logo, position, companyName, term, description, technologies, isReverted } = props

    return (
        <div className={classNames(styles.container, { [styles.reverted]: isReverted }, [])}>
            <div
                className={classNames(
                    styles.roundPicContainer,
                    { [styles.reverted]: isReverted },
                    []
                )}
            >
                <Typography color={TypographyColor.LIGHT_GRAY}>{term}</Typography>
                <div>
                    <img src={logo} alt="" className={styles.logo} />
                </div>
            </div>
            <div className={styles.arrow} />
            <div className={styles.cardContainer}>
                <div className={styles.header}>
                    <img src={logo} alt="logo" className={styles.logoCard} />
                    <div>
                        <Typography color={TypographyColor.LIGHT_GRAY} className={styles.position}>
                            {position}
                        </Typography>
                        <Typography
                            color={TypographyColor.LIGHT_GRAY}
                            className={styles.companyName}
                        >
                            {companyName}
                        </Typography>
                        <Typography color={TypographyColor.DARK_GRAY} className={styles.cardTerm}>
                            {term}
                        </Typography>
                    </div>
                </div>
                <Typography className={styles.description}>{description}</Typography>
                <div className={styles.skillsSection}>
                    <Typography>Skills:</Typography>
                    {technologies.map(technology => (
                        <Typography key={technology}>• {technology}</Typography>
                    ))}
                </div>
            </div>
        </div>
    )
}
