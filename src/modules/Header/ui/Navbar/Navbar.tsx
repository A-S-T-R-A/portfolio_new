import { SocialIcons } from "shared/components/SocialIcons"
import { NavigationList } from "../NavigationList/NavigationList"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Navbar.module.css"

export function Navbar({ className }: { className?: string }) {
    return (
        <div className={classNames(styles.navBar, {}, [className])}>
            <NavigationList />
            <SocialIcons />
        </div>
    )
}
