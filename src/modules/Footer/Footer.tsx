import { SocialIcons } from "shared/components/SocialIcons"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.wrapper} id="footer">
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.phone}>
                        <a className={styles.linkTitle} href="skype:live:artur0503915024">
                            Skype
                        </a>
                        <a className={styles.link} href="skype:live:artur0503915024">
                            Artur Pazyniuk
                        </a>
                    </div>
                    <div className={styles.email}>
                        <a className={styles.linkTitle} href="mailto:artur0503915024@gmail.com">
                            Email
                        </a>
                        <a className={styles.link} href="mailto:artur0503915024@gmail.com">
                            artur0503915024@gmail.com
                        </a>
                    </div>
                    <div className={styles.socialIcons}>
                        <SocialIcons className={styles.icons} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
