import { BurgerCta } from ".."
import { NavigationList } from "../../../common"
import styles from "./BurgerNav.module.css"

export function BurgerNav({ showBurger, setShowBurger }) {
    function menuClickHandler(e) {
        e.stopPropagation()
    }

    function closeClickHandler() {
        setTimeout(() => {
            setShowBurger(false)
        }, 20)
    }

    return (
        <div
            className={`${styles.overlay} ${showBurger ? styles.navOpen : ""}`}
            onClick={closeClickHandler}
        >
            <div className={styles.wrapper} onClick={menuClickHandler}>
                <div className={styles.container}>
                    <NavigationList closeClickHandler={closeClickHandler} />
                    <BurgerCta closeClickHandler={closeClickHandler} />
                </div>
            </div>
        </div>
    )
}
