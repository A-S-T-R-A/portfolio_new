import { useFrame } from "@react-three/fiber"
import { Journey, Rotation } from "../../../../types/types"
import { useRef } from "react"
import { Ship } from "../../../../model/Ship"
import { FighterScene } from "./FighterScene"
import { PI } from "../../../../lib/math/basics"

interface IDestroyer {
    journey: Journey
}

export function Fighter(props: IDestroyer) {
    const { journey } = props
    const fighterRef = useRef<THREE.Group>(null)
    const classRef = useRef(new Ship(journey))
    const { position, rotation } = classRef.current.getInitialData()

    function changeAxes(r: Rotation): Rotation {
        //model is initially aligned with z axis
        const [x, y, z] = r
        return [x, y + PI / 2, z]
    }

    useFrame(() => {
        if (!fighterRef.current) return
        const psn = classRef.current.move(fighterRef.current.position)
        const rotation = classRef.current.getInitialData().rotation
        fighterRef.current.position.set(...psn)
        fighterRef.current.rotation.set(...changeAxes(rotation))
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
