import { useEffect, useRef } from "react"
import styles from "./FormUi.module.css"
import { Button } from "shared/ui/Button/Button"
import { classNames } from "shared/lib/classNames/classNames"

export function FormUi({
    submitHandler,
    handleNameChange,
    handleEmailChange,
    formRef,
    nameError,
    emailError,
    name,
    email,
    onClick,
    message,
    handleMessageChange,
}) {
    const nameRef = useRef()
    const emailRef = useRef()

    const nameInputClassName = classNames(styles.inputs, {
        [styles.inpError]: nameError,
    })

    const emailInputClassName = classNames(styles.inputs, {
        [styles.inpError]: emailError,
    })

    useEffect(() => {
        function focusOnErrorField() {
            if (nameError) {
                nameRef.current.scrollIntoView()
            } else if (emailError) {
                emailRef.current.scrollIntoView()
            }
        }

        focusOnErrorField()
    }, [nameError, emailError])

    return (
        <form onSubmit={submitHandler} className={styles.form} ref={formRef}>
            <div className={styles.formContainer}>
                <div className={styles.inputWrap}>
                    <input
                        ref={nameRef}
                        id="nameInput"
                        className={nameInputClassName}
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Your Name"
                    />
                    {nameError && <p className={styles.error}>Enter Valid Name</p>}
                </div>
                <div className={styles.inputWrap}>
                    <input
                        ref={emailRef}
                        className={emailInputClassName}
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Your Email"
                    />
                    {emailError && <p className={styles.error}>Enter Valid Email</p>}
                </div>
                <div className={styles.textareaWrap}>
                    <textarea
                        className={styles.textarea}
                        type="text"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Your Message"
                    />
                </div>

                <Button className={styles.btn} onClick={onClick}>
                    Submit
                </Button>
            </div>
        </form>
    )
}
