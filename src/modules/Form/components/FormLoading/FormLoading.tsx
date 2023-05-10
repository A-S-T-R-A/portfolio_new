import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { FailContent } from "./components/FailContent/FailContent"
import { GratitudeContent } from "./components/GratitudeContent/GratitudeContent"
import { LoadingContent } from "./components/LoadingContent/LoadingContent"

import styles from "./FormLoading.module.css"
import AnimatedLoadingIcon from "shared/ui/AnimatedLoadingIcon/AnimatedLoadingIcon"

export function FormLoading({ loading, isSuccess }) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                {loading ? (
                    <AnimatedLoadingIcon className={styles.loadingIcon} />
                ) : isSuccess ? (
                    <AiOutlineCheckCircle className={styles.successIcon} />
                ) : (
                    <BiErrorCircle className={styles.failIcon} />
                )}
            </div>
            <div className={styles.contentContainer}>
                {loading ? <LoadingContent /> : isSuccess ? <GratitudeContent /> : <FailContent />}
            </div>
        </div>
    )
}
