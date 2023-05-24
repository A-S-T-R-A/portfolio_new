import { useFrame } from "@react-three/fiber"
import { Journey, Rotation } from "../../../../types/types"
import { useRef } from "react"
import { FighterScene } from "./FighterScene"
import { PI } from "../../../../lib/math/basics"
import { FighterClass } from "../../../../model/FighterClass"

interface IFighter {
    journey: Journey
}

export function Fighter(props: IFighter) {
    const { journey } = props
    const fighterRef = useRef<THREE.Group>(null)
    const classRef = useRef(new FighterClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    function changeAxes(r: Rotation): Rotation {
        //model is initially aligned with z axis
        const [x, y, z] = r
        return [x, y + PI / 2, z]
    }

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!fighterRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(fighterRef.current.position)
        fighterRef.current.position.set(...position)
        rotation && fighterRef.current.rotation.set(...changeAxes(rotation))
    })

    return (
        <FighterScene
            fighterRef={fighterRef}
            scale={1}
            position={position}
            rotation={changeAxes(rotation)}
        />
    )
}
