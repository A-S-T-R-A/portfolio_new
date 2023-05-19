import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import { getRotation } from "./lib/getRotation"
import { getMoveCoef } from "./lib/getMoveCoef"

const toRad = (n: number) => (n * 3.1415) / 180

export function Destroyer() {
    const destroyer = useGLTF("./destroyer/scene.gltf")
    const destroyerRef = useRef<THREE.Group>(null)

    const position = [180, -10, -450]
    const destination = [-15, 5, 450]
    const rotation = getRotation(position, destination)

    const coefRef = useRef(getMoveCoef(position, destination))

    useFrame(() => {
        if (!coefRef.current || !destroyerRef.current) return
        const speed = 0.8
        const {
            direction: [dx, dy, dz],
            limits: [lx, ly, lz],
            vector: [vx, vy, vz],
        } = coefRef.current

        const ineqX =
            vx > 0 ? destroyerRef.current.position.x > lx : destroyerRef.current.position.x < lx
        const ineqY =
            vy > 0 ? destroyerRef.current.position.y > ly : destroyerRef.current.position.y < ly
        const ineqZ =
            vz > 0 ? destroyerRef.current.position.z > lz : destroyerRef.current.position.z < lz

        destroyerRef.current.position.x += ineqX ? 0 : speed * dx
        destroyerRef.current.position.y += ineqY ? 0 : speed * dy
        destroyerRef.current.position.z += ineqZ ? 0 : speed * dz
    })

    return (
        <group ref={destroyerRef} scale={1} position={position} rotation={rotation}>
            <primitive object={destroyer.scene} />
        </group>
    )
}
