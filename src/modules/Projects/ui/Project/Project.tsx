import { useState } from "react"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { AiFillGithub } from "react-icons/ai"
import { GoLinkExternal } from "react-icons/go"
import { Modal } from "shared/ui/Modal"
import { IProjectData } from "../../const/data"
import styles from "./Project.module.scss"

export function Project({ data }: { data: IProjectData }) {
    const { name, description, img, technologies, code, demo, ModalData } = data

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className={styles.modal}>
                    {!!ModalData && <ModalData />}
                    <a href={demo} target="_blank" rel="noreferrer" className={styles.btn}>
                        <GoLinkExternal className={styles.iconDemo} />
                        <Typography className={styles.btnText}>Live Demo</Typography>
                    </a>
                </div>
            </Modal>

            <div className={styles.container}>
                <div className={styles.content}>
                    <Typography variant={TypographyVariant.H3} isBold className={styles.name}>
                        {name}
                    </Typography>
                    <Typography color={TypographyColor.LIGHT_GRAY} className={styles.description}>
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
                        <a href={code} target="_blank" rel="noreferrer" className={styles.btn}>
                            <AiFillGithub className={styles.iconCode} />
                            <Typography className={styles.btnText}>Code</Typography>
                        </a>
                        <div
                            className={styles.btn}
                            onClick={() => {
                                if (ModalData) {
                                    setIsOpen(true)
                                } else {
                                    window.open(demo, "_blank")
                                }
                            }}
                        >
                            <GoLinkExternal className={styles.iconDemo} />
                            <Typography className={styles.btnText}>Live Demo</Typography>
                        </div>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={img} alt="project" />
                </div>
            </div>
        </>
    )
}
