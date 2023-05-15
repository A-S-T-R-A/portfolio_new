import * as THREE from "three"
import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Preload, useGLTF, OrbitControls } from "@react-three/drei"

import { CanvasLoader } from "../Loader/Loader.tsx"

function DeathStar() {
    const deathStar = useGLTF("./death_star/scene.gltf")
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001
        }
    })

    return (
        <group ref={groupRef} scale={0.4} position-y={0}>
            <primitive object={deathStar.scene} />
        </group>
    )
}

export function DeathStarCanvas() {
    return (
        <Canvas
            style={{ width: "1000px", height: "500px" }}
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
            <Suspense fallback={<CanvasLoader />}>
                <directionalLight position={[-40, 40, 50]} color={0xffffff} intensity={2} />
                <DeathStar />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}
