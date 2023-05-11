import styles from "./Header.module.css"
import Art1us from "shared/assets/images/art1us.png"
import { Navbar } from "./Navbar/Navbar"
import { Burger } from "./Burger/Burger"

export function Header() {
    return (
        <>
            <Burger className={styles.burger} />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.logoContainer}>
                        <img src={Art1us} className={styles.logo} alt="" />
                    </div>
                    <Navbar className={styles.navbar} />
                </div>
            </div>
        </>
    )
}
