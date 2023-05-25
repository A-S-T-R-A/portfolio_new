import { useFrame } from "@react-three/fiber"
import { Journey } from "../../../../types/types"
import { useRef } from "react"
import { BomberClass } from "../../../../model/BomberClass"
import { BomberScene } from "./BomberScene"
import { alignToX } from "../../../../lib/alignToX"

interface IFighter {
    journey: Journey
}

export function Bomber(props: IFighter) {
    const { journey } = props
    const bomberRef = useRef<THREE.Group>(null)
    const classRef = useRef(new BomberClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!bomberRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(bomberRef.current.position)
        bomberRef.current.position.set(...position)
        rotation && bomberRef.current.rotation.set(...alignToX(rotation))
    })

    return <BomberScene bomberRef={bomberRef} position={position} rotation={alignToX(rotation)} />
}
