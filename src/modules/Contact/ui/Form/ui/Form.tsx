import { useRef, useState, useMemo, ChangeEvent, useCallback, FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"
import AnimatedLoadingIcon from "shared/ui/AnimatedLoadingIcon/AnimatedLoadingIcon"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { EMAIL_REG_EX, NAME_REG_EX } from "../const/regex"
import { FormStatus } from "./FormStatus/FormStatus"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Form.module.scss"

interface IFormData {
    name: string
    email: string
    message: string
}

const initialData = { name: "", email: "", message: "" }

export default function Form() {
    const [formData, setFormData] = useState<IFormData>(initialData)
    const [formErrors, setFormErrors] = useState<IFormData>(initialData)

    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function sendEmail() {
        setIsLoading(true)
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                formRef.current || "",
                import.meta.env.VITE_USER_ID
            )
            .then(
                () => {
                    setIsSuccess(true)
                    setTimeout(() => {
                        setIsSuccess(false)
                    }, 3000)
                    setFormData(initialData)
                    setFormErrors(initialData)
                },
                () => {
                    setIsError(true)
                    setTimeout(() => {
                        setIsError(false)
                    }, 3000)
                }
            )
            .finally(() => {
                setIsLoading(false)
            })
    }

    function checkInputsValid(formData: IFormData): boolean {
        const { name, email } = formData

        if (!NAME_REG_EX.test(name)) {
            setFormErrors(prev => ({ ...prev, name: "Enter Valid Name" }))
            nameRef.current?.scrollIntoView()
            return false
        }
        if (!EMAIL_REG_EX.test(email)) {
            setFormErrors(prev => ({ ...prev, email: "Enter Valid Email" }))
            emailRef.current?.scrollIntoView()
            return false
        }

        return true
    }

    const submitHandler = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            if (!checkInputsValid(formData)) return
            sendEmail()
        },
        [formData]
    )

    function changeHandler(e: ChangeEvent, key: keyof IFormData) {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement
        setFormData(prev => ({ ...prev, [key]: target.value }))
        setFormErrors(prev => ({ ...prev, [key]: "" }))
    }

    const content = useMemo(() => {
        switch (true) {
            case isLoading:
                return (
                    <FormStatus
                        icon={<AnimatedLoadingIcon className={styles.loadingIcon} />}
                        text="Loading..."
                    />
                )
            case isError:
                return (
                    <FormStatus
                        icon={<BiErrorCircle className={styles.failIcon} />}
                        text="Error! Please try again later"
                    />
                )
            case isSuccess:
                return (
                    <FormStatus
                        icon={<AiOutlineCheckCircle className={styles.successIcon} />}
                        text="Thanks! I will contact you soon"
                    />
                )

            default:
                return (
                    <form onSubmit={submitHandler} className={styles.form} ref={formRef}>
                        <div className={styles.formContainer}>
                            <div className={styles.inputWrap}>
                                <label htmlFor="nameInput">Your Name</label>
                                <input
                                    ref={nameRef}
                                    id="nameInput"
                                    className={classNames(styles.inputs, {
                                        [styles.inpError]: !!formErrors.name,
                                    })}
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={e => changeHandler(e, "name")}
                                    placeholder="What's your name?"
                                />
                                {!!formErrors.name && (
                                    <p className={styles.error}>{formErrors.name}</p>
                                )}
                            </div>
                            <div className={styles.inputWrap}>
                                <label htmlFor="emailInput">Your Email</label>
                                <input
                                    ref={emailRef}
                                    className={classNames(styles.inputs, {
                                        [styles.inpError]: !!formErrors.email,
                                    })}
                                    id="emailInput"
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={e => changeHandler(e, "email")}
                                    placeholder="What's your email?"
                                />
                                {!!formErrors.email && (
                                    <p className={styles.error}>{formErrors.email}</p>
                                )}
                            </div>
                            <div className={styles.textareaWrap}>
                                <label htmlFor="textarea">Your Message</label>
                                <textarea
                                    className={styles.textarea}
                                    id="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={e => changeHandler(e, "message")}
                                    placeholder="What's your message?"
                                />
                            </div>

                            <Button className={styles.btn} type="submit">
                                Send
                            </Button>
                        </div>
                    </form>
                )
        }
    }, [formData, formErrors, isLoading, isError, isSuccess, submitHandler])

    return (
        <div id="contact" className={styles.wrapper}>
            <Typography variant={TypographyVariant.H1} isBold>
                Contact Me
            </Typography>
            {content}
        </div>
    )
}
