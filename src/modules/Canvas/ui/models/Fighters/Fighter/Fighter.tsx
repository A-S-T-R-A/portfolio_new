import { useFrame } from "@react-three/fiber"
import { Journey } from "../../../../types/types"
import { useRef } from "react"
import { FighterScene } from "./FighterScene"
import { FighterClass } from "../../../../model/FighterClass"
import { alignToX } from "../../../../lib/alignToX"

interface IFighter {
    journey: Journey
}

export function Fighter(props: IFighter) {
    const { journey } = props
    const fighterRef = useRef<THREE.Group>(null)
    const classRef = useRef(new FighterClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!fighterRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(fighterRef.current.position)
        fighterRef.current.position.set(...position)
        rotation && fighterRef.current.rotation.set(...alignToX(rotation))
    })

    return (
        <FighterScene
            fighterRef={fighterRef}
            scale={1}
            position={position}
            rotation={alignToX(rotation)}
        />
    )
}
