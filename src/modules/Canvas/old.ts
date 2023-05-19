/* import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { useState } from "react"
import styles from "./StarsCanvas.module.scss"

function Stars() {
    const [cont, setCont] = useState<THREE.InstancedMesh | null>(null)
    const count = 2000
    const temp = new THREE.Object3D()

    function rend() {
        if (!cont) return
        for (let i = 0; i < count; i++) {
            const x = Math.floor(Math.random() * 1499) + 1 - 800
            const y = Math.floor(Math.random() * 1499) + 1 - 500
            const z = Math.floor(Math.random() * -499) - 250
            temp.position.set(x, y, z)

            temp.updateMatrix()
            cont.setMatrixAt(i, temp.matrix)
        }

        cont.instanceMatrix.needsUpdate = true
    }

    rend()

    useFrame(() => {
        const matrix = new THREE.Matrix4()
        if (!cont) return
        for (let i = 0; i < 1000; i++) {
            cont.getMatrixAt(i, matrix)

            const position = new THREE.Vector3()
            const rotation = new THREE.Quaternion()
            const scale = new THREE.Vector3()
            matrix.decompose(position, rotation, scale)

            const scaleRange = 1
            const minScale = 0.5
            const time = performance.now() / 3000
            const newScale = ((Math.sin(time * 2) + 1) / 2) * scaleRange + minScale

            const star = new THREE.Object3D()
            star.position.copy(position)
            star.scale.set(newScale, newScale, newScale)

            star.updateMatrix()
            cont.setMatrixAt(i, star.matrix)
        }

        cont.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh
            ref={node => {
                setCont(node)
            }}
            position={[0, 2, 0]}
            args={[
                null as unknown as THREE.BufferGeometry,
                null as unknown as THREE.Material | THREE.Material[],
                count,
            ]}
        >
            <sphereGeometry args={[0.5, 64, 32, 1]} />
            <meshBasicMaterial />
        </instancedMesh>
    )
}

export function StarsCanvas() {
    return (
        <div className={styles.starsBg}>
            <Canvas
                frameloop="always"
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 50,
                    near: 0.1,
                    far: 1000,
                    position: [0, 0, 50],
                }}
            >
                <Stars />
            </Canvas>
        </div>
    )
}
 */

/* import { Html, useProgress } from "@react-three/drei"
import styles from "./Loader.module.scss"

export function CanvasLoader() {
    const { progress } = useProgress()
    return (
        <Html
            as="div"
            center
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <span className={styles.loader}></span>
            <p
                style={{
                    fontSize: 14,
                    color: "#F1F1F1",
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}
 */

/* .loader {
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    animation: mulShdSpin 1.1s infinite ease;
    transform: translateZ(0);
}

@keyframes mulShdSpin {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2),
            2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
            0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
            -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff,
            2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
            0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2),
            -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
            1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
            1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
            1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
            -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
            1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
            -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
            1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
            -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
            -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
            1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
            1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
            -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
            -1.8em -1.8em 0 0em #ffffff;
    }
}
 */

/* type Position = [number, number, number]

export class Trajectory {
    height: number
    shift: number
    initialPosition: Position
    initialScale: number
    trajectory: Position[]

    constructor(height: number, shift: number, initialPosition?: Position, initialScale?: number) {
        this.height = height
        this.shift = shift
        this.trajectory = []
        this.initialPosition = initialPosition || [0, 0, 0]
        this.initialScale = initialScale || 1
        this.buildTrajectory()
    }

    sq = (n: number) => n ** 2
    sqrt = (n: number) => Math.sqrt(n)
    roundToNth = (number: number, n = 0) => Math.round(number * 10 ** n) / 10 ** n

    buildTrajectory() {
        const { sq, sqrt, roundToNth } = this
        const r = this.height / 2
        const k = sq(r) / sq(this.shift)
        const b = -r
        const trajectory: typeof this.trajectory = []
        const [initX, initY, initZ] = this.initialPosition

        for (let t = 0; t >= -this.height; t--) {
            const top = sq(r) - sq(b) - sq(t) + 2 * b * t
            const division = top / k
            const res = roundToNth(sqrt(division), 2)
            const x = res + initX
            const y = t * 0.01 + initY
            const z = 0 + initZ
            trajectory.push([x, y, z])
        }

        this.trajectory = trajectory
    }

    getCoordinates(t: number): Position {
        return this.trajectory[this.roundToNth(Math.abs(t))]
    }
    getInitialCoordinates(): Position {
        return this.initialPosition
    }
    getInitialScale(): number {
        return this.initialScale
    }
} */

/* import { Trajectory } from "./Trajectory"
import { DeviceSize } from "./getCurrentDevice"

export function getTrajectoryData(device: DeviceSize, height: number): Trajectory {
    switch (device) {
        case "480":
            return new Trajectory(height, 100, [0, 20, 0], 0.4)
        case "768":
            return new Trajectory(height, 100, [0, 20, 0], 0.5)
        case "960":
            return new Trajectory(height, 100, [0, 20, 0], 0.6)
        case "1200":
            return new Trajectory(height, 100, [60, 0, 0], 0.6)
        case "1201+":
            return new Trajectory(height, 100, [400, 0, -1100], 0.5)
        default:
            return new Trajectory(height, 100, [60, 0, 0], 0.8)
    }
} */

//Death star rotation
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
