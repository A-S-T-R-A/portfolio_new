import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export function Sun() {
    const sun = useGLTF("./sun/scene.gltf")
    const sunRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (!sunRef.current) return
        sunRef.current.rotation.y += 0.000345
    })

    return (
        <group ref={sunRef} scale={10} position={[-200, 0, 0]} rotation-x={0}>
            <primitive object={sun.scene} />
        </group>
    )
}
