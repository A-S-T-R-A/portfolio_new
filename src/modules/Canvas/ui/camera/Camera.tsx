import { PerspectiveCamera } from "@react-three/drei"

export function Camera() {
    /* const cameraRef = useRef(null)
    const startPosition = [0, 0, 400]
    const endPosition = [-2, -10, 400]

    const { vector } = getMoveCoef(startPosition, endPosition)

    function scrollHandler() {
        if (!cameraRef.current) return
        const [dx, dy, dz] = vector
        const t = document.body.getBoundingClientRect().top
        const deltaScroll = document.body.clientHeight - window.innerHeight
        if (dx !== 0) cameraRef.current.position.x = (-t / deltaScroll) * dx
        if (dy !== 0) cameraRef.current.position.y = (-t / deltaScroll) * dy
        if (dz !== 0) cameraRef.current.position.z = (-t / deltaScroll) * dz
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, []) */

    return <PerspectiveCamera makeDefault far={2500} near={0.1} fov={20} position={[0, 0, 400]} />
}
