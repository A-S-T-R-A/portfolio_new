import { PerspectiveCamera } from "@react-three/drei"
import { camera } from "../../const/camera"
import { useRef } from "react"

export function Camera() {
    const cameraRef = useRef<THREE.Camera>(null)
    const { start } = camera
    /* 
    const vector = useMemo((): Position => {
        const [x1, y1, z1] = start
        const [x2, y2, z2] = end
        return [x2 - x1, y2 - y1, z2 - z1] as Position
    }, [])

    function scrollHandler() {
        if (!cameraRef.current) return
        console.log(vector)
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

    return (
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault
            far={2500}
            near={0.1}
            fov={20}
            position={start}
        />
    )
}
