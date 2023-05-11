import Form from "./Form/ui/Form"
import styles from "./Contact.module.scss"

export function Contact() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Form />
            </div>
        </div>
    )
}
