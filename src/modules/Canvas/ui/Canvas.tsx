import { Canvas } from "@react-three/fiber"
import { Preload } from "@react-three/drei"
/* import { DeathStar } from "./models/DeathStar/DeathStar" */
/* import { Sun } from "./models/Sun/Sun" */
/* import { useControls } from "leva" */
import { Camera } from "./camera/Camera"
import { Light } from "./light/Light"
import { Destroyers } from "./models/Destroyers/Destroyers"
import { Fighters } from "./models/Fighters/Fighters"
import styles from "./Canvas.module.scss"
import { DeathStar } from "./models/DeathStar/DeathStar"
import { DeviceType } from "shared/data"

export function SceneCanvas({ currentDevice }: { currentDevice: DeviceType }) {
    return (
        <div className={styles.container}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
            >
                <Camera />
                {/* <axesHelper args={[100]} /> */}
                {/* <OrbitControls enabled enableZoom={true} /> */}
                <Light />
                {/* <Light isTest /> */}
                <DeathStar currentDevice={currentDevice} />
                <Destroyers currentDevice={currentDevice} />
                <Fighters />
                {/* <Sun /> */}
                <Preload all />
            </Canvas>
        </div>
    )
}
