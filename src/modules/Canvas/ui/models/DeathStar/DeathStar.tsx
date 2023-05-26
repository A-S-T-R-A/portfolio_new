import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { deathStar } from "../../../const/deathStar"
import { DEATH_STAR_SIZE } from "../../../const/sizes"
import { DeathStarClass } from "../../../model/DeathStarClass"
import { useFrame } from "@react-three/fiber"
import { Rotation } from "modules/Canvas/types/types"
import { PI } from "modules/Canvas/lib/math/basics"

export function DeathStar() {
    const { journey, rateOfYRotation } = deathStar
    const deathStarScene = useGLTF("./death_star/scene.gltf")
    const deathStarRef = useRef<THREE.Group>(null)
    const classRef = useRef(new DeathStarClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    function alignDeathStar(r: Rotation): Rotation {
        const [x, y, z] = r
        return [-z, y + PI / 2, -x]
    }

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!deathStarRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(deathStarRef.current.position)
        deathStarRef.current.position.set(...position)
        if (rotation) {
            const [x, _, z] = alignDeathStar(rotation)
            deathStarRef.current.rotation.x = x
            deathStarRef.current.rotation.y -= rateOfYRotation
            deathStarRef.current.rotation.z = z
        } else {
            deathStarRef.current.rotation.y -= rateOfYRotation
        }
    })

    return (
        <group
            ref={deathStarRef}
            scale={DEATH_STAR_SIZE}
            position={position}
            rotation={alignDeathStar(rotation)}
        >
            <primitive object={deathStarScene.scene} />
        </group>
    )
}
