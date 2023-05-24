import { useFrame } from "@react-three/fiber"
import { Journey, Rotation } from "../../../../types/types"
import { useRef } from "react"
import { PI } from "../../../../lib/math/basics"
import { FighterClass } from "../../../../model/FighterClass"
import { BomberScene } from "./BomberScene"

interface IFighter {
    journey: Journey
}

export function Bomber(props: IFighter) {
    const { journey } = props
    const bomberRef = useRef<THREE.Group>(null)
    const classRef = useRef(new FighterClass(journey))
    const { position, rotation } = classRef.current.getInitialData()

    function changeAxes(r: Rotation): Rotation {
        //model is initially aligned with z axis
        const [x, y, z] = r
        return [x, y + PI / 2, z]
    }

    useFrame(() => {
        const { speed, isReachedEnd } = classRef.current
        if (!bomberRef.current || isReachedEnd || speed === 0) return
        const { position, rotation } = classRef.current.move(bomberRef.current.position)
        bomberRef.current.position.set(...position)
        rotation && bomberRef.current.rotation.set(...rotation)
    })

    return (
        <BomberScene
            bomberRef={bomberRef}
            scale={1}
            position={position}
            rotation={changeAxes(rotation)}
        />
    )
}
