import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Preload, useHelper, useScroll } from "@react-three/drei"
import { Stars } from "./models/Stars/Stars"
import { DeathStar } from "./models/DeathStar/DeathStar"
import styles from "./ThreeCanvas.module.scss"
import { Sun } from "./models/Sun/Sun"
import { useEffect, useRef } from "react"
import { DirectionalLight, DirectionalLightHelper } from "three"
import { useControls } from "leva"
import { Destroyer } from "./models/Destroyer/Destroyer"
import { getMoveCoef } from "./models/Destroyer/lib/getMoveCoef"

function Light({ isTest }: { isTest?: boolean }) {
    const lightRef = useRef<THREE.DirectionalLight>(null!)
    /*  useHelper(lightRef, THREE.DirectionalLightHelper)
     */
    /* const { intensity, x1, y1, z1, x2, y2, z2 } = useControls({
        intensity: { value: 4, min: 0, max: 5 },
        x1: { value: 180, min: -1000, max: 1000 },
        y1: { value: -10, min: -1000, max: 1000 },
        z1: { value: -450, min: -5000, max: 5000 },
        x2: { value: -15, min: -1000, max: 1000 },
        y2: { value: 5, min: -1000, max: 1000 },
        z2: { value: 450, min: -5000, max: 5000 },
    }) */

    if (isTest) {
        return (
            <directionalLight
                target-position={[x2, y2, z2]}
                ref={lightRef}
                position={[x1, y1, z1]}
                color={0xffffff}
                intensity={0}
            />
        )
    }

    return (
        <directionalLight
            target-position={[200, 0, -300]}
            ref={lightRef}
            position={[-1000, 0, 0]}
            color={0xffffff}
            intensity={5}
        />
    )
}

export function ThreeCanvas() {
    const cameraRef = useRef(null)
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
    }, [])

    return (
        <div className={styles.deathStar}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
            >
                <PerspectiveCamera
                    ref={cameraRef}
                    makeDefault
                    far={2500}
                    near={0.1}
                    fov={20}
                    position={startPosition}
                />
                {/* <gridHelper args={[1000, 100]} /> */}
                {/*  <axesHelper args={[100]} /> */}
                <OrbitControls enabled enableZoom={true} />
                <Light />
                {/* <Light isTest /> */}
                <DeathStar />
                <Destroyer />
                <Sun />
                {/*  <Stars /> */}
                <Preload all />
            </Canvas>
        </div>
    )
}
