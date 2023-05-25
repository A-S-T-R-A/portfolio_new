import { useGLTF } from "@react-three/drei"
import { deathStar } from "../../../const/deathStar"
import { DEATH_STAR_SIZE } from "../../../const/sizes"

export function DeathStar() {
    const deathStarScene = useGLTF("./death_star/scene.gltf")
    const position = deathStar.journey[0][0]

    return (
        <group scale={DEATH_STAR_SIZE} position={position} rotation-y={-0.5}>
            <primitive object={deathStarScene.scene} />
        </group>
    )
}
