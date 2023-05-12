import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ModalData.module.scss"

export function ModalDataShop() {
    return (
        <>
            <Typography color={TypographyColor.LIGHT_GRAY} variant={TypographyVariant.H3} isBold>
                Payment testing data
            </Typography>
            <div className={styles.creditCardData}>
                <Typography color={TypographyColor.DARK_GRAY}>
                    <span className={styles.title}>Card number:</span> <br />
                    4242 4242 4242 4242
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    <span className={styles.title}>Valid through:</span> 42/42
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    <span className={styles.title}>CVV:</span> 424
                </Typography>
            </div>
        </>
    )
}

export function ModalDataBlog() {
    return (
        <>
            <Typography color={TypographyColor.LIGHT_GRAY} variant={TypographyVariant.H3} isBold>
                Login Data
            </Typography>
            <div className={styles.loginData}>
                <Typography color={TypographyColor.DARK_GRAY}>
                    <span className={styles.title}>Login:</span> admin123
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY}>
                    <span className={styles.title}>Password:</span> admin123
                </Typography>
            </div>
        </>
    )
}
