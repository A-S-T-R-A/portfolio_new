import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ModalData.module.scss"

export function ModalDataShop() {
    return (
        <>
            <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                Please use following credit card data for Stripe payment testing
            </Typography>
            <div className={styles.creditCardData}>
                <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                    4242 4242 4242 4242
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                    42/42
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                    424
                </Typography>
            </div>
        </>
    )
}

export function ModalDataBlog() {
    return (
        <>
            <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                Please use following data to login
            </Typography>
            <div>
                <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                    Login: admin123
                </Typography>
                <Typography color={TypographyColor.DARK_GRAY} variant={TypographyVariant.H4}>
                    Password: admin123
                </Typography>
            </div>
        </>
    )
}
