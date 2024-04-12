import Lottie from "react-lottie"
import Animation from "./Animation.json"

interface IAnimatedScrollProps {
    query: string
    height: string
    width: string
    className?: string
}

export function AnimatedScroll({ query, height, width, className }: IAnimatedScrollProps) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }

    function clickHandler() {
        document.querySelector(query)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={className} onClick={clickHandler}>
            <Lottie options={defaultOptions} height={height} width={width} />
        </div>
    )
}
