import { useRef } from "react"
import { ShuttleScene } from "./ShuttleScene"
import { Journey } from "../../../types/types"

import { ShuttleClass } from "../../../model/ShuttleClass"
import { alignToX } from "../../../lib/alignToX"
import { useFrame } from "@react-three/fiber"

interface IShuttle {
    journey: Journey
}

export function Shuttle(props: IShuttle) {
    const { journey } = props
    const shuttleRef = useRef<THREE.Group>(null)
    const classRef = useRef(new ShuttleClass(journey))

    const { position, rotation } = classRef.current.getInitialData()

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!shuttleRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(shuttleRef.current.position)
        shuttleRef.current.position.set(...position)
        rotation && shuttleRef.current.rotation.set(...alignToX(rotation))
    })

    return (
        <ShuttleScene shuttleRef={shuttleRef} position={position} rotation={alignToX(rotation)} />
    )
}

// <ShuttleScene shuttleRef={shuttleRef} /* scale={1} */ />
