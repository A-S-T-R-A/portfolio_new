import { useState } from "react"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { AiFillGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"
import { Modal } from "shared/ui/Modal"
import { IProjectData } from "../../const/data"
import styles from "./Project.module.scss"
import { classNames } from "shared/lib/classNames/classNames"

export function Project({ data, isReverted }: { data: IProjectData; isReverted: boolean }) {
    const { name, description, technologies, code, demo, ModalData } = data

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className={styles.modal}>
                    {!!ModalData && <ModalData />}
                    <a href={demo || ""} target="_blank" rel="noreferrer" className={styles.btn}>
                        <GoLinkExternal className={styles.iconDemo} />
                        <Typography className={styles.btnText}>Live Demo</Typography>
                    </a>
                </div>
            </Modal>
            <div
                className={classNames(
                    styles.projectContainer,
                    { [styles.reverted]: isReverted },
                    []
                )}
            >
                <div className={styles.container}>
                    <div className={styles.content}>
                        <Typography variant={TypographyVariant.H3} isBold className={styles.name}>
                            {name}
                        </Typography>
                        <Typography
                            color={TypographyColor.LIGHT_GRAY}
                            className={styles.description}
                        >
                            {description}
                        </Typography>
                        <div className={styles.technologies}>
                            {technologies.map((item, index) => (
                                <Typography key={index} className={styles.technology}>
                                    {item}
                                </Typography>
                            ))}
                        </div>
                        <div className={styles.buttons}>
                            <div
                                className={classNames(styles.btn, { [styles.disabled]: !code })}
                                onClick={() => {
                                    if (code) {
                                        window.open(code, "_blank")
                                    } else {
                                        null
                                    }
                                }}
                            >
                                <AiFillGithub className={styles.iconCode} />
                                <Typography className={styles.btnText}>Code</Typography>
                                <div className={styles.nda}>Confidential: NDA signed</div>
                            </div>
                            <div
                                className={classNames(styles.btn, { [styles.disabled]: !demo })}
                                onClick={() => {
                                    if (demo) {
                                        if (ModalData) {
                                            setIsOpen(true)
                                        } else {
                                            window.open(demo, "_blank")
                                        }
                                    } else {
                                        null
                                    }
                                }}
                            >
                                <GoLinkExternal className={styles.iconDemo} />
                                <Typography className={styles.btnText}>Live Demo</Typography>
                                <div className={styles.nda}>Confidential: NDA signed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
