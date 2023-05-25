import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { DestroyerScene } from "./DestroyerScene"
import { Journey } from "../../../../types/types"
import { DestroyerClass } from "../../../../model/DestroyerClass"
import { alignToX } from "../../../../lib/alignToX"

interface IDestroyer {
    journey: Journey
}

export function Destroyer(props: IDestroyer) {
    const { journey } = props
    const destroyerRef = useRef<THREE.Group>(null)
    const classRef = useRef(new DestroyerClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!destroyerRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(destroyerRef.current.position)
        destroyerRef.current.position.set(...position)
        rotation && destroyerRef.current.rotation.set(...alignToX(rotation))
    })

    return (
        <DestroyerScene
            destroyerRef={destroyerRef}
            scale={1}
            position={position}
            rotation={alignToX(rotation)}
        />
    )
}

//useGLTF.preload("/scene.gltf")
