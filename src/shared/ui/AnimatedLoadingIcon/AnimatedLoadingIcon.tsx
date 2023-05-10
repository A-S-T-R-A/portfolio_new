import styles from "./AnimatedLoadingIcon.module.css"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

function AnimatedLoadingIcon({ className }) {
    return <AiOutlineLoading3Quarters className={`${styles.icon} ${className}`} />
}

export default AnimatedLoadingIcon
