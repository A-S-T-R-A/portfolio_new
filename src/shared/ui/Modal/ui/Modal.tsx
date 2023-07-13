import { classNames, Mods } from "shared/lib/classNames/classNames"
import { ReactNode, useEffect, useState } from "react"
import { Portal } from "./components/Portal"
import { MODAL_ANIMATION_DELAY } from "../const/const"
import { AiOutlineClose } from "react-icons/ai"
import cls from "./Modal.module.scss"

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose } = props
    const [isOpening, setIsOpening] = useState(false)
    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsOpening(true)
            setIsMounted(true)
            setTimeout(() => {
                setIsOpening(false)
            }, MODAL_ANIMATION_DELAY)
        } else if (!isOpen && isMounted) {
            setIsClosing(true)
            setTimeout(() => {
                setIsClosing(false)
                setIsMounted(false)
            }, MODAL_ANIMATION_DELAY)
        }
    }, [isOpen, isMounted])

    const mods: Mods = {
        [cls.isOpen]: isMounted,
        [cls.isClosing]: isClosing,
        [cls.isOpening]: isOpening,
    }

    if (!isMounted) return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={() => onClose?.()}>
                    <div className={cls.content} onClick={e => e.stopPropagation()}>
                        <AiOutlineClose className={cls.close} onClick={() => onClose?.()} />
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
