import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useHelper } from "@react-three/drei"
import { Stars } from "./models/Stars/Stars"
import { DeathStar } from "./models/DeathStar/DeathStar"
import styles from "./ThreeCanvas.module.scss"
import { Sun } from "./models/Sun/Sun"
import { useRef } from "react"
import { DirectionalLight, DirectionalLightHelper } from "three"
import { useControls } from "leva"
import { Destroyer } from "./models/Destroyer/Destroyer"

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
    return (
        <div className={styles.deathStar}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 20,
                    near: 0.1,
                    far: 2500,
                    position: [0, 0, 400],
                }}
            >
                {/* <gridHelper args={[1000, 100]} />
                <axesHelper args={[100]} /> */}
                {/* <OrbitControls enabled /> */}
                <Light />
                {/* <Light isTest /> */}
                <DeathStar />
                <Destroyer />
                <Sun />
                <Stars />
                <Preload all />
            </Canvas>
        </div>
    )
}
