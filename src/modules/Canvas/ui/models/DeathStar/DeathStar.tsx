import { useGLTF } from "@react-three/drei"
import { deathStar } from "../../../const/deathStar"

export function DeathStar() {
    const deathStarScene = useGLTF("./death_star/scene.gltf")
    const position = deathStar.journey[0][0]

    return (
        <group scale={1} position={position} rotation-y={-0.5}>
            <primitive object={deathStarScene.scene} />
        </group>
    )
}
