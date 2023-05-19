import { useEffect, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { getCurrentDevice } from "./lib/getCurrentDevice"
import { getTrajectoryData } from "./lib/getTrajectoryData"
import { Trajectory } from "./lib/Trajectory"

export function DeathStar() {
    const HEIGHT = document.body.clientHeight - window.innerHeight

    const [isInited, setIsInited] = useState(false)
    const [_, setForceRender] = useState(0)
    const [device, setDevice] = useState(() => getCurrentDevice(window.innerWidth))

    const deathStar = useGLTF("./death_star/scene.gltf")
    const sphereRef = useRef<THREE.Group>(null)
    const trajectoryRef = useRef<Trajectory | null>(getTrajectoryData(device, HEIGHT))
    const directionXRef = useRef(1)

    function handleScroll() {
        /* if (!sphereRef.current || !trajectoryRef.current) return
        const t = document.body.getBoundingClientRect().top
        sphereRef.current.position.set(...trajectoryRef.current.getCoordinates(t)) */
    }

    function handleResize() {
        setDevice(getCurrentDevice(window.innerWidth))
    }

    useEffect(() => {
        setIsInited(true)
        if (!isInited) return

        const HEIGHT = document.body.clientHeight - window.innerHeight
        trajectoryRef.current = getTrajectoryData(device, HEIGHT)
        trajectoryRef.current?.buildTrajectory()
        setForceRender(prev => prev + 1)
    }, [device])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    // useFrame(() => {
    //     if (!sphereRef.current) return
    //     sphereRef.current.rotation.x += 0.0002 * directionXRef.current
    //     if (sphereRef.current.rotation.x >= Math.PI / 20) {
    //         directionXRef.current = -1
    //     } else if (sphereRef.current.rotation.x <= -Math.PI / 20) {
    //         directionXRef.current = 1
    //     }
    //     sphereRef.current.rotation.y += 0.001
    // })

    return (
        <group
            ref={sphereRef}
            scale={trajectoryRef.current?.getInitialScale() || 1}
            position={trajectoryRef.current?.getInitialCoordinates() || [0, 0, 0]}
            rotation-y={-0.5}
        >
            <primitive object={deathStar.scene} />
        </group>
    )
}
