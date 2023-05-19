import { useGLTF } from "@react-three/drei"

export function DeathStar() {
    const deathStar = useGLTF("./death_star/scene.gltf")

    return (
        <group scale={1} position={[0, 0, 0]} rotation-y={-0.5}>
            <primitive object={deathStar.scene} />
        </group>
    )
}
