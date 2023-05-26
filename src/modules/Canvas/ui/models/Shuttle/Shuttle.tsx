import { useEffect, useRef } from "react"
import { ShuttleScene } from "./ShuttleScene"
import { Journey } from "../../../types/types"
import { ShuttleClass } from "../../../model/ShuttleClass"
import { alignToX } from "../../../lib/alignToX"
import { useFrame } from "@react-three/fiber"

interface IShuttle {
    journey: Journey
    delay: number
}

export function Shuttle(props: IShuttle) {
    const { journey, delay } = props
    const shuttleRef = useRef<THREE.Group>(null)
    const classRef = useRef(new ShuttleClass(journey))
    const isCanMoveRef = useRef(false)

    const { position, rotation } = classRef.current.getData()

    useEffect(() => {
        setTimeout(() => {
            isCanMoveRef.current = true
        }, delay)
    }, [])

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!shuttleRef.current || isReachedEnd || speed === 0 || !isCanMoveRef.current) return
        const { position, rotation } = classRef.current.move(shuttleRef.current.position)
        shuttleRef.current.position.set(...position)
        rotation && shuttleRef.current.rotation.set(...alignToX(rotation))
    })

    return (
        <ShuttleScene shuttleRef={shuttleRef} position={position} rotation={alignToX(rotation)} />
    )
}

// <ShuttleScene shuttleRef={shuttleRef} /* scale={1} */ />
