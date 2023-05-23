import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { DestroyerScene } from "./DestroyerScene"
import { Journey } from "../../../../types/types"
import { Ship } from "../../../../model/Ship"

interface IDestroyer {
    journey: Journey
}

export function Destroyer(props: IDestroyer) {
    const { journey } = props
    const destroyerRef = useRef<THREE.Group>(null)
    const classRef = useRef(new Ship(journey))
    const { position, rotation } = classRef.current.getInitialData()

    useFrame(() => {
        if (!destroyerRef.current) return
        const psn = classRef.current.move(destroyerRef.current.position)
        const rotation = classRef.current.getInitialData().rotation
        destroyerRef.current.position.set(...psn)
        destroyerRef.current.rotation.set(...rotation)
    })

    return (
        <DestroyerScene
            destroyerRef={destroyerRef}
            scale={1}
            position={position}
            rotation={rotation}
        />
    )
}

//useGLTF.preload("/scene.gltf")
