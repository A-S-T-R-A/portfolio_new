import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload } from "@react-three/drei"
/* import { DeathStar } from "./models/DeathStar/DeathStar" */
import { Sun } from "./models/Sun/Sun"
/* import { useControls } from "leva" */
import { Camera } from "./camera/Camera"
import { Light } from "./light/Light"
/* import { Stars } from "./models/Stars/Stars" */
import { Destroyers } from "./models/Destroyers/Destroyers"
import styles from "./Canvas.module.scss"
import { Fighters } from "./models/Fighters/Fighters"

export function SceneCanvas() {
    return (
        <div className={styles.deathStar}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Camera />
                {/* <gridHelper args={[1000, 100]} /> */}
                {/* <axesHelper args={[100]} /> */}
                <OrbitControls enabled enableZoom={true} />
                <Light />
                {/* <Light isTest /> */}
                {/* <DeathStar /> */}
                <Destroyers />
                <Fighters />
                <Sun />
                <Preload all />
            </Canvas>
        </div>
    )
}
