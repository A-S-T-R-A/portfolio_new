import styles from "./FailContent.module.css"

export function FailContent() {
    return (
        <p className={styles.info}>
            Error
            <br /> Please try again later
        </p>
    )
}
