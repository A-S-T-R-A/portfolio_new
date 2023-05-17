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
