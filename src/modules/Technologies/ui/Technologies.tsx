import { TechnologiesList } from "./TechnologiesList/TechnologiesList"
import styles from "./Technologies.module.scss"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"

function Technologies() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Typography variant={TypographyVariant.H1} className={styles.title} isBold>
                    Technologies
                </Typography>
                <div className={styles.content}>
                    <TechnologiesList />
                </div>
            </div>
        </div>
    )
}

export default Technologies
